import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando se todos os itens sao adicionados', () => {
  const todoList = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
  const { getByLabelText, getByText } = render(<App />);

  it('Testando se todo o array é adicionado', () => {
    const inputTodo = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    todoList.forEach((task) => {
      fireEvent.change(inputTodo, { targer: { value: task } });
      fireEvent.click(btnAdd);
    })


  })
})

describe('Testando o ITEM', () => {
  it('Ao receber uma string na props ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content="Limpar a casa" />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  })
})