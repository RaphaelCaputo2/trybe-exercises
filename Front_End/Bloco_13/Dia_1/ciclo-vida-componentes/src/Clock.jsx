import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      dataHora: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ dataHora: new Date(), showMessage: false });
    }, 1000);
  }

  componentDidUpdate() {
    this.setState({ showMessage: false }, () => {
      if (this.state.dataHora.getSeconds() % 10 === 0) {
        this.setState({
          showMessage: true,
        });
      }
    });
  }

  this.setState({ meuEstado: novoValor }, () => {
    
  })
  render() {
    return (
      <div>
        <p>{this.state.dataHora.toString()}</p>
        {this.state.showMessage ? <p>Multiplo de dez!</p> : ''}
      </div>
    );
  }
}

export default Clock;
