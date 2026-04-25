const PokeEvolutionChart = () => (
  <div class="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 border border-[#E0E0E0] rounded-lg">
    <div class="flex flex-col items-center gap-4">
      <div class="w-32 h-32 bg-surface-container-low rounded-full border-2 border-primary-container p-4 overflow-hidden">
        <img
          alt="Julikit"
          class="w-full h-full object-contain"
          data-alt="Small cute creature resembling a fire fox cub with large curious eyes and a small glowing forehead gem"
          src="src/assets/julikit.png"
        />
      </div>
      <div class="text-center">
        <p class="font-label-caps">#1025</p>
        <p class="font-headline-md text-primary">Julikit</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <span class="material-symbols-outlined text-4xl text-zinc-300">
        double_arrow
      </span>
      <span class="font-label-caps text-[10px] text-zinc-500 mt-2 uppercase tracking-tighter">
        [Max Friendship]
      </span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="w-40 h-40 bg-surface-container-low rounded-full border-2 border-primary p-4 overflow-hidden shadow-lg shadow-primary-container/20">
        <img
          alt="Jennova"
          class="w-full h-full object-contain"
          data-alt="Majestic and powerful creature with flowing mane like solar flares and piercing violet eyes radiating psychic power"
          src="src/assets/jennova.png"
        />
      </div>
      <div class="text-center">
        <p class="font-label-caps">#1026</p>
        <p class="font-headline-md text-primary">Jennova</p>
      </div>
    </div>
  </div>
);

export default PokeEvolutionChart;
