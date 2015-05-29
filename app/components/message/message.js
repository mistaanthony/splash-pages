import React from 'react';
import { getMessage } from '../intl/intl';

export default class Message extends React.Component {
  displayName = 'Message'

  static propTypes = {
    pointer: React.PropTypes.string.isRequired,
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const child = getMessage(this.context.messages, this.props.pointer);
    return (<span {...this.props}>{child}</span>);
  }
}
