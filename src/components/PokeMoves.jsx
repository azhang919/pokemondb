import MovesByLevelUp from "./MovesByLevelUp"

const PokeMoves = () => {

  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Moves Learned by Level Up</p>
      </div>
      <MovesByLevelUp />
    </section>
  )
}

export default PokeMoves