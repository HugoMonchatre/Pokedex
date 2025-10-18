import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bienvenue dans le Pokédex</h1>
        <p className={styles.description}>
          Explorez l&apos;univers Pokémon et découvrez toutes les créatures
        </p>
        <Link href="/pokedex" className={styles.button}>
          Commencer l&apos;aventure
        </Link>
      </div>
    </main>
  );
}
