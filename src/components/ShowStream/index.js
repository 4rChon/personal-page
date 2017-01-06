import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';

import { showStream, hideStream } from '../../redux/actions/streamActions';

@connect(
  reduxState => ({
    stream: reduxState.get('stream'),
  }),
  {
    showStream,
    hideStream,
  },
)

export default class ShowStream extends Component {

  static propTypes = {
    showStream: PropTypes.func,
    hideStream: PropTypes.func,
    stream: PropTypes.object,
  }

  _handleShowStream = () => {
    return (
      this.props.stream.get('show')
      ? this.props.hideStream()
      : this.props.showStream()
    );
  }

  _showStreamButton = () => {
    return (
      this.props.stream.get('show')
      ? 'Hide Stream'
      : 'Show Stream'
    );
  }

  render() {
    return (
      <button className={styles.stream__show} onClick={this._handleShowStream}>{this._showStreamButton()}</button>
    );
  }

}
