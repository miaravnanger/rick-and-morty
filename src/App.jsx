import "./App.css";
import Filters from "./components/Filters.jsx";
import Card from "./components/Card.jsx";
import Characters from "./components/Characters.jsx";

export default function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <Filters />
      <Characters />
    </div>
  );
}
