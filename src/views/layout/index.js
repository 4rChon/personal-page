import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import MediaSet from '../../components/MediaSet';
import ScrollDown from '../../components/ScrollDown';
import Twitch from '../../components/Twitch';

import { fetchStatus } from '../../redux/actions/streamActions';

@connect(
  reduxState => ({
    stream: reduxState.get('stream'),
  }),
  {
    fetchStatus,
  },
)

export default class Layout extends Component {
  static propTypes = {
    channel: PropTypes.string,
    mediaSets: PropTypes.arrayOf(PropTypes.object),
    fetchStatus: PropTypes.func,
    stream: PropTypes.object,
  };

  static defaultProps = {
    channel: 'ByunPrime',
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
    this.props.fetchStatus(this.props.channel);
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
    const isLoading = this.props.stream.get('isFetching');
    const isOnline = this.props.stream.get('online');

    return (
      <div className="container-fluid">
        <Header online={isOnline} />
        <div className="row">
          {this.props.mediaSets.map(this._renderMediaSets)}
        </div>
        <ScrollDown />
        {
          isLoading
          ? <div>Checking Stream Status...</div>
          : <Twitch online={isOnline} channel={this.props.channel} />
        }
      </div>
    );
  }
}
