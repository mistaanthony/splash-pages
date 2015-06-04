import React from 'react';

import browseHappy from '../layout-static/browse-happy';
import createHTML5Tags from '../layout-static/create-html5-tags';
import GTM from '../layout-static/google-tag-manager';
import websiteSchema from '../layout-static/website-schema';

import getSiteTitle from '../get-site-title/get-site-title';
import { getMessage } from '../intl/intl';
import localeMessages from '../../../config/messages';
import { defaultLocale, localeToLanguage } from '../../helpers/locale-helper/locale-helper';
import { homeRoute } from '../../router/routes';
import { getLocalesForRouteName } from '../../router/route-helpers';
import { buildSchemaDotOrgForOrganization } from '../../helpers/schema-dot-org/schema-dot-org';
import { PropTypes } from '../../helpers/prop-types/prop-types';

function relAlternateLinks(root, locales) {
  var defaultPath = locales[defaultLocale].path;

  var alternates = Object.keys(locales).map(function(locale) {
    var localePath = locales[locale].path;
    return <link rel='alternate' hrefLang={locale} href={ root + localePath } key={locale} />;
  });

  if (defaultPath) {
    alternates.unshift(
      <link rel='alternate' href={root + defaultPath} hrefLang='x-default' key='x-default' />
    );
  }

  return alternates;
}

class HtmlDocument extends React.Component {
  displayName = 'HtmlDocument'

  static propTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    formats: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    availableLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
    countryProperties: PropTypes.object.isRequired,
    routeLocales: PropTypes.array.isRequired,
    router: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    dataRender: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    markup: PropTypes.string.isRequired,
    script: PropTypes.arrayOf(PropTypes.string),
    css: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    script: [],
    css: [],
  }

  static childContextTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    formats: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    availableLocales: PropTypes.array.isRequired,
    routeLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
    countryProperties: PropTypes.object.isRequired,
    router: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { currentLocale, messages, formats, routeName, availableLocales,
            availableCountryNames, countryProperties, routeLocales, router, pathname, config } = this.props;

    return {
      currentLocale: currentLocale,
      messages: messages,
      formats: formats,
      routeName: routeName,
      availableLocales: availableLocales,
      availableCountryNames: availableCountryNames,
      countryProperties: countryProperties,
      routeLocales: routeLocales,
      router: router,
      pathname: pathname,
      config: config,
    };
  }

  render() {
    const { messages, routeName, currentLocale, config, pathname, availableLocales, markup, script, css } = this.props;
    const isHome = routeName === homeRoute;
    const schemaDotOrgOrganisation = buildSchemaDotOrgForOrganization(localeMessages, availableLocales, config);
    const routeLocales = getLocalesForRouteName(routeName, availableLocales);
    const pageHref = config.siteRoot + pathname;
    const title = getSiteTitle({ messages, routeName, config });
    const language = localeToLanguage(currentLocale);
    const description = getMessage(messages, `${routeName}.description`);

    return (
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width' />

          <title>{ title }</title>
          { description && <meta name='description' content={ description } />}
          <link href={ config.socialLinks.google } rel='publisher' />
          <meta name='og:image' content={ config.logoUrlSquare } />
          <meta name='og:image:secure_url' content={ config.logoUrlSquare } />
          <meta name='google-site-verification' content={ config.googleSiteVerification } />
          <link rel='canonical' href={ pageHref } />

          { routeLocales &&
              relAlternateLinks(config.siteRoot, routeLocales) }

          { css.map((href, k) => <link key={k} rel='stylesheet' href={href} />) }

          <script dangerouslySetInnerHTML={{ __html: createHTML5Tags }} />
        </head>

        <body>
          { config.optimizelyId &&
            <script src={`//cdn.optimizely.com/js/${config.optimizelyId}.js`}></script>
          }

          <div dangerouslySetInnerHTML={{ __html: browseHappy }} />

          <div id='root' dangerouslySetInnerHTML={{ __html: markup }} />

          <script dangerouslySetInnerHTML={{ __html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

          { script.map((src, k) => <script key={k} src={src} />) }

          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: websiteSchema.replace('{PAGE}', pathname) }} />
          }

          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDotOrgOrganisation) }} />
          }

          { config.googleTagManagerId &&
              <div dangerouslySetInnerHTML={{__html: GTM.replace('{TAG_ID}', config.googleTagManagerId) }} />
          }

        </body>
      </html>
    );
  }
}

export default HtmlDocument;
