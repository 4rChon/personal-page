import React, { Component, PropTypes } from 'react';

import layoutStyles from '../../views/layout/styles.scss';
import styles from './styles.scss';

export default class HeaderElement extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  };

  render() {
    return (
      <h1 className={`media-heading ${layoutStyles.serif} ${styles.header__media_heading}`}>
        {this.props.title}<br />
        <small>
          {this.props.description}
        </small>
      </h1>
    );
  }
}
