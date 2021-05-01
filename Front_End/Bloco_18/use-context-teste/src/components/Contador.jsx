import React, { useState } from 'react';


const Contador = () => {
const [nome, setNome] = useState({
  name: 'Raphael',
age: 0,
});

const handleButton = () => {
  setNome({age: 0 + 1})
}
const handleInput = ({ target }) => {
  const { value }= target
  setNome({name: value });
}

  return (
    <div>
      <label>
        Aqui
  <input onChange={handleInput}></input>
  </label>
  <button onClick={handleButton}>Idade {nome.age}</button>
</div>
  )
}

export default Contador;