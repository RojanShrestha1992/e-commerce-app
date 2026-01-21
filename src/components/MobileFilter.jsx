import React, { useContext } from "react";
import { FaFilter } from "react-icons/fa";
import DataContext from "../context/DataContext";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  search,
  category,
  setCategory,
  setSearch,
  priceRange,
  handleCategoryChange,
  setPriceRange,
}) => {
  const { categoryOnly } = useContext(DataContext);
  return (
    <>
      <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5">
        <h1 className="font-semibold text-xl">Filters</h1>
        <FaFilter
          onClick={() => setOpenFilter(!openFilter)}
          className=" text-gray-800 h-6 w-6"
        />
      </div>

      {openFilter ? (
        <div className="bg-ray-100 p-2 md:hidden ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* category only */}
          <h1 className="mt-5 font-semibold text-xl">Category</h1>
          <div className="flex flex-col gap-2 mt-3">
            {categoryOnly?.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={item}
                    checked={category === item}
                    id=""
                    value={item}
                    onChange={handleCategoryChange}
                  />
                  <button className="cursor-pointer uppercase">{item}</button>
                </div>
              );
            })}
          </div>
          {/* price  */}
        <h1 className="mt-5 font-semibold text-xl">Price</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <input type="range" min="0" max="200" value={priceRange[1] } onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}  />
        </div>
        <button className="bg-blue-600 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={()=>{ setSearch(""); setCategory("all"); setPriceRange([0,200]); setOpenFilter(false)}}
        >
          Reset Filters
        </button>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
