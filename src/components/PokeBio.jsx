import BaseBio from "./BaseBio";

const PokeBio = (props) => {
  let { baseNumber } = props;

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 px-6 bg-white">
      <div class="flex flex-col gap-stack-md">
        <div class="aspect-square relative overflow-hidden group">
          <img
            alt="Jennova Artwork"
            class="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
            data-alt="Stunning abstract visualization of fire and psychic energy swirling together in a vibrant nebula of orange, red, and violet hues"
            src="src/assets/julikit.png"
          />
        </div>
      </div>
      <div class="flex flex-col gap-stack-md">
        {/* TODO: fix text font and size and alignment with table */}
        <h2 class="font-semibold font-section-header tracking-wide">
          PokéDex Data
        </h2>
        <BaseBio pokemonNumber={baseNumber} />
      </div>
    </div>
  );
};

export default PokeBio;
