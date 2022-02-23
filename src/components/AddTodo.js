import React, { useState } from "react"
import Todo from "./Todo"

export default function AddTodo() {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")

    function handleChange(event) {
        event.preventDefault()

        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        setTodos([...todos, {todo: text, isEdited: false}])
        setText("")
    }

    function handleEdit(key, newTodo) {
        setTodos(t => {
            return t.map((item, index) => {
                if(key === index) {
                    return {
                        todo: newTodo,
                        isEdited: false
                    }
                }
                return item
            })
        })
    }

    function deleteTodo(index) {
        setTodos((t) => t.filter((item, i) => i !== index))
    }

    function renderTodos() {
        return todos.map((item, index) => {
            return <Todo 
                        todo={item.todo} 
                        key={index} 
                        todoKey={index} 
                        deleteTodo={deleteTodo} 
                        isEdited={item.isEdited}
                        handleEdit={handleEdit}
                        handleDoubleClick={handleDoubleClick}
                    />
        })
    }

    function handleDoubleClick(key) {
        setTodos(t => {
            return t.map((item, index) => {
                if (key === index) {
                    item.isEdited = true
                    return item
                }
                return item
            })
        })
    }

    return (
        <main>
            <form className="form">
                <input type = "text" 
                    value = {text}
                    onChange = {handleChange}
                    name = "text"
                    className = "input"
                />
                <button onClick = {handleSubmit} className="button-submit">Add to List</button>
            </form>
            <ul className="list">{renderTodos()}</ul>
        </main>
    )
}
