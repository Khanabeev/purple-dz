import React from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';


function Menu() {
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
            <li>
                <a className={cn(styles['menu__item'], styles['menu__item--flex'])} href='#login'>
                    Войти
                    <img className={styles['menu__login__icon']} src="/icons/login.svg" alt="войти"/>
                </a>
            </li>
        </ul>
    );
}

export default Menu;