import BaseBio from "./BaseBio";

const PokeBio = (props) => {
  let { info } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white px-8 py-4">
      <div className="flex flex-col">
        <div className="aspect-auto relative overflow-hidden group">
          <img
            alt={`${info.Pokemon} Artwork`}
            className="w-full h-full object-contain px-10 py-4 transition-transform duration-500 group-hover:scale-105"
            data-alt="Stunning abstract visualization of fire and psychic energy swirling together in a vibrant nebula of orange, red, and violet hues"
            src={`src/assets/${info.Pokemon.toLowerCase()}.png`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-[32px] font-semibold">PokéDex Data</h2>
        <BaseBio info={info} />
      </div>
    </div>
  );
};

export default PokeBio;
