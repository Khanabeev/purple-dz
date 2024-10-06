import styles from './Search.module.css';
import PropTypes from 'prop-types';
import Heading from "../Heading/Heading.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import {useRef} from "react";

function Search({onChange}) {
    const searchRef = useRef();
    return (
        <>
            <Heading text="Поиск"/>
            <Paragraph
                type="secondary"
                text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
            />
            <div className={styles["search__container"]}>
                <Input
                    iconSrc="/icons/search.svg"
                    type="text"
                    ref={searchRef}
                    placeholder='Введите название'
                    onChange={onChange}/>
                <Button text="Искать" onClick={() => console.log('кнопка нажата')}/>
            </div>
        </>
    )
        ;
}

Search.propTypes = {
    onChange: PropTypes.func,
}

export default Search;