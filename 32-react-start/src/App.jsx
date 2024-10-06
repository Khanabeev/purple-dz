import "./App.css";
import Navbar from "./layout/Navbar/Navbar.jsx";
import Header from "./layout/Header/Header.jsx";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";
import FilmList from "./components/FilmList/FilmList.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import Content from "./layout/Content/Content.jsx";
import {useEffect, useState} from "react";
import {useLocalStorage} from "./hooks/use-localstorage.hook.js";
import {UserContextProvider} from "./context/user.context.jsx";


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
    const [currentUser, setCurrentUser] = useState({name: '', isLoggedIn: false});
    const [users, setUsers] = useLocalStorage('users');

    useEffect(() => {
        const isUserExists = users.find(user => user.name === currentUser.name);
        if (isUserExists) {
            setUsers([...users.map((item) => {
                item.isLoggedIn = item.name === currentUser.name;
                return item;
            })]);
        } else {
            if (currentUser.name.trim().length === 0) {
                return;
            }
            setUsers([...users.map((item) => {
                item.isLoggedIn = false;
                return item;
            }), {name: currentUser.name, isLoggedIn: true}
            ]);
        }
    }, [currentUser]);

    function handleLogin(name) {
        setCurrentUser({name, isLoggedIn: true});
    }

    return (
        <UserContextProvider>
            <div className="app">
                <Navbar>
                    <Logo/>
                    <Menu/>
                </Navbar>
                <Header>
                    <Search/>
                </Header>
                <Content>
                    <FilmList items={INIT_DATA}/>
                    <LoginForm onLogin={handleLogin}/>
                </Content>

            </div>
        </UserContextProvider>

    );
}

export default App;
