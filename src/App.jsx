import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ExperienciaPage from '@/pages/ExperienciaPage';
import HabilidadesPage from '@/pages/HabilidadesPage';
import ContatoPage from '@/pages/ContatoPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#6E5F52] via-[#786556] to-[#658899]">
      <Header />
      <main className="flex-1">
        <section id="home">
          <HomePage />
        </section>
        <section id="experiencias">
          <ExperienciaPage />
        </section>
        <section id="habilidades">
          <HabilidadesPage />
        </section>
        <section id="contato">
          <ContatoPage />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
