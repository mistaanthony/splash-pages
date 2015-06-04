import React from 'react';
import { homeRoute } from '../../router/routes';
import { getLocalesForRouteName } from '../../router/route-helpers';
import Translation from '../translation/translation'

function getLocalesWithLocalScheme(selectedScheme, availableLocales, countryProperties) {
  const siteLocales = getLocalesForRouteName(homeRoute, availableLocales);
  var localesWithScheme = [];

  for (var locale in countryProperties) {
    if(countryProperties[locale].local_scheme == selectedScheme) {
      localesWithScheme.push(locale);
    }
  }

  return localesWithScheme;
}

export default class IfLocalScheme extends React.Component {
  displayName = 'IfLocalScheme'

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  static contextTypes = {
    config: React.PropTypes.object.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    countryProperties: React.PropTypes.object.isRequired,
  }

  render() {
    const { config, availableLocales, countryProperties } = this.context;
    const localesWithScheme = getLocalesWithLocalScheme(this.props.name, availableLocales, countryProperties);

    return (
      <Translation locales={localesWithScheme} {...this.props}>
        {this.props.children}
      </Translation>
    );
  }
}