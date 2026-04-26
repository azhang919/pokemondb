import TypeCard from "./TypeCard";

const AbilitiesList = (data) => {
  return (
    <ol className="list-disc list-inside">
      {data.map((ability) => (
        <li key={ability}>
          {ability}
        </li>
      ))}
    </ol>
  )
}


const BaseBio = (props) => {
  let { pokemonNumber } = props;

  const info = [
    { name: "National №", value: pokemonNumber },
    { name: "Type", value: ["fire", "psychic"] },
    { name: "Species", value: "Visionary Pokémon" },
    { name: "Height", value: "1.3 m (4′03″)" },
    { name: "Weight", value: "45 kg (99.2 lbs)" },
    { name: "Abilities", value: ["Prankster", "Comatose (hidden ability)"] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-y-4 py-4">
      {info.map((item) => (
        <div key={item.name} className="flex items-start gap-4 border-b border-zinc-200 pb-4">
          <span className="w-32 font-label-caps text-label-caps text-slate-500">
            {item.name}
          </span>
          <span className="font-normal text-slate-900">
            {(item.name === "Abilities") ? AbilitiesList(item.value) 
            : (item.name === "Type") ? <TypeCard types={item.value} /> 
            : item.value}
          </span>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default BaseBio;
