import React from 'react';
import { Route } from 'react-router';

class LinkExists extends React.Component {
  displayName = 'LinkExists'

  static contextTypes = {
    router: React.PropTypes.func.isRequired,
  };

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    to: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.instanceOf(Route)]).isRequired,
    params: React.PropTypes.object,
    query: React.PropTypes.object,
    tagName: React.PropTypes.string,
  }

  static defaultProps = {
    tagName: 'span',
  }

  render() {
    var hasLink;
    // If an exception is thrown, assume the link isn't found.
    try {
      hasLink = !!(this.context.router.makePath(this.props.to, this.props.params, this.props.query));
    } catch (e) {
      hasLink = false;
    }

    if (!hasLink) { return null; }
    return React.createElement(this.props.tagName, this.props, this.props.children);
  }
}

export default LinkExists;
