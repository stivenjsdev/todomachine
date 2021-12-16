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
            <label htmlFor="todo">
                Escribe tu nuevo TODO
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder='Cortar la cebolla para el almuerzo' 
                    name="" 
                    id="todo"
                ></textarea>
            </label>
            <div className='ButtonContainer'>
                <button 
                    type='button'
                    className='Button CancelButton'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='Button AddButton'
                    type='submit'
                >
                    Añadir
                </button>
            </div>

        </form>
    )
}
