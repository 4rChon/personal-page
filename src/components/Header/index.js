import React, { Component, PropTypes } from 'react';

import layoutStyles from '../../views/layout/styles.scss';
import styles from './styles.scss';

export default class Header extends Component {
  static propTypes = {
    online: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className={`page-header ${styles.header}`}>
        <div className={`media ${styles.header__media}`}>
          <div className={'media-body'}>
            <h1 className={`media-heading ${layoutStyles.serif} ${styles.header__media_heading}`}>
              Ben`s Bivouac<br />
              <small>
                StarCraft, Dark Souls, and Code
              </small>
            </h1>
            <h1 className={`media-heading pull-right ${layoutStyles.serif} ${styles.header__media_heading}`}>
              {
                this.props.online
                ? <div className={`styles.header__stream_online`}>Stream Online</div>
                : <div>Stream Offline</div>
              }
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
