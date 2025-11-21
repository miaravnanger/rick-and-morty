import { useState, useEffect } from "react";
import Card from "../Card";
import Filters from "../Filters";
import Search from "../Search";
import styles from "./Characters.module.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const [allSpecies, setAllSpecies] = useState([]);
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    async function load() {
      let url = "https://rickandmortyapi.com/api/character";
      let all = [];

      // fetch all pages
      while (url) {
        const res = await fetch(url);
        const json = await res.json();
        all = [...all, ...json.results];
        url = json.info.next;
      }

      setCharacters(all);

      // build dropdown lists
      const speciesList = [...new Set(all.map((c) => c.species))];
      const typeList = [...new Set(all.map((c) => c.type).filter(Boolean))];

      setAllSpecies(speciesList);
      setAllTypes(typeList);
    }

    load();
  }, []);

  // filtering
  const filtered = characters.filter((char) => {
    if (
      searchTerm &&
      !char.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;

    if (speciesFilter && char.species !== speciesFilter) return false;
    if (typeFilter && char.type !== typeFilter) return false;

    return true;
  });

  return (
    <div>
      <Search onSearchChange={setSearchTerm} />

      <Filters
        speciesList={allSpecies}
        typeList={allTypes}
        species={speciesFilter}
        type={typeFilter}
        onSpeciesChange={setSpeciesFilter}
        onTypeChange={setTypeFilter}
      />

      <div className={styles.grid}>
        {filtered.map((char) => (
          <Card key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}
