const TYPE_CLASSES = {
    "NORMAL": "bg-[#aaaa99]",
    "FIRE": "bg-[#ff4422]",
    "WATER": "bg-[#3399ff]",
    "ELECTRIC": "bg-[#ffcc33]",
    "GRASS": "bg-[#77cc55]",
    "ICE": "bg-[#66ccff]",
    "FIGHTING": "bg-[#bb5544]",
    "POISON": "bg-[#aa5599]",
    "GROUND": "bg-[#ddbb55]",
    "FLYING": "bg-[#8899ff]",
    "PSYCHIC": "bg-[#ff5599]",
    "BUG": "bg-[#aabb22]",
    "ROCK": "bg-[#bbaa66]",
    "GHOST": "bg-[#6666bb]",
    "DRAGON": "bg-[#7766ee]",
    "DARK": "bg-[#775544]",
    "STEEL": "bg-[#aaaabb]",
    "FAIRY": "bg-[#ee99ee]"
}

const TypeCard = (props) => {
    let { types } = props;
    return (
        <div className="inline-flex flex-horizontal gap-1">
            {types.map((type, index) => {
                type = type.toUpperCase();
                const bgClass = TYPE_CLASSES[type] || "bg-gray";
                return (
                    <span key={`${type}-${index}`} className={`inline-flex rounded-sm px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white ${bgClass}`}>
                        {type}
                    </span>
                );
            })}
        </div>
    )
}

export default TypeCard