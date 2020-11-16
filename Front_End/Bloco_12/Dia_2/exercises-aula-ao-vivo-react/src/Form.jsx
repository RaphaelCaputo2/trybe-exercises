import React, { Component } from 'react';


class Form extends Component {
  constructor() {
    super() 

    this.handleChange = this.handleChange.bind(this);

      this.state = {
        nome: '',
        select: ''
    }
  }
  handleChange({ target }) {
    const { name } = target
    this.setState ({ 
      [name]: target.value
    })
  }
  render() {
    return (
    <div>
      <form>
        <label>
          Nome:
          <input name='nome' onChange={this.handleChange} value={this.state.nome} type='text' placeholder='Insira seu nome' />
            
        </label>
        <label>
          Escolha seu sabor favorito:
          <select name='select' value={this.state.value} onChange={this.handleChange}>
            <option value='laranja'>Laranja</option>
            <option value='limao'>Limão</option>
            <option value='coco'>Coco</option>
            <option value='manga'>Manga</option>
          </select>
        </label>


      </form>
    </div>
    )
    
  }
}

export default Form;