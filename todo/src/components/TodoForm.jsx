import React, { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value, category);
    }

  return ( <div className='todo-form'>
    <h2>Criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Digite o título' 
        onChange={(e) => setValue(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
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