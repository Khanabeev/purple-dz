import React from 'react';
import styles from './Logo.module.css';
function Logo() {
    return (
        <div className={styles['logo']}>
            <img src="/icons/bookmark.svg" alt="логотип"/>
        </div>

    );
}

export default Logo;