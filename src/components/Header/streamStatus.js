import React, { Component, PropTypes } from 'react';

import HeaderElement from './headerElement';

export default class StreamStatus extends Component {
  static propTypes = {
    online: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className="pull-right">
        {
          this.props.isLoading
            ? <HeaderElement title="Checking Stream Status" />
            : this.props.online
            ? <HeaderElement title="Stream Online" />
            : <HeaderElement title="Stream Offline" />
        }
      </div>
    );
  }
}
