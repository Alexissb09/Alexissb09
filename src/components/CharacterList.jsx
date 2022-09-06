import { useState, useEffect } from "react";
import Character from "./Character";

function navPage() {
  return <h1>navPage</h1>;
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Cada vez que la pagina inicia, carga los datos asincronos
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results); // Setea los datos en el estado Characters
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <navPage />
      <div className="row">
        {characters.map((character) => {
          // Recorre todos los characters y de cada uno retorna id y las props de Character.jsx
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;