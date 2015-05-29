import React from 'react';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Link from '../../components/link/link';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class AboutHeader extends React.Component {
  displayName = 'AboutHeader'

  render() {
    return (
      <div>
        <div className='page-hero page-hero--about page-hero--medium u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  <Message pointer='about.header1' />
                  <br />
                  <Message pointer='about.header2' />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <StickyNav>
          <div className='site-container u-padding-Vm'>
            <ul className='u-pull-start u-margin-Txxs'>
              <li className='sticky-nav__item'>
                <Link to='about' className='sticky-nav__link'>
                  <Message pointer='about.nav_title' />
                </Link>
              </li>
              <li className='sticky-nav__item'>
                <Link to='team' className='sticky-nav__link'>
                  <Message pointer='team.nav_title' />
                </Link>
              </li>
              <IfLinkExists to='jobs' tagName='li' className='sticky-nav__item'>
                <Link to='jobs' className='sticky-nav__link'>
                  <Message pointer='jobs.nav_title' />
                </Link>
              </IfLinkExists>
            </ul>
            <a href='https://gocardless.com/blog'
              className={
                'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
              }>
              <Message pointer='blog.cta' />
            </a>
          </div>
        </StickyNav>
      </div>
    );
  }
}
