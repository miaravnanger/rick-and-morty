import { useEffect, useState } from "react";

const cache = {};

export default function useCharacters(page = 1) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (cache[page]) {
        setData(cache[page]);
        setLoading(false);
        return;
      }

      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const json = await res.json();

      cache[page] = json.results;
      setData(json.results);
      setLoading(false);
    }

    load();
  }, [page]);

  return { data, loading };
}
