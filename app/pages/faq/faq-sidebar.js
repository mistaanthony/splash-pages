import React from 'react';
import Message from '../../components/message/message';

export default class FaqSidebar extends React.Component {
  displayName = 'FaqSidebar';

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div className='u-size-5of6'>
          {this.props.children}
          <hr className='u-size-11of12' />
          <p className='para u-padding-Txs'>
            <Message pointer='faq.sidebar' />&nbsp;
            <Message pointer='phone_local' />
          </p>
        </div>
      </div>
    );
  }
}
