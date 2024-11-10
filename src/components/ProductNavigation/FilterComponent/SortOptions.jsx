/**
 * This code was generated by Builder.io.
 */
import React from 'react';

function SortOptions() {
  return (
    <div className="flex flex-1 gap-4 text-xl max-md:max-w-full">
      <label htmlFor="sortBy" className="my-auto">Sort by</label>
      <select id="sortBy" className="px-8 py-3.5 whitespace-nowrap bg-white text-neutral-400 max-md:px-5" aria-label="Sort results">
        <option>Default</option>
      </select>
    </div>
  );
}

export default SortOptions;