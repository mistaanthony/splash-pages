import React from 'react';
import Page from '../../components/page/page';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';

export default class ContactSales extends React.Component {
  displayName = 'ContactSales'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bl'>
          <div className='site-container u-margin-Vxm'>
            <h1 className='u-text-heading u-text-center u-color-invert u-text-xl u-text-light'>
              <Message pointer='contact_sales.page_title' />
            </h1>
            <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
              <Message pointer='contact_sales.page_description' />
            </p>
          </div>
        </div>

        <div className='site-container grid grid--center u-margin-Vxl u-padding-Vxl'>
          <div className='grid__cell u-size-1of2'>
            <ProspectForm prospectType='sales' />
            <hr />
            <p className='u-text-center u-color-meta u-margin-Bs'>
              <b><Message pointer='contact_sales.talk_to_us' /></b><br />
              <Message pointer='contact_sales.call_us' /> <Message pointer='phone_local' />
              <Translation locales='en-GB'>
                <br />(<Message pointer='phone_full' /> from outside the UK)
              </Translation>
            </p>
            <hr />
            <p className='u-text-center u-color-meta u-margin-Bs'>
              <b><Message pointer='contact_sales.information1' /></b><br />
              <Message pointer='contact_sales.information2' />
            </p>
          </div>
        </div>
      </Page>
    );
  }
}
