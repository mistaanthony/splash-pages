import React from 'react';
import Link from '../link/link';
import Href from '../href/href';
import Message from '../message/message';
import Translation from '../translation/translation';
import LinkExists from '../link-exists/link-exists';
import Logo from '../../icons/logo/logo';
import Popover from '../popover/popover';
import classNames from 'classnames';

class Header extends React.Component {
  displayName = 'Header'

  static defaultProps = {
    isInverted: true,
  };

  static propTypes = {
    isInverted: React.PropTypes.bool,
  };

  render() {
    const isInverted = this.props.isInverted;
    const linkClass = classNames('u-padding-Vl u-block', {
      'u-link-invert': isInverted,
      'u-link-default': !isInverted,
    });

    const products = (
      <ul className='u-text-xxs u-padding-Vxs'>
        <LinkExists to='features' tagName='li'>
          <Link to='features' id='track-nav-features' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='features.nav_title' /></span>
            <p className='u-color-p'><Message pointer='features.explainer' /></p>
          </Link>
          <hr className='u-margin-Vxs' />
        </LinkExists>
        <LinkExists to='pro' tagName='li'>
          <Link to='pro' id='track-nav-pro' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='pro.nav_title' /></span>
            <p className='u-color-p'><Message pointer='pro.explainer' /></p>
          </Link>
        </LinkExists>
        <LinkExists to='partners' tagName='li'>
          <hr className='u-margin-Vxs' />
          <Link to='partners' id='track-nav-partners' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='partners.nav_title' /></span>
            <p className='u-color-p'><Message pointer='partners.explainer' /></p>
          </Link>
        </LinkExists>
      </ul>
    );

    return (
      <div className={classNames({'site-header-wrapper': isInverted})}>
        <div className='site-header u-relative u-cf'>
          <div className='u-pull-start'>
            <Link to='home' id='track-nav-home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className={classNames('site-logo__image', {
                'u-fill-invert': isInverted,
                'u-fill-primary': !isInverted,
              })} />
            </Link>
          </div>
          <div className='u-pull-end align-btn-small'>
            <nav className='nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
              <div className='nav__item u-relative'>
                <Popover className='popover--large' toggle={
                   (<a href='#' id='track-nav-products' className={linkClass}>
                      <div className={classNames('nav__item-link popover-link', {
                        'popover-link--invert': isInverted,
                      })}>
                        <Message pointer='header.our_products' />
                      </div>
                    </a>)
                 }>
                   {products}
                 </Popover>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='pricing'>
                  <Link to='pricing' id='track-nav-pricing' className={linkClass}>
                    <div className='nav__item-link'>
                      <Message pointer='pricing.nav_title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='stories'>
                  <Link to='stories' id='track-nav-stories' className={linkClass}>
                    <div className='nav__item-link'>
                      <Message pointer='stories.nav_title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
              <div className='nav__item u-relative'>
                <Popover toggle={
                  (<a href='#' id='track-nav-more' className={linkClass}>
                    <div className={classNames('nav__item-link popover-link', {
                      'popover-link--invert': isInverted,
                    })}>
                      <Message pointer='header.more' />
                    </div>
                  </a>)
                }>
                  <ul className='u-text-xxs u-padding-Vxs'>
                    <li className='u-text-semi'>
                     <LinkExists to='security'>
                       <Link to='security' id='track-nav-security' className='u-padding-Vxs u-padding-Hm u-block'
                         pointer='security.nav_title' />
                     </LinkExists>
                    </li>
                    <li className='u-text-semi'>
                      <Href to='guides.path' id='track-nav-guides' className='u-padding-Vxs u-padding-Hm u-block'
                        pointer='guides.nav_title' />
                    </li>
                    <Translation locales='en-GB'>
                      <li className='u-text-semi'>
                        <a href='http://help.gocardless.com' id='track-nav-help' className='u-padding-Vxs u-padding-Hm u-block'>
                          <Message pointer='help.nav_title' />
                        </a>
                      </li>
                    </Translation>
                    <li className='u-text-semi'>
                     <LinkExists to='faq_merchants'>
                       <Link to='faq_merchants' pointer='faq_merchants.link_title'
                         id='track-nav-faq' className='u-padding-Vxs u-padding-Hm u-block' />
                     </LinkExists>
                    </li>
                    <hr className='u-margin-Vs' />
                    <li>
                      <LinkExists to='about'>
                        <Link to='about' pointer='about.nav_title'
                          id='track-nav-about' className='u-padding-Vxs u-padding-Hm u-block' />
                      </LinkExists>
                    </li>
                    <li>
                      <LinkExists to='jobs'>
                        <Link to='jobs' pointer='jobs.nav_title'
                          id='track-nav-jobs' className='u-padding-Vxs u-padding-Hm u-block' />
                      </LinkExists>
                    </li>
                  </ul>
                </Popover>
              </div>
            </nav>
            <ul className='u-cf u-pull-start'>
              <Translation locales='en-GB'>
                <li className='u-pull-start'>
                  <a href='/users/sign_in' id='track-nav-sign-in'
                  className={classNames('nav-btn btn btn--small u-text-light u-text-xxs u-relative',
                    'u-text-transform-none u-text-no-smoothing', {
                    'btn--invert-hollow': isInverted,
                    'btn--hollow': !isInverted,
                  })}>
                    <Message pointer='header.login_btn' />
                  </a>
                </li>
              </Translation>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
