import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';

export default class PricingEn extends React.Component {
  displayName = 'PricingEn'

  render() {
    return (
      <Translation locales={['en']} exclude={['en-GB','en-IE']}>
        <div className='page-hero--pricing page-hero'>
          <div className='site-container'>
            <div className='grid pricing-options u-center u-padding-Bxl'>
              <div className='grid__cell u-padding-Vxl u-padding-Rxs'>
                <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless</h1>
                <div className='u-background-dark-gray-darken u-padding-Vxl'>
                  <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' />
                  </h2>
                  <p className='u-text-heading-light u-text-center u-color-invert u-text-s u-margin-Txxs'>
                    Per transaction
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-heading'>
                    <b>For organisations that want total control</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b><Message pointer='pricing.pro_monthly_fee' /> monthly fee</b>, no hidden charges
                  </li>
                  <li className='pricing-options__list-item'>
                    For businesses taking <b><Message pointer='pricing.pro_number_of_monthly_payments' /></b> per month
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Find out more about Pro</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contact sales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-heading'>About our pricing</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <b>
                  Are there really no other fees?
                </b>
              </div>
              <p className='u-color-p'>
                No, we only charge you the <Message pointer='pricing.pro_monthly_fee' /> monthly fee and a fee for each transaction.
                We never charge for chargebacks or payment failures.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Do you offer discounts for large volume?</b>
              </div>
              <p className='u-color-p'>
                Yes. Our transaction fees decrease from 1,000 payments per month.
                To find out more, please <Link to='contact_sales' className='u-link-color-p u-text-underline'>contact sales</Link>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-heading'>
                <b>Are there any implementation costs?</b>
              </div>
              <p className='u-color-p'>
                No, you won't pay to implement GoCardless and our support is free.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Will I still be charged if a payment fails?</b>
              </div>
              <p className='u-color-p'>
                No. We only take fees for successful payments.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>Got any questions?</h2>
            <p className='u-color-p u-margin-Ts'>Speak with one of our payments experts on <Message pointer='phone_local' /></p>
            <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Contact sales</Link>
          </div>
        </div>
      </Translation>
    );
  }
}
