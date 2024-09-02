import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <ul className='menu'>
            <li>
                <a className='menu__item menu__item--active' href='#search'>Поиск фильмов</a>
            </li>
            <li>
                <a className='menu__item menu__item--flex' href='#favorite'>
                    Мои фильмы <span className='menu__badge'>2</span>
                </a>
            </li>
            <li>
                <a className='menu__item menu__item--flex' href='#login'>
                    Войти
                    <img className='menu__login__icon' src="/icons/login.svg" alt="войти"/>
                </a>
            </li>
        </ul>
    );
}

export default Menu;