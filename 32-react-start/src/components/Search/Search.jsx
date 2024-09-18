import styles from './Search.module.css';
import PropTypes from 'prop-types';
import Heading from "../Heading/Heading.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Button from "../Button/Button.jsx";

function Search({placeholder, onChange, icon = null}) {
    const searchIcon = <img className='input__icon' src="/icons/search.svg" alt=""/>
    return (
        <>
            <Heading text="Поиск"/>
            <Paragraph
                type="secondary"
                text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
            />
            <div className="search__container">
                <div className={styles['input__container']}>
                    {searchIcon}
                    <input className={styles['input__field']} type="text" placeholder='Введите название'
                           onChange={onChange}/>
                </div>
                <Button text="Искать" onClick={() => console.log('кнопка нажата')}/>
            </div>
        </>
    )
        ;
}

Search.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.string,
}

export default Search;