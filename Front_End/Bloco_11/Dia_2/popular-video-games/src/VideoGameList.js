import React, { Component } from 'react';
import bestSellingVideoGames from './data'
import VideoGame from './VideoGame'




class VideoGameList extends Component {
  render () {
return (
  <div>
    
    {bestSellingVideoGames.map((videoGame, index) => {
      return <VideoGame
      key={index}
      title={videoGame.title}
      developer={videoGame.developer}
      sales={videoGame.sales}
      />
    })}
  </div>
)
  }
}

export default VideoGameList;