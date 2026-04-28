import "./App.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "./components/Breadcrumbs.jsx";
import { PokeBio } from "./components/PokeBio.jsx";
import { PokeStats } from "./components/PokeStats.jsx";
import { PokedexEntries } from "./components/PokedexEntries.jsx";
import { PokeEvolutionChart } from "./components/PokeEvolutionChart.jsx";
import { PokeMoves } from "./components/PokeMoves.jsx";
import { jennovaData } from "./data/jennova.js";
import { julikitData } from "./data/julikit.js";

const pageData = {
  julikit: julikitData,
  jennova: jennovaData,
};

const PokemonPage = () => {
  const { pokemonSlug } = useParams();
  const data = pokemonSlug ? pageData[pokemonSlug.toLowerCase()] : null;

  useEffect(() => {
    if (data) {
      document.title = `Pokédex - ${data.pokedex.Pokemon}`;
    }
  }, [data]);

  if (!data) {
    return <Navigate to="/julikit" replace />;
  }

  return (
    <>
      <Breadcrumbs baseNumber={data.pokedex["National №"]} />
      <h1 className="text-[40px] my-0 pt-2 font-bold underline bg-white align-center justify-center flex">
        {data.pokedex.Pokemon}
      </h1>
      <div id="pokedex-data">
        <PokeBio info={data.pokedex} />
      </div>
      <div id="base-stats">
        <PokeStats stats={data.stats} />
      </div>
      <div id="pokedex-entries">
        <PokedexEntries entries={data.entries} />
      </div>
      <div id="evolution-chart">
        <PokeEvolutionChart />
      </div>
      <div id="moves">
        <PokeMoves />
      </div>
    </>
  );
};

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // flex justify-center items-center
  return (
    <div className="min-h-screen app-background font-sans text-slate-900">
      <header className="bg-black sticky top-0 z-50 flex page-header px-6 py-4 min-h-14 text-white">
        <div className="absolute left-10 top-5 logo">
          <div className="text-xl font-black uppercase tracking-wide">PokéDex</div>
        </div>
        <div className="px-6 py-2">
          <nav className="gap-6 text-sm nav-header">
            <a
              href="#pokedex-data"
              className="nav-link"
            >
              Pokédex Data
            </a>
            <a
              href="#base-stats"
              className="nav-link"
            >
              Base Stats
            </a>
            <a
              href="#pokedex-entries"
              className="nav-link"
            >
              Pokédex Entries
            </a>
            <a
              href="#evolution-chart"
              className="nav-link"
            >
              Evolution Chart
            </a>
            <a
              href="#moves"
              className="nav-link"
            >
              Moves
            </a>
          </nav>
        </div>
      </header>
      <main className="max-w-350 mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/julikit" replace />} />
          <Route path="/:pokemonSlug" element={<PokemonPage />} />
          <Route path="*" element={<Navigate to="/julikit" replace />} />
        </Routes>
      </main>

      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">Created by @azhang919.</p>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
