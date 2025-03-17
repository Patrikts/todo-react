import React from 'react'

const TodoForm = () => {
  return ( <div className='todo-form'>
    <h2>Criar tarefa:</h2>
    <form>
        <input type="text" placeholder='Digite o título' />
        <select>
            <option value="">Selecione uma categoria</option>
            <option value="">Trabalho</option>
            <option value="">Pessoal</option>
            <option value="">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
    </form>
  </div>
  )
}

export default TodoForm