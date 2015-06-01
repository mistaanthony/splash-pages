import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Tabs from '../../components/tabs/tabs';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import WhiteLabelIcon from '../../icons/svg/white-label';
import MobileIcon from '../../icons/svg/mobile';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';

export default class ProDe extends React.Component {
  displayName = 'ProDe'

  render() {
    return (
      <Translation locales='de'>
        <div>
          <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>100% Kontrolle über
                  Ihre Lastschriften</h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Eine bahnbrechende Platform, um Ihr Netzwerk<br />für wiederkehrende Zahlungen zu bauen
                  </p>
                </div>
              </div>
            </div>
          </div>
          <StickyNav>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#overview' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-overview' className='sticky-nav__link'>
                    Überblick
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-features' className='sticky-nav__link'>
                    Funktionen
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-pricing' className='sticky-nav__link'>
                    Preis
                  </a>
                </li>
              </ul>
              <Link to='contact_sales' query={{ s: 'pro' }}
              id='track-sticky-nav-contact-sales'
              className={
                'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
              }>
                <Message pointer='cta.pro' />
              </Link>
              <a href='https://developer.gocardless.com/pro/' id='track-sticky-nav-docs'
              className='u-pull-end u-margin-Txxs u-margin-Rm'>
                API Dokumentation
              </a>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-3of4 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Willkommen zu GoCardless Pro
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    GoCardless Pro wurde speziell für große Unternehmen entwickelt, und kombiniert die
                    Einfachheit unseres Produktes mit voller Kontrolle über Zahlungen und Kundenerlebnis.
                    Es lässt Sie Zahlungen sowohl in Deutschland als auch in Europa annehmen, alles mittels einer einfachen Integration.
                  </p>
                </div>
                <div className='grid u-margin-Tl u-padding-Tm'>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Nahtlos und unsichtbar
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      GoCardless Pro stellt Ihren Namen in den Vordergrund.
                      Sie haben volle Kontrolle über Zahlungsseiten und Email-Benachrichtungen an Ihre Kunden.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Eine einfache, moderne API
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Die komplette Dokumentation zu GoCardless Pro ist kostenlos in
                      unseren <a href='https://developer.gocardless.com/pro' id='track-overview-docs'>API docs</a> verfügbar.
                      Wir haben hart daran gearbeitet, die Integration für Sie so einfach wie möglich zu gestalten.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Funktioniert überall
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Wir machen es unglaublich einfach auf der Basis von GoCardless Pro zu entwickeln,
                      sodass Sie die nächste Generation Ihrer Webseite oder App kreieren können.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <SecurityIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Unumstößliche Sicherheit
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Wir haben alles für Sicherheit gegeben.
                      Wir speichern alle Bankverbindungen mittels RSA Verschlüsselung und kommunizieren ausschließlich über sichere Kanäle.
                    </p>
                  </div>
                </div>
                <p className='u-color-p u-margin-Txxl u-padding-Tm'>
                  Sie möchten die API und unser Online Dashboard
                  ausprobieren? <a href='https://manage-sandbox.gocardless.com/registrations/create'>
                  Erstellen Sie hier einen gratis Testaccount.
                  </a>
                </p>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Txl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                    Sie sind in guter Gesellschaft
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Jeden Tag vertrauen zahlreiche der größten und respektiertesten Unternehmen der Welt GoCardless mit ihren Zahlungen.
                  </p>
                </div>
                <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                  <img src='/images/logos/pro-logos@2x.png' />
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div id='optimizely-pro-video' className='u-hidden'>
              <div className='u-text-center u-padding-Vxxl'>
                <div className='site-container u-padding-Vxl'>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Schauen Sie sich eine kurze Einführung zu GoCardless Pro an
                  </h2>
                  <iframe src='https://player.vimeo.com/video/116341918'
                  className='u-text-center videos-container__iframe u-margin-Vl'>
                  </iframe>
                </div>
              </div>
              <hr className='u-margin-An' />
            </div>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of2 u-center'>
                  <i className='europe-icon u-margin-Bs' />
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Sie möchten Zahlungen innerhalb Europas empfangen?
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-s u-color-p u-margin-Ts'>
                      GoCardless Pro ist der einzige Service, der es Ihnen ermöglicht Lastschrift
                      Zahlungen in Deutschland und innerhalb der Eurozone mit nur einer einzigen Integration zu empfangen.
                      Mit unserer API können Sie Zahlungen von über 500 Millionen Menschen in 22 europäischen Ländern annehmen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of3 u-center'>
                  <figure className='svg-icon u-center'>
                    <PhoneIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <PhoneIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Tm'>
                    <Message pointer='phone_local' />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-s u-color-p u-margin-Ts'>
                      Sprechen Sie mit einem unserer Zahlungsexperten, um herauszufinden, wie GoCardless Ihnen helfen kann.
                    </p>
                  </div>
                  <Link to='contact_sales' query={{ s: 'pro' }} id='track-cta-contact-sales'
                  className='btn btn--hollow u-margin-Tm'>
                    <Message pointer='cta.pro' />
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-xl u-text-light u-margin-Bs'>
                    Ihr Dashboard
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Managen Sie Ihre Zahlungen und Kunden einfach online
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                      <a href='#customer-info' id='track-dashboard-customer'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                       Kunden
                      </a>
                    ), (
                      <a href='#payment-history' id='track-dashboard-payment'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Zahlungen
                      </a>
                    ), (
                      <a href='#filtering' id='track-dashboard-admin'
                      className='tab-link u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Filter
                      </a>
                    ),]}>
                    <div>
                      <img src='/images/pro/customer.jpg'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payment.jpg'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payments-list.jpg'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='pricing'>
            <div className='u-text-center u-padding-Vxxl'>
              <div className='site-container u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-light u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' /> pro Zahlung
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Vxs'>
                    Wettbewerbsfähige Preise für Unternehmen aller Größen.<br />
                  </p>
                  <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                    Mehr über unsere Preise
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-size-1of2 u-center u-padding-Vxl'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
                  Kontaktieren Sie uns für ein kostenloses Angebot
                </h2>
                <Link to='contact_sales' query={{ s: 'pro' }}
                id='track-cta-contact-sales' className='btn u-margin-Rm'>
                  <Message pointer='cta.pro' />
                </Link>
                <a href='https://manage-sandbox.gocardless.com/registrations/create'
                id='track-cta-try-pro-dash' className='btn btn--hollow'>Testen Sie Pro gratis</a>
                <hr className='u-margin-Vxxl' />
                <p className='u-color-p'>
                  <strong>Sie möchten mit jemandem sprechen?</strong><br />
                  Rufen Sie unsere Experten an unter <Message pointer='phone_local' />.<br />
                  Wir sind zwischen 10.00 und 19.00 Uhr für Sie da, Montag bis Freitag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
