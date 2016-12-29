import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import MediaSet from '../../components/MediaSet';
import Twitch from '../../components/Twitch';

import { fetchStatus } from '../../redux/actions/streamActions';

@connect(
  reduxState => ({
    status: reduxState.get('channel'),
  }),
  {
    fetchStatus,
  },
)
export default class Layout extends Component {
  static propTypes = {
    mediaSets: PropTypes.arrayOf(PropTypes.object),
    fetchStatus: PropTypes.func,
    status: PropTypes.object,
  };

  static defaultProps = {
    mediaSets: [
      {
        title: 'Code',
        mediaLinkSet: [
          { link: 'https://github.com/4rChon/ACT-AI', title: 'ACT-AI', description: 'University FYP - A task driven AI for StarCraft: Brood War', imgPath: 'img/code.png' },
          { link: 'https://github.com/4rChon/BackFire', title: 'BackFire', description: 'An arcade-y time-waster to learn TypeScript', imgPath: 'img/code.png' },
          { link: 'https://github.com/4rChon/webrtc-p2p-chat', title: 'WebRTC P2P Chat', description: 'Messing around with WebRTC', imgPath: 'img/code.png' },
        ],
      },
      {
        title: 'Social',
        mediaLinkSet: [
          { link: 'https://www.twitch.tv/4rchon', title: 'Twitch', description: 'Mostly StarCraft II 1v1 Masters Ladder, but sometimes I play other games', imgPath: 'img/twitch.png' },
          { link: 'https://twitter.com/b_bugeja', title: 'Twitter', description: 'I don\'t tweet a lot, but I like watching numbers grow', imgPath: 'img/twitter.png' },
          { link: 'https://www.pinterest.com/bendbug/dark-souls', title: 'Pinterest', description: 'Mostly Dark Souls pins and art inspiration', imgPath: 'img/pinterest.png' },
          { link: '#', title: 'Discord', description: 'ArChon#0000 (TODO)', imgPath: 'img/discord.png' },
          { link: '#', title: 'BattleTag', description: 'ArChon#0000 (TODO)', imgPath: 'img/battlenet.png' },
        ],
      },
      {
        title: 'Music',
        mediaLinkSet: [
          { link: 'https://play.spotify.com/user/1299321868/playlist/4UvNarrNYawsxXp89OUXRy', title: 'Mind Mending Melodies', description: 'A collection of favourites', imgPath: 'img/spotify.png' },
          { link: 'https://play.spotify.com/user/1299321868/playlist/3Ap7Ysi5UMHCCqdRqvbxdl', title: '<120 Minutes', description: 'An ever changing playlist never exceeding 120 minutes of bliss', imgPath: 'img/spotify.png' },
        ],
      },
      {
        title: 'Other',
        mediaLinkSet: [
          { link: 'https://www.redbubble.com/people/kimtaekyong', title: 'Redbubble', description: 'Sometimes I draw stuff and sell it', imgPath: 'img/redbubble.png' },
        ],
      },
    ],
  }

  componentDidMount() {
    this.props.fetchStatus('4rChon');
    console.log(this.props);
  }

  _renderMediaSets = (item, i = 0) => {
    return (
      <MediaSet
        key={i}
        title={item.title}
        mediaLinkSet={item.mediaLinkSet}
      />
    );
  }

  render() {
    //const data = status.get('data');
    const isFetching = true; //status.get('isFetching');
    //console.log(data);
    //console.log(status);

    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          {this.props.mediaSets.map(this._renderMediaSets)}
        </div>
        {
          !isFetching && <Twitch channel="4rChon" />
        }
      </div>
    );
  }
}
