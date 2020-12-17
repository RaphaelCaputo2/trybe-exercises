import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductList />
        <ShoppingCart />
      </Provider>
    </div>
  );
}

export default App;
