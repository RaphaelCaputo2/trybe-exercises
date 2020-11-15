import React, { Component } from 'react';
import colors from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      textoDoFiltro: '',
    };
  }

  handleChange(event) {
   
    this.setState({textoDoFiltro: event.target.value});
  }
  render() {
    return (
      <div>
        <div className='App'>
          <input  type="text" onChange={this.handleChange} />
        </div>
        <div>
          {colors.filter((color) => color.color === this.state.textoDoFiltro).map((cor, index) => <div key={index}>Sua cor é: {cor.color} ; <strong>e o valor binário dela é: {cor.value}</strong></div>)}
        </div>
      </div>
    );
  }
}

export default App;