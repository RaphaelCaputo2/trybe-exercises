import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        </Provider>
      </div>
    );
  }
}

export default App;