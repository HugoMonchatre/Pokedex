'use client';

import { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}
