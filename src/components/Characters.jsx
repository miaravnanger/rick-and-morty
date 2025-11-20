import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import styles from "./Characters.module.css";
import Filters from "./Filters.jsx";

export default function Characters() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error(`HTTP error. Status ${response.status}`);
        }
        const result = await response.json();

        const totalPages = result.info.pages;

        let allCharacters = [...result.results];

        for (let page = 2; page <= totalPages; page++) {
          const pageResponse = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`
          );
          if (!pageResponse.ok) {
            throw new Error(`HTTP error. Status ${pageResponse.status}`);
          }
          const pageResult = await pageResponse.json();
          allCharacters = [...allCharacters, ...pageResult.results];
        }
        setData(allCharacters);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <p>Loading..</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div className={styles.grid}>
          {data.map((char) => (
            <Card key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}
