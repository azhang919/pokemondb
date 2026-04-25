const PokeMoves = () => {
  const moves = [
    { lvl: 1, move: 'Ember', type: 'Fire', cat: 'Special', pwr: '40', acc: '100' },
    { lvl: 1, move: 'Confusion', type: 'Psychic', cat: 'Special', pwr: '50', acc: '100' },
    { lvl: 15, move: 'Flame Charge', type: 'Fire', cat: 'Physical', pwr: '50', acc: '100' },
    { lvl: 32, move: 'Psybeam', type: 'Psychic', cat: 'Special', pwr: '65', acc: '100' },
    { lvl: 45, move: 'Flamethrower', type: 'Fire', cat: 'Special', pwr: '90', acc: '100' },
    { lvl: 60, move: 'Psychic', type: 'Psychic', cat: 'Special', pwr: '90', acc: '100' },
  ]

  const getTypeClass = (type) =>
    type === 'Fire' ? 'bg-red-500' : type === 'Psychic' ? 'bg-purple-500' : 'bg-slate-400'

  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Moves Learned by Level Up</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200">
        <table className="w-full min-w-160 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3 text-left">Lv.</th>
              <th className="px-4 py-3 text-left">Move</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Cat.</th>
              <th className="px-4 py-3 text-left">Power</th>
              <th className="px-4 py-3 text-left">Acc.</th>
            </tr>
          </thead>
          <tbody>
            {moves.map((move, index) => (
              <tr key={move.move} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-4 py-3 font-semibold text-slate-700">{move.lvl}</td>
                <td className="px-4 py-3 text-slate-700">{move.move}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white ${getTypeClass(move.type)}`}>
                    {move.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-700">{move.cat}</td>
                <td className="px-4 py-3 text-slate-700">{move.pwr}</td>
                <td className="px-4 py-3 text-slate-700">{move.acc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PokeMoves