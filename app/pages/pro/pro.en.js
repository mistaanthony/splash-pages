import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import ProductComparison from '../../components/product-comparison/product-comparison';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Tabs from '../../components/tabs/tabs';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import WhiteLabelIcon from '../../icons/svg/white-label';
import MobileIcon from '../../icons/svg/mobile';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';

export default class ProEn extends React.Component {
  displayName = 'ProEn'

  render() {
    return (
      <Translation locales='en'>
        <div>
          <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>Totally control Direct Debit</h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    A cutting edge platform for building your<br />recurring payments ecosystem
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
                    Overview
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-features' className='sticky-nav__link'>
                    Features
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-pricing' className='sticky-nav__link'>
                    Pricing
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
                API Documentation
              </a>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-3of4 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Welcome to GoCardless Pro
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Designed specifically for larger enterprises,
                    GoCardless Pro combines the simplicity of our original
                    GoCardless product with complete control over payments and customer experience.
                    It also allows you to collect UK and SEPA Direct Debit via one simple integration.
                  </p>
                </div>
                <div className='grid u-margin-Tl u-padding-Tm'>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Completely white-labelled
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      GoCardless Pro puts your brand at the forefront.
                      Enjoy complete control over payment pages and email notifications to your customers.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      A simple, modern API
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      All documentation for our Pro product is freely available in
                      our <a href='https://developer.gocardless.com/pro' id='track-overview-docs'>API docs</a>.
                      We’ve worked hard to make integrating your systems as painless as possible.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Works everywhere
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      We’ve made it incredibly simple to develop on top of GoCardless Pro
                      and create the next generation of your website or mobile apps.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <SecurityIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Military grade security
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      We’ve sweated over security so you don’t have to.
                      We store all bank details with RSA encryption and communicate only over secure channels.
                    </p>
                  </div>
                </div>
                <p className='u-color-p u-margin-Txxl u-padding-Tm'>
                  Want to easily try our API and
                  dashboard? <a href='https://manage-sandbox.gocardless.com/registrations/create'>
                    Sign up for a free sandbox account
                  </a>
                </p>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Txl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                    You’re in good company
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Every day, some of the biggest and most respected businesses
                    trust GoCardless to power their payments
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
                    Watch a short overview of GoCardless Pro
                  </h2>
                  <iframe src='https://player.vimeo.com/video/116341918'
                  className='u-text-center videos-container__iframe u-margin-Vl'>
                  </iframe>
                </div>
              </div>
              <hr className='u-margin-An' />
            </div>
            <Translation locales={['en-GB', 'en-IE']}>
              <div className='site-container u-text-center u-padding-Vxxl'>
                <div className='u-padding-Vxl'>
                  <div className='u-size-1of2 u-center'>
                    <i className='europe-icon u-margin-Bs' />
                    <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                      Want to take payments in Europe?
                    </h2>
                    <div className='u-center'>
                      <p className='u-text-s u-color-p u-margin-Ts'>
                        GoCardless Pro is the only product that enables you to collect
                        Direct Debit payments from the UK and SEPA via one integration.
                        With our API, your business can take payments from over 500 million people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Translation>
            <Translation locales='en-EU'>
              <div className='site-container u-text-center u-padding-Vxxl'>
                <div className='u-padding-Vxl'>
                  <div className='u-size-1of2 u-center'>
                    <i className='europe-icon u-margin-Bs' />
                    <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                      Want to take payments in Europe?
                    </h2>
                    <div className='u-center'>
                      <p className='u-text-s u-color-p u-margin-Ts'>
                        GoCardless Pro is the only product that enables you to collect
                        Direct Debit payments from the UK and Eurozone via one integration.
                        With our API, your business can take payments from over 500 million people
                        in 22 European countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Translation>
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
                      Speak with one of our payments experts to learn how GoCardless can help your business.
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
                    Your dashboard
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    A simple way to manage your payments and customers
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                      <a href='#customer-info' id='track-dashboard-customer'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Customer info
                      </a>
                    ), (
                      <a href='#payment-history' id='track-dashboard-payment'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Payment history
                      </a>
                    ), (
                      <a href='#filtering' id='track-dashboard-admin'
                      className='tab-link u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Filtering
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
            <Translation locales={['en-GB','en-IE']}>
              <div id='forOptimizely-Table'>
                <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
                  <div className='site-container u-padding-Vxl'>
                    <ProductComparison />
                    <table className='u-size-full'>
                      <tfoot>
                        <tr className='comparison-table__row'>
                          <td />
                          <td className='u-size-1of3 u-padding-As'>
                            <Link to='features' id='track-comparison-table-features'
                            className='u-color-primary'>
                              Learn more about GoCardless
                            </Link>
                          </td>
                          <td />
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <hr className='u-margin-An' />
              </div>
            </Translation>
          </div>
          <div className='section-scroll-target' id='pricing'>
            <div className='u-text-center u-padding-Vxxl'>
              <div className='site-container u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-light u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' /> per transaction
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Vxs'>
                    Competitive rates for businesses of any size.<br />
                  </p>
                  <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                    Learn about our pricing
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-size-1of2 u-center u-padding-Vxl'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
                  Get in touch for a free quote
                </h2>
                <Link to='contact_sales' query={{ s: 'pro' }}
                id='track-cta-contact-sales' className='btn u-margin-Rm'>
                  <Message pointer='cta.pro' />
                </Link>
                <a href='https://manage-sandbox.gocardless.com/registrations/create'
                id='track-cta-try-pro-dash' className='btn btn--hollow'>Try Pro for free</a>
                <hr className='u-margin-Vxxl' />
                <p className='u-color-p'>
                  <strong>Want to talk to someone first?</strong><br />
                  Call our payments experts on <Message pointer='phone_local' /><br />
                  We're available 9am - 6pm Monday to Friday
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
