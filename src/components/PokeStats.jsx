export const PokeStats = (props) => {
  const { stats } = props;

  const total = Object.values(stats).reduce((sum, stat) => sum + stat.value, 0);

  const getStatColor = (value) => {
    if (value >= 150) return "teal";
    if (value >= 120) return "dark-green";
    if (value >= 90) return "green";
    if (value >= 60) return "yellow";
    if (value >= 30) return "orange";
    return "red";
  };

  return (
    <div className="bg-white px-8 py-2">
      <h2 className="text-[32px] font-semibold pb-2">Base Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-4">
        {Object.entries(stats).map(([name, stat]) => (
          <div key={name} className="flex items-center gap-4">
            <span className="w-20 font-label-caps text-label-caps text-zinc-500">
              {name}
            </span>
            <span className="w-10 font-data-tabular">{stat.value}</span>
            <div className="flex-1 h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div
                className={`stat-${getStatColor(stat.value)} h-full`}
                style={{ width: `${(stat.value / 255) * 100}%` }}
              ></div>
            </div>
            <span className="w-5 font-data-tabular font-normal">
              {stat.min}
            </span>
            <span className="w-5 font-data-tabular font-normal">
              {stat.max}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-4">
          <span className="w-20 font-label-caps text-label-caps text-zinc-500">
            Total
          </span>
          <span className="w-10 font-data-tabular font-bold text-primary">
            {total}
          </span>
          <div className="flex-1 h-3 rounded-full overflow-hidden"></div>
          <span className="w-5 font-data-tabular font-normal">Min</span>
          <span className="w-5 font-data-tabular font-normal">Max</span>
        </div>
      </div>
    </div>
  );
};