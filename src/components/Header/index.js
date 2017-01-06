import React, { Component, PropTypes } from 'react';

import StreamStatus from './streamStatus';
import HeaderElement from './headerElement';

import styles from './styles.scss';

export default class Header extends Component {
  static propTypes = {
    online: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: 'Ben\'s Bivouac',
    description: 'StarCraft, Dark Souls, and Code',
  }

  render() {
    return (
      <div className={`page-header ${styles.header}`}>
        <div className={`media ${styles.header__media}`}>
          <div className={'media-body'}>
            <HeaderElement title={this.props.title} description={this.props.description} />
            <StreamStatus online={this.props.online} isLoading={this.props.isLoading} />
          </div>
        </div>
      </div>
    );
  }
}
