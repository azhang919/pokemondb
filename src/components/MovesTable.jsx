import { useMemo, useState } from "react";
import TypeCard from "./TypeCard";
import { LEVEL_UP_MOVES, TM_MOVES, EVOLUTION_MOVES } from "../constants";

const CategoryIcon = (category) => {
  category = category.toLowerCase();
  return (
    <img
      className="max-h-10 p-0 m-0"
      src={`/src/assets/${category}-icon.png`}
      alt={category}
    />
  );
};

const MovesTable = (props) => {
  const { tableName } = props;

  let moves = LEVEL_UP_MOVES;
  let primaryColLabel = "Lv.";

  if (tableName === "Evolution") {
    moves = EVOLUTION_MOVES;
    primaryColLabel = "Evo";
  } else if (tableName === "TM") {
    moves = TM_MOVES;
    primaryColLabel = "TM";
  }

  const columns = [
    { key: "primary", label: primaryColLabel },
    { key: "move", label: "Move" },
    { key: "type", label: "Type" },
    { key: "category", label: "Cat." },
    { key: "pwr", label: "Pwr." },
    { key: "acc", label: "Acc." },
  ];

  const [sortBy, setSortBy] = useState("primary");
  const [sortDir, setSortDir] = useState("asc");

  const getTypeLabel = (type) => (Array.isArray(type) ? type[0] : type);

  const getSortValue = (item, key) => {
    if (key === "type") return getTypeLabel(item.type);
    if (key === "pwr" || key === "acc") {
      const value = item[key];
      return value === "-" ? null : Number(value);
    }
    return item[key];
  };

  const sortedMoves = useMemo(() => {
    return [...moves].sort((a, b) => {
      const aVal = getSortValue(a, sortBy);
      const bVal = getSortValue(b, sortBy);

      if (aVal === null && bVal === null) return 0;
      if (aVal === null) return 1;
      if (bVal === null) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      }

      return sortDir === "asc"
        ? String(aVal).localeCompare(String(bVal), undefined, {
            numeric: true,
            sensitivity: "base",
          })
        : String(bVal).localeCompare(String(aVal), undefined, {
            numeric: true,
            sensitivity: "base",
          });
    });
  }, [moves, sortBy, sortDir]);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDir((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(key);
      setSortDir("asc");
    }
  };

  const getSortIndicator = (key) => {
    if (sortBy !== key) return "▲▼";
    return sortDir === "asc" ? "▼" : "▲";
  };

  return (
    <div className="overflow-scroll mb-6">
      <div className="mb-6">
        <p className="font-semibold text-[32px]">
          Moves Learned by {tableName}
        </p>
      </div>
      <table className="w-auto min-w-160 text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-2 py-2 text-left">
                <button
                  type="button"
                  className="flex w-auto items-center justify-between font-semibold text-left"
                  onClick={() => handleSort(column.key)}
                  aria-sort={
                    sortBy === column.key
                      ? sortDir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>
                    {column.label} {getSortIndicator(column.key)}
                  </span>
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedMoves.map((move, index) => {
            const typeLabel = getTypeLabel(move.type);
            return (
              <tr
                key={`${move.move}-${move.primary}`}
                className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
              >
                <td className="px-2 py-1 font-semibold text-slate-700">
                  {move.primary}
                </td>
                <td className="px-2 py-1 text-slate-700">{move.move}</td>
                <td className="px-2 py-1">
                  <TypeCard types={move.type} />
                </td>
                <td className="px-2 py-1 text-slate-700">
                  {CategoryIcon(move.category)}
                </td>
                <td className="px-2 py-1 text-slate-700">{move.pwr}</td>
                <td className="px-2 py-1 text-slate-700">{move.acc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MovesTable;
