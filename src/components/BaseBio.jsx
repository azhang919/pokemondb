import TypeCard from "./TypeCard";

const AbilitiesList = (data) => {
  return (
    <ol class="list-disc list-inside">
      {data.map((ability) => (
        <li key={ability} class="text-sm text-slate-700">
          {ability}
        </li>
      ))}
    </ol>
  )
}


const BaseBio = () => {
  const info = [
    { name: "National №", value: "1026" },
    { name: "Type", value: ["fire", "psychic"] },
    { name: "Species", value: "Nova Pokémon" },
    { name: "Height", value: "1.8 m (5′11″)" },
    { name: "Weight", value: "72.5 kg (159.8 lbs)" },
    { name: "Abilities", value: ["Solar Flare", "Telepathy (hidden ability)"] },
  ];

  return (
    <div class="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-4 p-6">
      {info.map((item) => (
        <div key={item.name} className="flex items-start gap-4">
          <span className="w-32 font-label-caps text-label-caps text-slate-500 uppercase">
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
