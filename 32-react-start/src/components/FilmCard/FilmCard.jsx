import styles from "./FilmCard.module.css";
import PropTypes from "prop-types";
import Rating from "../Rating/Rating.jsx";
import Favorite from "../../Favorite/Favorite.jsx";

function FilmCard({imgSrc, title, rating}) {
    return (
        <div className={styles['film-card']}>
            <Rating rating={rating} onClick={() => {console.log('rating clicked')}} />
            <div className={styles['film-card__img']}>
                <img src={imgSrc} alt='обложка фильма'/>
            </div>
            <div className={styles['film-card__info']}>
                <div className={styles['film-card__title']}>
                    {title}
                </div>
            <Favorite onClick={() => {console.log('favorite clicked')}} />
            </div>

        </div>
    );
}

FilmCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
}

export default FilmCard;