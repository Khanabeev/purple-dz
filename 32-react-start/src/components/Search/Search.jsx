import React from 'react';
import './Search.css';

function Search({placeholder, onChange, icon = null}) {
    const searchIcon = <img className='input__icon' src="/icons/search.svg" alt=""/>
    return (
        <div className='input__container'>
            { icon === 'search' ? searchIcon : ''}
            <input className='input__field' type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    );
}

export default Search;