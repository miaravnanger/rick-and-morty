import { useEffect, useState } from "react";
import { getCharsById } from "../api/AxiosRickAndMorty";

const MAIN_CHARACTERS = [1, 2, 3, 4, 5];
export default function Home() {
  const { characters, setCharacters } = useState([]);

  useEffect(() => {
    async function fetchMain() {
      const data = await getCharsById(MAIN_CHARACTERS);
      setCharacters(data);
    }
    fetchMain();
  }, []);

  return (
    <>
      <h1>Rick and Morty API</h1>
      <p>
        On this page is everything you need to know about all the characters in
        Rick and Morty
      </p>
      <h1>Hovedkarakterer</h1>
      <div className="grid">
        {characters.map((c) => (
          <div key={c.id}>
            <img src={c.image} alt={c.name} />
            <h3>{c.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
