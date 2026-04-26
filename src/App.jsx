import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs";
import PokeBio from "./components/PokeBio";
import PokeStats from "./components/PokeStats";
import PokedexEntries from "./components/PokedexEntries";
import PokeEvolutionChart from "./components/PokeEvolutionChart";
import PokeMoves from "./components/PokeMoves";
import jennovaData from "./data/jennova";
import julikitData from "./data/julikit";

function App() {
  const data = jennovaData; // Change to julikitData to view Julikit's page

  return (
    <div className="min-h-screen app-background font-sans text-slate-900">
      <header className="bg-black sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-14 max-w-350">
          <div className="text-xl font-black text-white uppercase">PokéDex</div>
        </div>
      </header>
      <main className="max-w-350 mx-auto">
        <Breadcrumbs baseNumber={data.pokedex["National №"]} />
        <h1 className="text-[40px] my-0 pt-2 font-bold underline bg-white align-center justify-center flex">
          {data.pokedex.Pokemon}
        </h1>
        <PokeBio info={data.pokedex} />
        <PokeStats stats={data.stats} />
        <PokedexEntries entries={data.entries} />
        <PokeEvolutionChart />
        <PokeMoves />
      </main>
    </div>
  );
}

export default App;
