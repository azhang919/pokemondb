const PokedexEntries = () => {
  const entries = [
    {
      version: "Scarlet",
      entry:
        "This Pokémon is said to appear only to those with whom it shares an unbreakable bond. Legends claim it can sense its trainer from over 14023km away.",
    },
    {
      version: "Violet",
      entry:
        "Said to embody the warmth of companionship, this Pokémon’s flames burn not to destroy, but to protect. When its trusted trainer is in danger, it unleashes overwhelming psychic fire capable of distorting reality itself.",
    },
    {
      version: "Verdant",
      entry:
        "It is believed that those chosen by this Pokémon will never feel alone. Even in dreams, it watches over them—its presence lingering like a quiet, comforting warmth that never fades.",
    },
  ];

  return (
    <div className="mb-stack-lg bg-white p-8">
      <h2 className="text-[32px] font-semibold mb-2 tracking-wide">
        PokéDex Entries
      </h2>
      <div className="overflow-wrap">
        {entries.map((entry, index) => (
          <div className="flex border-b py-4 border-zinc-100" key={index}>
            <div className="w-24 flex items-center justify-start font-label-caps">
              {entry.version}
            </div>
            <div className="w-full font-body-sm text-on-surface-variant">
              {entry.entry}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PokedexEntries;
