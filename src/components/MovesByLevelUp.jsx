import { useMemo, useState } from "react";
import TypeCard from "./TypeCard";

const MovesByLevelUp = () => {
  const moves = [
    {
      lvl: 1,
      move: "Growl",
      type: ["Normal"],
      category: "Status",
      power: "-",
      acc: "100",
    },
    {
      lvl: 1,
      move: "Scratch",
      type: ["Normal"],
      category: "Physical",
      power: "40",
      acc: "100",
    },
    {
      lvl: 4,
      move: "Ember",
      type: ["Fire"],
      category: "Special",
      power: "40",
      acc: "100",
    },
    {
      lvl: 8,
      move: "Quick Attack",
      type: ["Normal"],
      category: "Physical",
      power: "40",
      acc: "100",
    },
    {
      lvl: 12,
      move: "Charm",
      type: ["Fairy"],
      category: "Status",
      power: "-",
      acc: "100",
    },
    {
      lvl: 16,
      move: "Lick",
      type: ["Ghost"],
      category: "Physical",
      power: "-",
      acc: "100",
    },
    {
      lvl: 20,
      move: "Fury Swipes",
      type: ["Normal"],
      category: "Physical",
      power: "18",
      acc: "80",
    },
    {
      lvl: 24,
      move: "Psybeam",
      type: ["Psychic"],
      category: "Special",
      power: "65",
      acc: "100",
    },
    {
      lvl: 28,
      move: "Bite",
      type: ["Dark"],
      category: "Physical",
      power: "60",
      acc: "100",
    },
    {
      lvl: 32,
      move: "Sing",
      type: ["Normal"],
      category: "Status",
      power: "-",
      acc: "100",
    },
    {
      lvl: 36,
      move: "Submission",
      type: ["Fighting"],
      category: "Physical",
      power: "80",
      acc: "80",
    },
    {
      lvl: 40,
      move: "Fake Out",
      type: ["Normal"],
      category: "Physical",
      power: "40",
      acc: "100",
    },
    {
      lvl: 44,
      move: "Slack Off",
      type: ["Normal"],
      category: "Status",
      power: "-",
      acc: "-",
    },
    {
      lvl: 48,
      move: "Yawn",
      type: ["Normal"],
      category: "Status",
      power: "-",
      acc: "-",
    },
    {
      lvl: 52,
      move: "Mystical Fire",
      type: ["Fire"],
      category: "Special",
      power: "75",
      acc: "100",
    },
    {
      lvl: 56,
      move: "Discharge",
      type: ["Electric"],
      category: "Special",
      power: "80",
      acc: "100",
    },
    {
      lvl: 60,
      move: "Torch Song",
      type: ["Fire"],
      category: "Special",
      power: "80",
      acc: "100",
    },
  ];

  const [sortBy, setSortBy] = useState("lvl");
  const [sortDir, setSortDir] = useState("asc");

  const columns = [
    { key: "lvl", label: "Lv." },
    { key: "move", label: "Move" },
    { key: "type", label: "Type" },
    { key: "category", label: "Cat." },
    { key: "power", label: "Power" },
    { key: "acc", label: "Acc." },
  ];

  const getTypeLabel = (type) => (Array.isArray(type) ? type[0] : type);

  const getSortValue = (item, key) => {
    if (key === "type") return getTypeLabel(item.type);
    if (key === "power" || key === "acc") {
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
    <div className="overflow-hidden">
      <table className="w-full min-w-160 text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-3 text-left">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 font-semibold text-left"
                  onClick={() => handleSort(column.key)}
                  aria-sort={
                    sortBy === column.key
                      ? sortDir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{column.label}</span>
                  <span className="text-xs">
                    {getSortIndicator(column.key)}
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
                key={`${move.move}-${move.lvl}`}
                className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
              >
                <td className="px-4 py-3 font-semibold text-slate-700">
                  {move.lvl}
                </td>
                <td className="px-4 py-3 text-slate-700">{move.move}</td>
                <td className="px-4 py-3">
                  <TypeCard types={move.type} />
                </td>
                <td className="px-4 py-3 text-slate-700">{move.category}</td>
                <td className="px-4 py-3 text-slate-700">{move.power}</td>
                <td className="px-4 py-3 text-slate-700">{move.acc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MovesByLevelUp;
