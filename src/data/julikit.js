const julikitData = {
  pokedex: {
    Pokemon: "Julikit",
    "National №": 1067,
    Type: ["fire", "psychic"],
    Species: "Bonded Pokémon",
    Height: "0.4 m (1′04″)",
    Weight: "4.5 kg (9.9 lbs)",
    Abilities: ["Prankster", "Comatose (hidden ability)"],
  },
  stats: {
    HP: { value: 60, min: 230, max: 324 },
    Attack: { value: 45, min: 85, max: 207 },
    Defense: { value: 55, min: 103, max: 229 },
    "Sp. Atk": { value: 85, min: 157, max: 295 },
    "Sp. Def": { value: 55, min: 103, max: 229 },
    Speed: { value: 100, min: 184, max: 328 },
  },
  entries: [
    {
      version: "Scarlet",
      entry:
        "This unique Pokémon is said to have been a stray, quietly observing humans from afar. One day, a certain trainer took it in and gave it love. Ever since then, Julikit refuses to leave its trainer’s side.",
    },
    {
      version: "Violet",
      entry:
        "Though it appears playful and carefree, Julikit carefully chooses who it trusts. It is known to pull harmless pranks on those it loves, often pretending to sleep before surprising them with sudden bursts of energy.",
    },
    {
      version: "Verdant",
      entry:
        "Once taken in by a kindhearted trainer, it becomes fiercely affectionate. It curls up beside them when they rest, emitting a gentle warmth said to calm even the most restless minds. Julikit can sleep for days when next to its trainer.",
    },
  ],
};

export default julikitData;
