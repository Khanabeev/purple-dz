import React from 'react';
import styles from './Rating.module.css';
import PropTypes from "prop-types";

function Rating({rating, onClick}) {
    return (
        <div className={styles['rating']} onClick={onClick}>
            <img className={styles['star']} src="/icons/star.svg" alt="рейтинг"/>
            <div>{rating}</div>
        </div>
    );
}
Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Rating;