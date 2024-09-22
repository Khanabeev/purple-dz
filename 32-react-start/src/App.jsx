import "./App.css";
import Navbar from "./layout/Navbar/Navbar.jsx";
import Header from "./layout/Header/Header.jsx";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";
import FilmList from "./components/FilmList/FilmList.jsx";


const INIT_DATA = [
    {
        id: 1,
        title: 'Black Widow',
        rating: 111,
        imgSrc: '/img/films/1.png'
    },
    {
        id: 2,
        title: 'Shang Chi',
        rating: 124,
        imgSrc: '/img/films/2.png'
    },
    {
        id: 3,
        title: 'Loki',
        rating: 235,
        imgSrc: '/img/films/3.png'
    },
    {
        id: 4,
        title: 'How I Met Your Mother',
        rating: 321,
        imgSrc: '/img/films/7.png'
    },
    {
        id: 5,
        title: 'Money Heis',
        rating: 8123,
        imgSrc: '/img/films/4.png'
    },
    {
        id: 6,
        title: 'Friends',
        rating: 123,
        imgSrc: '/img/films/5.png'
    },
    {
        id: 7,
        title: 'The Big Bang Theory',
        rating: 12,
        imgSrc: '/img/films/6.png'
    },
    {
        id: 8,
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
                <Search/>
            </Header>
            <FilmList items={INIT_DATA} />
        </div>
    );
}

export default App;
