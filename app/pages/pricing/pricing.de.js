import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';

export default class PricingDe extends React.Component {
  displayName = 'PricingDe'

  render() {
    return (
      <Translation locales='de'>
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
                    Pro Zahlung
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-heading'>
                    <b>Für Unternehmen, die volle Kontrolle suchen</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b><Message pointer='pricing.pro_monthly_fee' /> monatliche Gebühr</b>, keine versteckten Gebühren
                  </li>
                  <li className='pricing-options__list-item'>
                    Für Unternehmen mit <b><Message pointer='pricing.pro_number_of_monthly_payments' /></b> Zahlungen im Monat
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Erfahren Sie mehr über Pro</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-heading'>Über unsere Preise</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <b>
                  Gibt es wirklich keine weiteren Gebühren?
                </b>
              </div>
              <p className='u-color-p'>
                Richtig, wir berechnen Ihnen nur <Message pointer='pricing.pro_monthly_fee' /> pro Monat und eine Gebühr für jede Zahlung.
                Wir erheben keine Gebühren für Rücklastschriften oder misslungene Zahlungen.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Bieten Sie Preisnachlässe für große Volumen?</b>
              </div>
              <p className='u-color-p'>
                Ja, die Gebühr pro Zahlung verringert sich ab 1000 Zahlungen im Monat.
                Um mehr darüber zu erfahren, kontaktieren Sie uns
                bitte <Link to='contact_sales' className='u-link-color-p u-text-underline'>hier</Link>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-heading'>
                <b>Muss ich für die Implementierung zahlen?</b>
              </div>
              <p className='u-color-p'>
                Nein, die Nutzung unserer API für eine Implementierung mit Ihren Systemen ist kostenfrei.</p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Fallen Gebühren für gescheiterte Zahlungen an?</b>
              </div>
              <p className='u-color-p'>
                Nein, wir erheben Gebühren ausschließlich für erfolgreiche Zahlungen.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>Haben Sie Fragen?</h2>
            <p className='u-color-p u-margin-Ts'>Sprechen Sie mit einem unserer Zahlungsexperten: <Message pointer='phone_local' /></p>
            <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Kontakt</Link>
          </div>
        </div>
      </Translation>
    );
  }
}
