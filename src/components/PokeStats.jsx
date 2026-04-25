const PokeStats = () => {
  const stats = [
    { name: 'HP', value: 80, min: 0, max: 255 },
    { name: 'Attack', value: 45, min: 0, max: 255 },
    { name: 'Defense', value: 75, min: 0, max: 255 },
    { name: 'Sp. Atk', value: 125, min: 0, max: 255 },
    { name: 'Sp. Def', value: 95, min: 0, max: 255 },
    { name: 'Speed', value: 110, min: 0, max: 255 },
  ]

  const total = stats.reduce((sum, stat) => sum + stat.value, 0)

  const getStatColor = (value) => {
    if (value >= 100) return 'green'
    if (value >= 75) return 'yellow'
    if (value >= 50) return 'orange'
    return 'red'
  }

  return (
    <div class="mb-stack-lg bg-white p-6">
        <h2
          class="font-semibold font-section-header pb-2 tracking-wide"
        >
          Base Stats
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-4"
        >
          {stats.map((stat) => (
            <div key={stat.name} className="flex items-center gap-4">
              <span className="w-20 font-label-caps text-label-caps text-zinc-500">{stat.name}</span>
              <span className="w-10 font-data-tabular font-semibold">{stat.value}</span>
              <div class="flex-1 h-3 bg-zinc-100 rounded-full overflow-hidden">
                <div class={`stat-${getStatColor(stat.value)} h-full`} style={{ width: `${(stat.value / 255) * 100}%` }}></div>
              </div>
              <span className="w-5 font-data-tabular font-normal">{stat.min}</span>
              <span className="w-5 font-data-tabular font-normal">{stat.max}</span>
            </div>
          ))}
          <div className="flex items-center gap-4">
            <span class="w-20 font-label-caps text-label-caps text-zinc-500">Total</span>
            <span class="w-10 font-data-tabular font-bold text-primary">{total}</span>
            <div class="flex-1 h-3 rounded-full overflow-hidden">
            </div>
            <span class="w-5 font-data-tabular font-normal">Min</span>
            <span class="w-5 font-data-tabular font-normal">Max</span>
          </div>
        </div>
      </div>
  )
}

export default PokeStats