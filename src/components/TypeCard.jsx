import { TYPE_COLORS } from "../constants.js";

export const TypeCard = (props) => {
  let { types } = props;
  return (
    <div className="inline-flex flex-horizontal gap-1">
      {types.map((type, index) => {
        type = type.toUpperCase();
        const bgClass = TYPE_COLORS[type] || "#000000";
        return (
          <span
            key={`${type}-${index}`}
            className={`inline-flex rounded-sm px-3 py-1 text-sm font-semibold uppercase text-white bg-[${bgClass}] shadow-sm shadow-black/20 ring-1 ring-black/10`}
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
          >
            {type}
          </span>
        );
      })}
    </div>
  );
};