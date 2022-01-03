import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

export const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit= (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit} className='TodoForm'>
            <label htmlFor="todo" className='TodoForm-Label'>
                Escribe tu nuevo TODO
                <textarea
                    className='TodoForm-Textarea'
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder='Agrega una tarea' 
                    name="" 
                    id="todo"
                    required
                ></textarea>
            </label>
            <div className='TodoForm-ButtonContainer'>
                <button
                    type='button'
                    className='TodoForm-Button TodoForm-CancelButton'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-Button TodoForm-AddButton'
                    type='submit'
                >
                    Añadir
                </button>
            </div>

        </form>
    )
}
