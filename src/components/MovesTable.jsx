import { useMemo, useState } from "react";
import TypeCard from "./TypeCard";

const CategoryIcon = (category) => {
  category = category.toLowerCase();
  return (
    <img className="max-h-10 p-0 m-0" src={`/src/assets/${category}-icon.png`} alt={category} />
  )
}

const MovesTable = (props) => {
  const { tableName } = props;

  const levelUpMoves = [
    {
      primary: "01",
      move: "Growl",
      type: ["Normal"],
      category: "Status",
      pwr: "-",
      acc: "100",
    },
    {
      primary: "01",
      move: "Scratch",
      type: ["Normal"],
      category: "Physical",
      pwr: "40",
      acc: "100",
    },
    {
      primary: "04",
      move: "Ember",
      type: ["Fire"],
      category: "Special",
      pwr: "40",
      acc: "100",
    },
    {
      primary: "08",
      move: "Quick Attack",
      type: ["Normal"],
      category: "Physical",
      pwr: "40",
      acc: "100",
    },
    {
      primary: "12",
      move: "Charm",
      type: ["Fairy"],
      category: "Status",
      pwr: "-",
      acc: "100",
    },
    {
      primary: "16",
      move: "Lick",
      type: ["Ghost"],
      category: "Physical",
      pwr: "30",
      acc: "100",
    },
    {
      primary: "20",
      move: "Fury Swipes",
      type: ["Normal"],
      category: "Physical",
      pwr: "18",
      acc: "80",
    },
    {
      primary: "24",
      move: "Psybeam",
      type: ["Psychic"],
      category: "Special",
      pwr: "65",
      acc: "100",
    },
    {
      primary: "28",
      move: "Bite",
      type: ["Dark"],
      category: "Physical",
      pwr: "60",
      acc: "100",
    },
    {
      primary: "32",
      move: "Sing",
      type: ["Normal"],
      category: "Status",
      pwr: "-",
      acc: "100",
    },
    {
      primary: "36",
      move: "Submission",
      type: ["Fighting"],
      category: "Physical",
      pwr: "80",
      acc: "80",
    },
    {
      primary: "40",
      move: "Fake Out",
      type: ["Normal"],
      category: "Physical",
      pwr: "40",
      acc: "100",
    },
    {
      primary: "44",
      move: "Slack Off",
      type: ["Normal"],
      category: "Status",
      pwr: "-",
      acc: "-",
    },
    {
      primary: "48",
      move: "Yawn",
      type: ["Normal"],
      category: "Status",
      pwr: "-",
      acc: "-",
    },
    {
      primary: "52",
      move: "Mystical Fire",
      type: ["Fire"],
      category: "Special",
      pwr: "75",
      acc: "100",
    },
    {
      primary: "56",
      move: "Discharge",
      type: ["Electric"],
      category: "Special",
      pwr: "80",
      acc: "100",
    },
    {
      primary: "60",
      move: "Torch Song",
      type: ["Fire"],
      category: "Special",
      pwr: "80",
      acc: "100",
    },
  ];

  const tmMoves = [
    { primary: "002", move: "Charm", type: ["Fairy"], category: "Status", pwr: "-", acc: "100" },
    { primary: "007", move: "Protect", type: ["Normal"], category: "Status", pwr: "-", acc: "-" },
    { primary: "016", move: "Psybeam", type: ["Psychic"], category: "Special", pwr: "65", acc: "100" },
    { primary: "019", move: "Disarming Voice", type: ["Fairy"], category: "Special", pwr: "40", acc: "100" },
    { primary: "024", move: "Fire Spin", type: ["Fire"], category: "Special", pwr: "35", acc: "85" },
    { primary: "025", move: "Facade", type: ["Normal"], category: "Physical", pwr: "70", acc: "100" },
    { primary: "041", move: "Stored pwr", type: ["Psychic"], category: "Special", pwr: "20", acc: "100" },
    { primary: "047", move: "Endure", type: ["Normal"], category: "Status", pwr: "-", acc: "-" },
    { primary: "049", move: "Sunny Day", type: ["Fire"], category: "Status", pwr: "-", acc: "-" },
    { primary: "050", move: "Rain Dance", type: ["Water"], category: "Status", pwr: "-", acc: "-" },
    { primary: "054", move: "Psyshock", type: ["Psychic"], category: "Special", pwr: "80", acc: "100" },
    { primary: "059", move: "Zen Headbutt", type: ["Psychic"], category: "Physical", pwr: "80", acc: "90" },
    { primary: "070", move: "Sleep Talk", type: ["Normal"], category: "Status", pwr: "-", acc: "-" },
    { primary: "075", move: "Light Screen", type: ["Psychic"], category: "Status", pwr: "-", acc: "-" },
    { primary: "079", move: "Dazzling Gleam", type: ["Fairy"], category: "Special", pwr: "80", acc: "100" },
    { primary: "080", move: "Metronome", type: ["Normal"], category: "Status", pwr: "-", acc: "-" },
    { primary: "085", move: "Rest", type: ["Psychic"], category: "Status", pwr: "-", acc: "-" },
    { primary: "103", move: "Substitute", type: ["Normal"], category: "Status", pwr: "-", acc: "-" },
    { primary: "109", move: "Trick", type: ["Psychic"], category: "Status", pwr: "-", acc: "100" },
    { primary: "117", move: "Hyper Voice", type: ["Normal"], category: "Special", pwr: "90", acc: "100" },
    { primary: "120", move: "Psychic", type: ["Psychic"], category: "Special", pwr: "90", acc: "100" },
    { primary: "122", move: "Encore", type: ["Normal"], category: "Status", pwr: "-", acc: "100" },
    { primary: "128", move: "Amnesia", type: ["Psychic"], category: "Status", pwr: "-", acc: "-" }, 
    { primary: "129", move: "Calm Mind", type: ["Psychic"], category: "Status", pwr: "-", acc: "-" },
    { primary: "130", move: "Helping Hand", type: ["Normal"], category: "Status", pwr: "-", acc: "-" },
    { primary: "138", move: "Psychic Terrain", type: ["Psychic"], category: "Status", pwr: "-", acc: "-" },
    { primary: "140", move: "Nasty Plot", type: ["Dark"], category: "Status", pwr: "-", acc: "-" },
    { primary: "157", move: "Overheat", type: ["Fire"], category: "Special", pwr: "130", acc: "90" },
    { primary: "161", move: "Trick Room", type: ["Psychic"], category: "Status", pwr: "-", acc: "-" },
    { primary: "163", move: "Hyper Beam", type: ["Normal"], category: "Special", pwr: "150", acc: "90" },
    { primary: "171", move: "Tera Blast", type: ["Normal"], category: "Special", pwr: "80", acc: "100" },
    { primary: "195", move: "Burning Jealousy", type: ["Fire"], category: "Special", pwr: "70", acc: "100" },
    { primary: "207", move: "Temper Flare", type: ["Fire"], category: "Physical", pwr: "75", acc: "100" },
    { primary: "217", move: "Future Sight", type: ["Psychic"], category: "Special", pwr: "120", acc: "100" },
    { primary: "227", move: "Alluring Voice", type: ["Fairy"], category: "Special", pwr: "80", acc: "100" },
  ]

  const evolutionMoves = [
    { primary: "Jennova", move: "Heartflare Pulse", type: ["Psychic"], category: "Special", pwr: "90", acc: "100" }
  ]

  const moves = tableName === "Level Up" ? levelUpMoves : tableName === "Evolution" ? evolutionMoves : tmMoves;
  const primaryColLabel = tableName === "Level Up" ? "Lv." : tableName === "Evolution" ? "Evo" : "TM";

  const columns = [
    { key: "primary", label: primaryColLabel },
    { key: "move", label: "Move" },
    { key: "type", label: "Type" },
    { key: "category", label: "Cat." },
    { key: "pwr", label: "Pwr" },
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
        <p className="font-semibold text-[32px]">Moves Learned by {tableName}</p>
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
                  <span>{column.label} {getSortIndicator(column.key)}
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
                <td className="px-2 py-1 text-slate-700">{CategoryIcon(move.category)}</td>
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
