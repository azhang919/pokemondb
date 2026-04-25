const Breadcrumbs = (props) => {
  let { baseNumber } = props;

  return (
    <div className="text-center mb-10">
      <div className="flex items-center justify-between border-y border-zinc-200 py-4 mt-6">
        <div className="flex items-center gap-2 group cursor-pointer transition-transform active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span className="font-data-tabular text-data-tabular text-zinc-500">
            #{baseNumber - 1} Julikit
          </span>
        </div>
        {/* TODO: fix text font and size */}
        <div className="font-data-tabular text-data-tabular font-extrabold">
          Jennova
        </div>
        <div className="flex items-center gap-2 group cursor-pointer transition-transform active:scale-95 text-right">
          <span className="font-data-tabular text-data-tabular text-zinc-500">
            #{baseNumber + 1} Juicetin
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
