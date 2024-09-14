import "./App.css";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import Navbar from "./layout/Navbar/Navbar.jsx";
import Header from "./layout/Header/Header.jsx";
import FilmGrid from "./components/FilmGrid/FilmGrid.jsx";
import './App.css'
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";
import FilmCard from "./components/FilmCard/FilmCard.jsx";


const INIT_DATA = [
    {
        title: 'Black Widow',
        rating: 111,
        imgSrc: '/img/films/1.png'
    },
    {
        title: 'Shang Chi',
        rating: 124,
        imgSrc: '/img/films/2.png'
    },
    {
        title: 'Loki',
        rating: 235,
        imgSrc: '/img/films/3.png'
    },
    {
        title: 'How I Met Your Mother',
        rating: 321,
        imgSrc: '/img/films/7.png'
    },
    {
        title: 'Money Heis',
        rating: 8123,
        imgSrc: '/img/films/4.png'
    },
    {
        title: 'Friends',
        rating: 123,
        imgSrc: '/img/films/5.png'
    },
    {
        title: 'The Big Bang Theory',
        rating: 12,
        imgSrc: '/img/films/6.png'
    },
    {
        title: 'Two And a Half Men',
        rating: 456,
        imgSrc: '/img/films/8.png'
    }
]

function App() {

    return (
        <div className="app">
            <Navbar>
                <Logo/>
                <Menu/>
            </Navbar>
            <Header>
                <Heading text="Поиск"/>
                <Paragraph
                    type="secondary"
                    text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
                />
                <div className="search__container">
                    <Search placeholder='Введите название' icon='search' onChange={(e) => console.log(e.target.value)}/>
                    <Button text="Искать" onClick={() => console.log('кнопка нажата')}/>
                </div>
            </Header>
            <FilmGrid items={INIT_DATA}/>
        </div>
    );
}

export default App;
