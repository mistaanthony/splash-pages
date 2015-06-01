import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';

export default class SecurityEn extends React.Component {
  displayName = 'SecurityEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-center u-padding-Vxm'>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Authorised by the FCA
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                <Message pointer='security.fca_authorised_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Trusted by thousands
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                <Message pointer='security.trusted_by_thousands_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Funded by prestigious investors
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Balderton Capital and Accel Partners are among the investors in GoCardless.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                <Message pointer='security.consumer_protection_title' />
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                If anything goes wrong with a transaction, payers are entitled to an instant refund.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Military grade encryption
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                All sensitive details are RSA encrypted, and only communicated over secure channels.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Safeguarded bank accounts
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Money collected by GoCardless is held in designated client monies accounts.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <Translation locales={['en']} exclude={['en-GB']}>
          <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>Got any questions?</h2>
              <p className='u-color-p u-margin-Ts'>Speak with one of our experts on <Message pointer='phone_local' /></p>
              <Link to='contact_sales' query={{ s: 'security' }} className='btn btn--hollow u-margin-Tm'>Contact sales</Link>
            </div>
          </div>
        </Translation>
        <Translation locales='en-GB'>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <a href='/merchants/new' className='btn'>
                <Message pointer='cta.basic' />
              </a>
              <p className='u-color-p u-margin-Ts'>No set up costs, no hidden charges, no commitments</p>
            </div>
          </div>
        </Translation>
      </Translation>
    );
  }
}
