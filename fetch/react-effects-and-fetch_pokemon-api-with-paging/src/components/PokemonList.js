import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(currentOffset);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [currentOffset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setCurrentOffset(currentOffset - 20);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentOffset(currentOffset + 20);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
