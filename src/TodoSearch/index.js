import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext); 

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className="TodoSearch"  
            placeholder="Cebolla" 
            type="text"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };