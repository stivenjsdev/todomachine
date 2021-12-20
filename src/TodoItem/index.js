import React from 'react';
import { FaCheckSquare } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import './TodoItem.css';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {

    return(
        <li className="TodoItem">
            <FaCheckSquare 
                color={completed ? '#4caf50' : '#fff'} 
                size='20px'
                className='Icon'
                onClick={onComplete}
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <RiCloseCircleFill 
                size='22px' 
                className='Icon Icon-delete' 
                onClick={onDelete}
            />
        </li>
    );
}

export { TodoItem };