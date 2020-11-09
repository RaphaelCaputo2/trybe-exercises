import React, { Component } from 'react';


class VideoGame extends Component {
  render() {
    const  { title, developer, sales } = this.props
    return (<ul><li>Nome do Game - {title}<br></br> Desenvolvedora - {developer}<br></br> Unidades Vendidas - {sales}</li></ul>)

  }
}

export default VideoGame;