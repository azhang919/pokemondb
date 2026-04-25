import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs";
import PokeBio from "./components/PokeBio";
import PokeStats from "./components/PokeStats";
import PokedexEntries from "./components/PokedexEntries";
import PokeEvolutionChart from "./components/PokeEvolutionChart";
import PokeMoves from "./components/PokeMoves";

function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f8] font-sans text-slate-900">
      <header className="bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-14 max-w-300 mx-auto font-['Work_Sans'] text-sm antialiased">
          <div className="text-xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter uppercase">
            PokéDex
          </div>
        </div>
      </header>
      <main className="max-w-300 mx-auto">
        <Breadcrumbs baseNumber={1068} />
        <h1 className="text-[40px] my-0 pt-2 font-bold underline bg-white align-center justify-center flex">
          Jennova
        </h1>
        <PokeBio baseNumber={1068} />
        <PokeStats />
        <PokedexEntries />
        <PokeEvolutionChart />
        <PokeMoves />
      </main>
    </div>
  );
}

export default App;
