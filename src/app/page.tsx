'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <PortfolioSection />
    </main>
  );
}
