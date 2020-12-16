import React from 'react';
import { Provider } from 'react-redux';
import Siderbar from './components/Sidebar';
import Player from './components/Player';
import categories from './data'
import store from './store';

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
      <Provider store={ store }>
      <Siderbar categories={ myCategories }/>
      <Player />
      </Provider>
      </>
    )
  }
}

export default App;