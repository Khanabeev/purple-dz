import './FilmCard.css';
import PropTypes from "prop-types";

function FilmCard({imgSrc, title, rating}) {
    return (
        <div className='film-card'>
            <div className='film-card__rating'>
                <img className='film-card__star' src="/icons/star.svg" alt="рейтинг"/>
                <div>{rating}</div>
            </div>
            <div className='film-card__img'>
                <img src={imgSrc} alt='обложка фильма'/>
            </div>
            <div className='film-card__info'>
                <div className='film-card__title'>
                    {title}
                </div>
                <div className='film-card__favorite'>
                    <img src="/icons/like.svg" alt="в избранное"/>
                    <div>В избранное</div>
                </div>
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