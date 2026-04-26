const Breadcrumbs = (props) => {
  const directory = {
    1066: "Juicetin",
    1067: "Julikit",
    1068: "Jennova",
  };

  let { baseNumber } = props;
  const prevNumber = baseNumber - 1;
  const nextNumber = baseNumber + 1;

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
            className="size-6 text-blue-600 group-hover:text-blue-800 transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span className="breadcrumb-link">
            #{prevNumber} {directory[prevNumber]}
          </span>
        </div>
        {nextNumber in directory ? (
          <div className="flex items-center gap-2 group cursor-pointer transition-transform active:scale-95 text-right">
            <span className="breadcrumb-link">
              #{nextNumber} {directory[nextNumber]}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-blue-600 group-hover:text-blue-800 transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
