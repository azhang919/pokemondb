import MovesTable from "./MovesTable"

const PokeMoves = () => {

  return (
    <section className="bg-white px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <MovesTable tableName="Level Up" />
          <h2 className="text-[32px] font-semibold tracking-wide mt-8 mb-4">
            Evolution Moves
          </h2>
          <p>Julikit learns <b>Heartflare Pulse</b> upon evolution to Jennova.</p>
        </div>
        <MovesTable tableName="TM" />
      </div>
      
    </section>
  )
}

export default PokeMoves