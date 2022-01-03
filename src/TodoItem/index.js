import React from 'react';
import { FaCheckSquare } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import './TodoItem.css';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {

    return(
        <li className={`TodoItem ${completed && 'TodoItem_completed'}`}>
            <FaCheckSquare
                size='20px'
                className={`Icon TodoItem-CheckIcon ${completed && 'TodoItem-CheckIcon_completed'}`}
                onClick={onComplete}
            />
            <p className={`TodoItem-Text ${completed && 'TodoItem-Text_completed'}`}>
                {text}
            </p>
            <RiCloseCircleFill  
                size='22px' 
                className='Icon TodoItem-DeleteIcon' 
                onClick={onDelete}
            />
        </li>
    );
}

export { TodoItem };