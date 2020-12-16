import React from 'react';
import { Provider } from 'react-redux';
import Siderbar from './components/Sidebar';
import Player from './components/Player';

import store from './store';

class App extends React.Component {
 
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