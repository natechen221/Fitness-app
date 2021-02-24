import React from 'react';
import YouTube from 'react-youtube';
 
class Video extends React.Component {
  render() {
      console.log(this.props.link)
    const opts = {
      height: '400',
      width: '650',
      playerVars: {
        autoplay: 0,
      },
    };
 
    return <YouTube videoId={this.props.link}opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Video;