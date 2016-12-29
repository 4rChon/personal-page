import React, { Component, PropTypes } from 'react';
import MediaLink from '../MediaLink';

import layoutStyles from '../../../layout/styles.scss';

export default class MediaSet extends Component {
  static propTypes = {
    mediaLinkSet: PropTypes.arrayOf(React.PropTypes.object),
    title: PropTypes.string,
  };

  _renderMediaLinks = (item, i = 0) => {
    return (
      <MediaLink
        key={i}
        link={item.link}
        title={item.title}
        description={item.description}
        imgPath={item.imgPath}
      />
    );
  }

  render() {
    const { title, mediaLinkSet } = this.props;

    return (
      <div className="col-md-4">
        <div className="row">
          <h2 className={`col-sm-10 ${layoutStyles.serif}`}>{title}</h2>
        </div>
        <div className="row">
          {mediaLinkSet.map(this._renderMediaLinks)}
        </div>
      </div>
    );
  }
}
