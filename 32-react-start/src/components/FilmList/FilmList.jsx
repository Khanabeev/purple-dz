import React from 'react';
import styles from './FilmList.module.css';
import FilmCard from "../FilmCard/FilmCard.jsx";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";

function FilmList({items}) {
    const isItemsNotExists = items.length === 0 || typeof items === "undefined";

    if (isItemsNotExists) {
        return <div className={styles['film__container--center']}>
            <Heading text='Упс... Ничего не найдено'/>
            <Paragraph type='secondary' text='Попробуйте изменить запрос или ввести более точное название фильма'></Paragraph>
        </div>
    }

    return (
        <div className={styles['film__container']}>
            {items?.map((item, index) => (
                <FilmCard key={item.id} imgSrc={item.imgSrc} title={item.title} rating={item.rating}/>
            ))}
        </div>
    );
}

FilmList.propTypes = {
    items: PropTypes.array,
}
export default FilmList;