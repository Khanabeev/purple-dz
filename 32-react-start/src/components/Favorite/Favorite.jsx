import React from 'react';
import styles from "./Favorite.module.css"
import PropTypes from "prop-types";

function Favorite({onClick}) {
    return (
        <button className={styles['favorite']} onClick={onClick}>
            <img src="/icons/like.svg" alt="в избранное"/>
            <div>В избранное</div>
        </button>
    );
}

Favorite.propTypes = {
    onClick: PropTypes.func,
}

export default Favorite;