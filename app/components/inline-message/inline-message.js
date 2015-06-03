import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import isPlainObject from 'lodash/lang/isPlainObject';

function getMessageFromTranslations(pointer, messages) {
  return pointer.split('.').reduce(function(obj, pathPart) {
    return isPlainObject(obj) && obj[pathPart];
  }, messages);
}

function isSubsetOfLocale(string, locale) {
  return locale.indexOf(string) === 0;
}

function checkForDuplicateMessage(localeA, localeB, pointer, messages) {
  if (localeA !== localeB) { return; }

  const messageExists = !!getMessageFromTranslations(pointer, messages);

  if (messageExists) {
    throw new Error(`Duplicate translation found for ${pointer}`);
  }
}

function getMessage({ currentLocale, locale, givenContent, pointer, messages }) {
  checkForDuplicateMessage(currentLocale, locale, pointer, messages);

  const foundMessage = getMessageFromTranslations(pointer, messages);

  if (foundMessage) {
    return foundMessage;
  }

  if (isSubsetOfLocale(locale, currentLocale)) {
    return givenContent;
  }

  throw new ReferenceError(`Could not find Intl pointer: ${pointer}`);
}

export default class InlineMessage extends React.Component {
  displayName = 'InlineMessage'

  static propTypes = {
    children: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    pointer: PropTypes.string.isRequired,
    tagName: React.PropTypes.string,
  }

  static defaultProps = {
    tagName: 'span',
  }

  static contextTypes = {
    messages: PropTypes.object.isRequired,
    currentLocale: PropTypes.locale,
  }

  render() {
    const { currentLocale, messages } = this.context;
    const { locale, children, pointer } = this.props;
    const message = getMessage({ currentLocale, locale, givenContent: children, pointer, messages });

    return React.createElement(this.props.tagName, this.props, message);
  }
}
