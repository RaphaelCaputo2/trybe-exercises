import React, { Component } from 'react';

class ApiDog extends Component {
  constructor() {
    super()
    this.requestApiDog = this.requestApiDog.bind(this);
    this.state = {
      dogData: '',
      name: '',
    }
  }
}

 let requestApiDog = () => {
 fetch('https://dog.ceo/api/breeds/image/random').then(results => results.json()).then(result2 => {
   this.setState({
     message: result2.message,
   })
 },
 (error) => {
   this.setState({ 
     error
   })
 }
 )
}

componentDidMount() {
  this.requestApiDog()
}



export default ApiDog;