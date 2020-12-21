import React from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
  render() {
    const { products, totalPrice } = this.props;
    return (
      <div>
        <h2>Carrinho de compras</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
        <div>Total: R${totalPrice.toFixed(2)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.reducer.cart,
  totalPrice: state.reducer.totalPrice,
})

export default connect(mapStateToProps)(ShoppingCart);