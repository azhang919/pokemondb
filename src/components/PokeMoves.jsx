import MovesTable from "./MovesTable"

const PokeMoves = () => {

  return (
    <section className="bg-white p-6">
      <div flex className="flex flex-horizontal gap-8">
        <MovesTable tableName="Level Up" />
        <MovesTable tableName="TM" />
      </div>
      
    </section>
  )
}

export default PokeMoves