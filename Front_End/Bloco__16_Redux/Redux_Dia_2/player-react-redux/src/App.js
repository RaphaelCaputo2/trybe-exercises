import React from 'react';
import Siderbar from './components/Sidebar';
import Player from './components/Player';
import categories from './data'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      myCategories: [...categories],
    }
  }
  render() {
    const { myCategories } = this.state
    return (
      <>
      <Siderbar categories={ myCategories }/>
      <Player />
      </>
    )
  }
}

export default App;