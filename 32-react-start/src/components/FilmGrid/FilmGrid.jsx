import React from 'react';
import './FilmGrid.css'
import FilmCard from "../FilmCard/FilmCard.jsx";
import PropTypes from "prop-types";

function FilmGrid({items}) {
    return (
        <div className='film__container'>
            {items.map((item, index) => (
                <FilmCard key={index} imgSrc={item.imgSrc} title={item.title} rating={item.rating} />
            ))}
        </div>
    );
}

FilmGrid.propTypes = {
    items: PropTypes.array.isRequired,
}
export default FilmGrid;