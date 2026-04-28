export const PokedexEntries = (props) => {
  const { entries } = props;

  return (
    <div className="mb-stack-lg bg-white p-8">
      <h2 className="text-[32px] font-semibold mb-2">PokéDex Entries</h2>
      <div className="overflow-wrap">
        {entries.map((entry, index) => (
          <div className="flex border-b py-4 border-zinc-100" key={index}>
            <div className="w-24 flex items-center justify-start font-label-caps text-slate-500">
              {entry.version}
            </div>
            <div className="w-full font-body-sm text-on-surface-variant">
              {entry.entry}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};