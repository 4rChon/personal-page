import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

export default class Twitch extends Component {
  static propTypes = {
    channel: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className={`col-sm-10 ${styles.twitch}`}>
        {
          this.props.online
          && <div>
            <div className={styles.twitch__stream}>
              <iframe src={`http://player.twitch.tv/?channel=${this.props.channel}`} frameBorder="0" scrolling="no" allowFullScreen />
            </div>
            <div className={styles.twitch__chat}>
              <iframe src={`http://www.twitch.tv/${this.props.channel}/chat`} frameBorder="0" allowFullScreen />
            </div>
          </div>
        }
      </div>
    );
  }

}
