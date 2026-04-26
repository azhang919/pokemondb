const Breadcrumbs = (props) => {
  let { baseNumber } = props;

  return (
    <div className="text-center px-8 py-1 bg-white">
      <div className="flex items-center justify-between py-4 mt-6">
        <div className="flex items-center gap-2 group cursor-pointer transition-transform active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-zinc-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
              className="text-zinc-500"
            />
          </svg>
          <span className="font-data-tabular text-data-tabular text-zinc-500">
            #{baseNumber - 1} Julikit
          </span>
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
