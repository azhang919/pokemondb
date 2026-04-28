import { TypeCard } from "./TypeCard.jsx";

const AbilitiesList = (data) => {
  return (
    <ol className="list-disc list-inside">
      {data.map((ability) => (
        <li key={ability}>{ability}</li>
      ))}
    </ol>
  );
};

const BaseBio = (props) => {
  let { info } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-y-4 py-4">
      {Object.entries(info).map(([name, value]) => (
        <div
          key={name}
          className="flex items-start gap-4 border-b border-zinc-200 pb-4"
        >
          <span className="w-32 font-label-caps text-label-caps text-slate-500">
            {name}
          </span>
          <span className="font-normal text-slate-900">
            {name === "Abilities" ? (
              AbilitiesList(value)
            ) : name === "Type" ? (
              <TypeCard types={value} />
            ) : (
              value
            )}
          </span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BaseBio;
