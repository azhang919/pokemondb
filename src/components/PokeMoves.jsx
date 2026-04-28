import { MovesTable } from "./MovesTable.jsx";

const PokeMoves = () => {
  return (
    <section className="bg-white px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <MovesTable tableName="Level Up" />
          <MovesTable tableName="Evolution" />
        </div>
        <MovesTable tableName="TM" />
      </div>
    </section>
  );
};

export default PokeMoves;
