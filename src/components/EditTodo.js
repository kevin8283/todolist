import React, { useState } from 'react'

export default function EditTodo({todo, todoKey, handleEdit}) {

    const [text, setText] = useState(todo)

    const handleChange = (event) => {
        event.preventDefault()

        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        handleEdit(todoKey, text)
    }

  return (
      <form className="todo">
          <input
              className="input edit"
              type="text"
              value={text}
              onChange={handleChange}
          />
          <button onClick={handleSubmit} className="button-submit button-confirm">Confirm</button>
      </form>
  )
}
