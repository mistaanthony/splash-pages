import includes from 'lodash/collection/includes';
import assign from 'lodash/object/assign';
import request from 'superagent';
import React from 'react';
import Message from '../../components/message/message';
import {getMessage} from '../../components/intl/intl';
import {PropTypes} from '../../helpers/prop-types/prop-types';
import classNames from 'classnames';
import {trackEvent} from '../../helpers/gtm-tracker/gtm-tracker';
import ProspectFormFr from './prospect-form.fr';

const prospectTypes = {
  sales: {
    endpoint: '/api/v1/prospects/sales',
    trackingLabel: 'ContactSales',
  },
};

const ProspectFormPropTypes = {
  prospectType(props, propName) {
    const types = Object.keys(prospectTypes);
    const value = props[propName];
    if (!includes(types, value)) {
      throw new TypeError(`prospectType (${value}) is not allowed (${types})`);
    }
  },
};

export default class ProspectForm extends React.Component {
  displayName = 'ProspectForm'

  static propTypes = {
    prospectType: ProspectFormPropTypes.prospectType,
  }

  static contextTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
      isSubmitting: false,
      errorMessage: '',
      responseData: null,
      formData: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = event.target;
    var formData = assign({}, this.state.formData, {
      [input.name]: input.value,
    });

    // Unset unselected checkboxes or radio buttons
    if ((input.type === 'checkbox' || input.type === 'radio') && !input.checked) {
      delete formData[input.name];
    }

    this.setState({ formData: formData });
  }

  onSubmit(event) {
    const { prospectType } = this.props;
    const { currentLocale, pathname } = this.context;
    const { trackingLabel } = prospectTypes[prospectType];

    const formData = assign({}, this.state.formData, {
      'prospect[metadata][locale]': currentLocale,
      'prospect[metadata][path]': pathname,
    });

    const oldTitle = window.document.title;
    document.title = 'Saving...';
    this.setState({ isSubmitting: true });

    request
      .post(event.target.action)
      .type('form')
      .accept('application/json')
      .send(formData)
      .end((err, response) => {
        trackEvent(trackingLabel);
        document.title = oldTitle;
        this.setState({ isSubmitting: false });

        if (response.ok) {
          // Scroll to top showing notification
          window.scrollTo(0, 0);
          this.setState({ isSuccess: true });
          this.setState({ responseData: response && response.data });
        } else {
          console.error(err);
          this.setState({ isSuccess: false });
          const error = response.body && response.body.error || response.text;
          this.setState({ errorMessage: error });
        }
      });

    event.preventDefault();
  }

  render() {
    const { messages } = this.context;
    const { prospectType } = this.props;
    const { endpoint } = prospectTypes[prospectType];
    const size = this.state.responseData && this.state.responseData.size || 'default';

    return (
      <div>
        <form acceptCharset='UTF-8' action={endpoint} method='post' onChange={this.handleChange} onSubmit={this.onSubmit}>
          <input className='u-is-hidden' id='prospect_nofill' name='prospect[nofill]' placeholder='Do not fill me in' type='email' />

          <div className={classNames({
            'u-is-hidden notice notice--error u-margin-Bm': true,
            'u-is-visible': !this.state.isSuccess,
          })}>
            { this.state.errorMessage }
          </div>
          <div className={classNames({
            'u-is-hidden notice notice--success u-margin-Bm': true,
            'u-is-visible': this.state.isSuccess,
          })}>
            <Message pointer={`prospect_form.success_messages.${size}`} />
          </div>

          <label className='label label--stacked' htmlFor='prospect_name'>
            <Message pointer='prospect_form.name_label' />
          </label>
          <input className='input input--stacked' id='prospect_name' name='prospect[name]'
            placeholder={getMessage(messages, 'prospect_form.name_placeholder')} required type='text' />

          <label className='label label--stacked' htmlFor='prospect_email'>
            <Message pointer='prospect_form.email_label' />
          </label>
          <input className='input input--stacked' id='prospect_email' name='prospect[email]'
            placeholder={getMessage(messages, 'prospect_form.email_placeholder')} required type='email' />

          <label className='label label--stacked' htmlFor='prospect_phone_number'>
            <Message pointer='prospect_form.phone_label' />
          </label>
          <input className='input input--stacked' id='prospect_phone_number' name='prospect[phone_number]'
            placeholder={getMessage(messages, 'prospect_form.phone_placeholder')} required type='text' />

          <ProspectFormFr />

          <button className='btn btn--block u-margin-Tl' type='submit'>
            <Message pointer='prospect_form.submit' />
          </button>
        </form>
      </div>
    );
  }
}
