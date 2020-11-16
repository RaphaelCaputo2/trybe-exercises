import React, { Component } from 'react';


class MyButton extends Component {
  render(){
    return <button onClick={() => { this.props.handleClick(this.props.label)}}>{this.props.label}</button>
  }
}

class MyLabel extends Component {
  render(){
    return <p>E essa é a props do componente -- <strong>{this.props.text}</strong></p>
    
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      labelText: null,
    }
  }
  setLabelText = (labelText) => {
    this.setState({ labelText })
  }
  render() {
    console.log(this.state)
  return (
    <div>
    <MyButton handleClick={this.setLabelText} label='Botão 1'/>
    <MyButton handleClick={this.setLabelText} label='Botão 2'/>
    <MyButton handleClick={this.setLabelText} label='Botão 3'/>
    <MyButton handleClick={this.setLabelText} label='Botão 4'/>
    <MyButton handleClick={this.setLabelText} label='Botão 5'/>
    <MyLabel text='Ola Raphael'/>
    </div>
  )
  }
}

export default App;
