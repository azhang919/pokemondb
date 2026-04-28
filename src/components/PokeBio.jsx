import { useState, useEffect } from "react";
import BaseBio from "./BaseBio.jsx";

const PokeBio = (props) => {
  let { info } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isModalOpen]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white px-8 py-4">
        <div className="flex flex-col">
          <div
            className="aspect-auto relative overflow-hidden group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              alt={`${info.Pokemon} Artwork`}
              className="w-full h-full object-contain px-10 py-4 transition-transform duration-500 group-hover:scale-105"
              data-alt="Stunning abstract visualization of fire and psychic energy swirling together in a vibrant nebula of orange, red, and violet hues"
              src={`src/assets/${info.Pokemon.toLowerCase()}.png`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] font-semibold">PokéDex Data</h2>
          <BaseBio info={info} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-2xl max-h-[80vh] mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-60"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img
                alt={`${info.Pokemon} Artwork - Detailed View`}
                className="w-full h-full object-contain max-h-[70vh]"
                src={`src/assets/${info.Pokemon.toLowerCase()}.png`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeBio;
