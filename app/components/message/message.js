import React from 'react';
import { getMessage } from '../intl/intl';

export default class Message extends React.Component {
  displayName = 'Message'

  static propTypes = {
    pointer: React.PropTypes.string.isRequired,
    tagName: React.PropTypes.string,
  }

  static defaultProps = {
    tagName: 'span',
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const child = getMessage(this.context.messages, this.props.pointer);
    return React.createElement(this.props.tagName, this.props, child);
  }
}
