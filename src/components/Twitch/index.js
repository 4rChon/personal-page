import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

export default class Twitch extends Component {
  static propTypes = {
    channel: PropTypes.string.isRequired,
  }

  render() {
    const { channel } = this.props;

    return (
      <div className={`col-sm-10 ${styles.twitch}`}>
        <div className={styles.twitch__stream}>
          <iframe src={`http://player.twitch.tv/?channel=${channel}`} frameBorder="0" scrolling="no" allowFullScreen />
        </div>
        <div className={styles.twitch__chat}>
          <iframe src={`http://www.twitch.tv/${channel}/chat`} frameBorder="0" allowFullScreen />
        </div>
      </div>
    );
  }

}
