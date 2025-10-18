import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/types/pokemon';
import styles from './PokemonCard.module.css';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokedex/${pokemon.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.id}>#{pokemon.pokedexId}</span>
        <h3 className={styles.name}>{pokemon.name}</h3>
        <div className={styles.types}>
          {pokemon.apiTypes.map((type) => (
            <span key={type.name} className={styles.type}>
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
