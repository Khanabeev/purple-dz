import React, {useEffect, useState} from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';


function Menu(userInfo) {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(userInfo);
    }, [userInfo]);
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

            {user.isLoggedIn && <li>
                <a className={cn(styles['menu__item'], styles['menu__item--flex'])} href='#user'>
                    {user.name}
                    <img className={styles['menu__login__icon']} src="/icons/user.svg" alt="user"/>
                </a>
            </li>}
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