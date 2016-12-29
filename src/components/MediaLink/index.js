import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

export default class MediaLink extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={'col-sm-10'}>
        <div className={`media ${styles.medialink}`}>
          <a className={styles.medialink__link} href={this.props.link}>
            <div className={`media-left ${styles.medialink__left}`}>
              <img src={this.props.imgPath} alt="missing-img" className={`img-responsive img-rounded media-object ${styles.medialink__object}`} />
            </div>
            <div className={'media-body'}>
              <h4 className={`media-heading ${styles.medialink__heading}`}>{this.props.title}<br />
                <small>{this.props.description}</small>
              </h4>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
