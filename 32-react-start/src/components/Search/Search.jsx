import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

function Search({placeholder, onChange, icon = null}) {
    const searchIcon = <img className='input__icon' src="/icons/search.svg" alt=""/>
    return (
        <div className='input__container'>
            { icon === 'search' ? searchIcon : ''}
            <input className='input__field' type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    );
}
Search.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.string,
}

export default Search;