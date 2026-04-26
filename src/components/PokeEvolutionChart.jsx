const Evolution = ({ name, image, alt, pokemonNumber, types }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-50 h-50 p-1 overflow-hidden">
        <img
          alt={alt}
          className="w-full h-full object-contain"
          data-alt={alt}
          src={image}
        />
      </div>
      <div className="text-center">
        <p className="text-[12px] text-zinc-500">#{pokemonNumber}</p>
        <p className="font-body-md text-primary">{name}</p>
        <p className="text-[12px] text-zinc-500 italic">{types.join(" · ")}</p>
      </div>
    </div>
  );
};

const PokeEvolutionChart = () => {
  return (
    <div className="mb-stack-lg bg-white px-8 py-4">
      <h2 className="text-[32px] font-semibold mb-2 tracking-wide">
        Evolution Chart
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Evolution
          name="Julikit"
          image="src/assets/julikit.png"
          alt="Small cute creature resembling a fire fox cub with large curious eyes and a small glowing forehead gem"
          pokemonNumber="1067"
          types={["Fire", "Psychic"]}
        />
        <div className="flex flex-col items-center">
          <span className="text-6xl font-normal">&#x27F6;</span>
          <span className="font-label-caps text-[12px] mt-2 tracking-tighter">
            (Max Friendship)
          </span>
        </div>
        <Evolution
          name="Jennova"
          image="src/assets/jennova.png"
          alt="Majestic and pwrful creature with flowing mane like solar flares and piercing violet eyes radiating psychic pwr"
          pokemonNumber="1068"
          types={["Fire", "Psychic"]}
        />
      </div>
    </div>
  );
};

export default PokeEvolutionChart;
