import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
    const handleClick = (msg) => {
        alert(msg)
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => handleClick('Aqui deberia abrir el modal')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };