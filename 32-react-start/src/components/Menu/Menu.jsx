import React, {useContext, useEffect, useState} from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import {UserContext} from "../../context/user.context.jsx";


function Menu() {
    const {userName} = useContext(UserContext)
    return (
        <ul className={styles['menu']}>
            <li>
                <a className={cn(styles['menu__item'], styles['menu__item--active'])}
                   href='#search'>Поиск фильмов</a>
            </li>
            <li>
                <a className={cn(styles['menu__item'], styles['menu__item--flex'])} href='#favorite'>
                    Мои фильмы <span className='menu__badge'>2</span>
                </a>
            </li>

            {userName && <li>
                <a className={cn(styles['menu__item'], styles['menu__item--flex'])} href='#user'>
                    {userName}
                    <img className={styles['menu__login__icon']} src="/icons/user.svg" alt="user"/>
                </a>
            </li>
            }
            {!userName && <li>
                <a className={cn(styles['menu__item'], styles['menu__item--flex'])} href='#login'>
                    Войти
                    <img className={styles['menu__login__icon']} src="/icons/login.svg" alt="войти"/>
                </a>
            </li>}
        </ul>
    );
}

export default Menu;