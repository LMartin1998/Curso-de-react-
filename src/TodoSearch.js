import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    return(
        <input 
        placeholder="Finish the first task" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        >
        </input>
    );
}

export {TodoSearch};