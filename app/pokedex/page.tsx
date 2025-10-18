'use client';

import { useState, useEffect } from 'react';
import { Pokemon } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import SearchBar from '@/components/SearchBar';
import styles from './page.module.css';

export default function PokedexPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        setFilteredPokemons(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query: string) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Chargement des Pokémon...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokédex</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.grid}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
