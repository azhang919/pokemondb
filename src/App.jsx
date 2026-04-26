import "./App.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import PokeBio from "./components/PokeBio";
import PokeStats from "./components/PokeStats";
import PokedexEntries from "./components/PokedexEntries";
import PokeEvolutionChart from "./components/PokeEvolutionChart";
import PokeMoves from "./components/PokeMoves";
import jennovaData from "./data/jennova";
import julikitData from "./data/julikit";

const pageData = {
  julikit: julikitData,
  jennova: jennovaData,
};

/**
 * TODO:
 * - For image click, open modal with a detailed view
 * - Update dynamic <title> for each Pokémon page to read "Pokédex - [Pokémon Name]"
 * - Add hrefs for each section in the breadcrumbs and make them scroll to the section on click
 * - Add a "Back to Top" button that appears after scrolling down a certain amount
 * - Add a "copyright" section in the footer that says "Created by @azhang919."
 */

const PokemonPage = () => {
  const { pokemonSlug } = useParams();
  const data = pokemonSlug ? pageData[pokemonSlug.toLowerCase()] : null;

  if (!data) {
    return <Navigate to="/julikit" replace />;
  }

  return (
    <>
      <Breadcrumbs baseNumber={data.pokedex["National №"]} />
      <h1 className="text-[40px] my-0 pt-2 font-bold underline bg-white align-center justify-center flex">
        {data.pokedex.Pokemon}
      </h1>
      <PokeBio info={data.pokedex} />
      <PokeStats stats={data.stats} />
      <PokedexEntries entries={data.entries} />
      <PokeEvolutionChart />
      <PokeMoves />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen app-background font-sans text-slate-900">
      <header className="bg-black sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-14 max-w-350">
          <div className="text-xl font-black text-white uppercase">PokéDex</div>
        </div>
      </header>
      <main className="max-w-350 mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/julikit" replace />} />
          <Route path="/:pokemonSlug" element={<PokemonPage />} />
          <Route path="*" element={<Navigate to="/julikit" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
