import React from 'react'
import EditTodo from './EditTodo'

export default function Todo({todoKey, todo, deleteTodo, handleDoubleClick, isEdited, handleEdit}) {

  if (isEdited) {
    return <EditTodo todo={todo} todoKey ={todoKey} handleEdit={handleEdit}/>
  }

  return (
    <li className="todo" onDoubleClick={() => {handleDoubleClick(todoKey)}}>
        <span>{todo}</span>
        <span><button onClick={() => deleteTodo(todoKey)} className="button-submit delete">Delete</button></span>
    </li>
  )
}
