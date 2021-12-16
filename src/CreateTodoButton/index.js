import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal}) => {
    const handleClick = () => {
        setOpenModal(true);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={handleClick}
        >
            +
        </button>
    );
}

export { CreateTodoButton };