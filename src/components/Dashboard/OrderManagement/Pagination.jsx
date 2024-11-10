/* eslint-disable */
import React from "react";

function Pagination() {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center px-6 py-4 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto text-base font-medium tracking-wide text-neutral-400">
        <div className="self-stretch my-auto">Showing</div>
        <div className="flex overflow-hidden items-start self-stretch my-auto whitespace-nowrap rounded-md border border-violet-100 border-solid text-zinc-800">
          <div className="flex gap-1.5 justify-center items-center px-5 py-2.5">
            <div className="self-stretch my-auto">10</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3114a353b5354f2d055edb3ba888c4b0bc4f4b4073db27174a6894f4fac8cd25?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch my-auto">of 50</div>
      </div>
      <nav
        className="flex gap-0.5 self-stretch my-auto"
        aria-label="Pagination">
        <button
          className="flex justify-center items-center px-1.5 w-7 h-7 bg-gray-100 rounded"
          aria-label="Previous page">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6266418df01d3663877e51fee7aed0786ae16bad8d6ecb148d60acf6d621d5?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </button>
        <button
          className="self-stretch px-2 w-7 h-7 text-sm leading-loose text-white whitespace-nowrap bg-blue-600 rounded shadow-sm"
          aria-current="page">
          1
        </button>
        <button className="self-stretch px-2 w-7 h-7 text-sm leading-loose whitespace-nowrap bg-gray-100 rounded text-neutral-400">
          2
        </button>
        <button className="self-stretch px-2 w-7 h-7 text-sm leading-loose whitespace-nowrap bg-gray-100 rounded text-neutral-400">
          3
        </button>
        <button className="self-stretch px-2 w-7 h-7 text-sm leading-loose whitespace-nowrap bg-gray-100 rounded text-neutral-400">
          4
        </button>
        <button className="self-stretch px-2 w-7 h-7 text-sm leading-loose whitespace-nowrap bg-gray-100 rounded text-neutral-400">
          5
        </button>
        <button
          className="flex justify-center items-center px-1.5 w-7 h-7 bg-gray-100 rounded"
          aria-label="Next page">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b795829d85618c51c7e103a6c6f8c27ac07ddc8478a610da4ef217cd6cac5c10?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </button>
      </nav>
    </section>
  );
}

export default Pagination;
