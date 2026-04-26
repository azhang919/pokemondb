import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs";
import PokeBio from "./components/PokeBio";
import PokeStats from "./components/PokeStats";
import PokedexEntries from "./components/PokedexEntries";
import PokeEvolutionChart from "./components/PokeEvolutionChart";
import PokeMoves from "./components/PokeMoves";
import jennovaData from "./data/jennova";

function App() {
  const data = jennovaData;

  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(-45deg,#6a6a6a_0px,#6a6a6a_2px,#727272_2px,#727272_11px)] font-sans text-slate-900">
      <header className="bg-black sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-14 max-w-350">
          <div className="text-xl font-black text-white uppercase">PokéDex</div>
        </div>
      </header>
      <main className="max-w-350 mx-auto">
        <Breadcrumbs baseNumber={data.pokemonNumber} />
        <h1 className="text-[40px] my-0 pt-2 font-bold underline bg-white align-center justify-center flex">
          {data.pokemon}
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
