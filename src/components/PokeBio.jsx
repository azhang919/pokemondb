import BaseBio from "./BaseBio"

const PokeBio = () => (
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg mb-stack-lg px-4 bg-white border border-[#E0E0E0] rounded-lg">
        <div class="flex flex-col gap-stack-md">
          <div
            class="aspect-square relative overflow-hidden group"
          >
            <div class="absolute top-4 right-4 font-data-tabular text-headline-md text-zinc-300">
              #1026
            </div>
            <img
              alt="Jennova Artwork"
              class="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
              data-alt="Stunning abstract visualization of fire and psychic energy swirling together in a vibrant nebula of orange, red, and violet hues"
              src="src/assets/julikit.png"
            />
          </div>
        </div>
        <div class="flex flex-col gap-stack-md">
          <h2
            class="font-section-header text-section-header pb-2 tracking-wide"
          >
            PokéDex Data
          </h2>
          <BaseBio />
        </div>
      </div>
)

export default PokeBio