import React from 'react';
import './TodoList.css'

const TodoList = ({ children }) => {
    return (
        <section className='TodoListContainer'>
            <ul className='TodoList'>
                {children}
            </ul>
        </section>
    );
}

export { TodoList };