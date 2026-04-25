import TYPE_COLORS from "../constants.js";

const TypeCard = (props) => {
    let { types } = props;
    return (
        <div className="inline-flex flex-horizontal gap-1">
            {types.map((type, index) => {
                type = type.toUpperCase();
                const bgClass = TYPE_COLORS[type] || "#000000";
                return (
                    <span key={`${type}-${index}`} className={`inline-flex rounded-sm px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white bg-[${bgClass}]`}>
                        {type}
                    </span>
                );
            })}
        </div>
    )
}

export default TypeCard