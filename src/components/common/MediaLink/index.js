import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

export default class MediaLink extends Component {
  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imgPath: PropTypes.string,
  };

  static defaultProps = {
    link: '#',
    title: 'Link Title',
    description: 'Link Description',
    imgPath: '#',
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { link, title, description, imgPath } = this.props;

    return (
      <div className={'col-sm-10'}>
        <div className={`media ${styles.medialink}`}>
          <a className={styles.medialink__link} href={link}>
            <div className={`media-left ${styles.medialink__left}`}>
              <img src={imgPath} alt="missing-img" className={`img-responsive img-rounded media-object ${styles.medialink__object}`} />
            </div>
            <div className={'media-body'}>
              <h4 className={`media-heading ${styles.medialink__heading}`}>{title}<br />
                <small>{description}</small>
              </h4>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
