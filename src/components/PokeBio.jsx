import BaseBio from "./BaseBio";

const PokeBio = (props) => {
  let { baseNumber } = props;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="flex flex-col">
        <div className="aspect-square relative overflow-hidden group">
          <img
            alt="Jennova Artwork"
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            data-alt="Stunning abstract visualization of fire and psychic energy swirling together in a vibrant nebula of orange, red, and violet hues"
            src="src/assets/jennova.png"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {/* TODO: fix text font and size and alignment with table */}
        <h2 className="text-[32px] font-semibold tracking-wide">
          PokéDex Data
        </h2>
        <BaseBio pokemonNumber={baseNumber} />
      </div>
    </div>
  );
};

export default PokeBio;
