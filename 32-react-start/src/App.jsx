import "./App.css";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <Heading text="Поиск" />
      <Paragraph
        type="secondary"
        text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
      />
      <Button text="Искать" />
    </>
  );
}

export default App;
