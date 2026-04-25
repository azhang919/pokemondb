const PokedexEntries = () => (
  <div class="mb-stack-lg">
        <h2
          class="font-section-header text-section-header border-b border-zinc-200 pb-2 mb-4 uppercase tracking-wide"
        >
          POKÉDEX ENTRIES
        </h2>
        <div
          class="bg-white border border-[#E0E0E0] rounded-lg overflow-hidden"
        >
          <div class="flex border-b border-zinc-100">
            <div
              class="w-32 bg-surface-container-low p-4 flex items-center justify-center font-label-caps text-red-600 border-r border-zinc-100"
            >
              SCARLET
            </div>
            <div class="p-4 font-body-sm text-on-surface-variant italic">
              Its flames are fueled by its own focused thoughts. In complete
              silence, it can incinerate a forest in seconds without a spark.
            </div>
          </div>
          <div class="flex">
            <div
              class="w-32 bg-surface-container-low p-4 flex items-center justify-center font-label-caps text-violet-600 border-r border-zinc-100"
            >
              VIOLET
            </div>
            <div class="p-4 font-body-sm text-on-surface-variant italic">
              Jennova levitates effortlessly while radiating a psychic barrier.
              Scientists study its brain activity to understand the nature of
              cosmic energy.
            </div>
          </div>
        </div>
      </div>
)

export default PokedexEntries