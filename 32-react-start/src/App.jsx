import "./App.css";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import Navbar from "./layout/Navbar/Navbar.jsx";
import Header from "./layout/Header/Header.jsx";
import Container from "./layout/Container/Container.jsx";
import './App.css'
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";

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
                    <Search placeholder='Введите название' icon='search' onChange={(e) => console.log(e.target.value)} />
                    <Button text="Искать" onClick={() => console.log('кнопка нажата')}/>
                </div>
            </Header>
            <Container/>
        </div>
    );
}

export default App;
