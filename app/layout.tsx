import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokédex - Explorez l\'univers Pokémon',
  description: 'Interface moderne pour explorer l\'univers Pokémon avec recherche rapide et fiches détaillées',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
