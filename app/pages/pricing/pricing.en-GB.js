import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class PricingEnGb extends React.Component {
  displayName = 'PricingEnGb'

  render() {
    return (
      <Translation locales={['en-GB','en-IE']}>
        <div className='page-hero--pricing page-hero'>
          <div className='site-container'>
            <div className='grid pricing-options u-center u-padding-Bxl'>
              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless</h1>
                <div className='u-relative u-background-primary u-padding-Vxl'>
                  <Translation locales='en-GB'>
                    <div className='pricing-options__badge'>
                      <img src='/images/pricing/most-popular-badge@2x.png' alt='most popular' />
                    </div>
                  </Translation>
                  <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>
                    <Message pointer='pricing.per_transaction_amount_normal' />
                  </h2>
                  <p className='u-text-heading-light u-text-center u-color-invert u-text-s u-margin-Txxs'>
                    Per transaction, capped at <Message pointer="pricing.cost_cap" />
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-heading'>
                    <b>Perfect for small to medium sized businesses</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    No setup costs, hidden fees, or commitments</li>
                  <li className='pricing-options__list-item'>
                    Scale pricing available (<a href='#scale-pricing-container'>?</a>)
                  </li>
                  <IfLinkExists to='features'>
                    <li className='pricing-options__list-item'>
                      <Link to='features'>Find out more about GoCardless</Link>
                    </li>
                  </IfLinkExists>
                  <Translation locales={['en']} exclude={['en-GB']}>
                    <li className='pricing-options__list-button'>
                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn u-size-full'>Contact sales</Link>
                    </li>
                  </Translation>
                  <Translation locales='en-GB'>
                    <li className='pricing-options__list-button'>
                      <a href='/merchants/new' className='btn u-size-full'>Sign up today</a>
                    </li>
                  </Translation>
                </ul>
              </div>
              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless Pro</h1>
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
                  Are there any other fees?
                </b>
              </div>
              <p className='u-color-p'>
                No, there are no other fees except from those listed in the table above.
                We never charge for chargebacks or payment failures.<br />
                With GoCardless, all you ever pay is <Message pointer='pricing.per_transaction_amount_normal' /> of the transaction amount,
                up to a maximum of <Message pointer="pricing.cost_cap" />.<br />
                With GoCardless Pro, we charge you the <Message pointer='pricing.pro_monthly_fee' /> monthly fee and
                a fee for each transaction.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Do you offer discounts for large volume?</b>
              </div>
              <p className='u-color-p'>
                Yes. Discounts for high volume are built into the pricing of GoCardless Pro,
                and scale pricing is available on request for users of regular GoCardless that take over 250 payments per month.
                To find out more, please <Link to='contact_sales' className='u-link-color-p u-text-underline'>contact sales</Link>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-heading'>
                <b>What does ‘capped at <Message pointer="pricing.cost_cap" />’ mean?</b>
              </div>
              <p className='u-color-p'>
                You'll never pay more than <Message pointer="pricing.cost_cap" /> per transaction
                even if the transaction value is greater than <Message pointer='pricing.normal_capped_at_amount' />.
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
            <Translation locales={['en']} exclude={['en-GB']}>
              <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Contact sales</Link>
            </Translation>
            <Translation locales='en-GB'>
              <a href='/merchants/new/' className='btn btn--hollow u-margin-Tm'>Sign up today</a>
            </Translation>
          </div>
        </div>
      </Translation>
    );
  }
}
