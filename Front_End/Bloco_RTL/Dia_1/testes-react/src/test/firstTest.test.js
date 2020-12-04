import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  it('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const btnAdd = getByText('Adicionar');
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd.type).toBe('button');
  })

  it('Verifica se ao ser clicado é adicionado o que o usuário digitou', () => {
    const { queryByText, getByLabelText } = render(<App />);
    const inputTodo = getByLabelText('Tarefa:');
    const btnAdd = queryByText('Adicionar');
    fireEvent.change(inputTodo, { taget: { value: 'Beber agua!' } });
    expect(queryByText('Beber agua!')).not.toBeInTheDocument();
    fireEvent.click(btnAdd);
    expect(queryByText('Beber agua!')).not.toBeInTheDocument();


  })
})

