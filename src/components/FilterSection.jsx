import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const FilterSection = ({search,category,setCategory, setSearch, priceRange,handleCategoryChange, setPriceRange}) => {
  const { categoryOnly } = useContext(DataContext);


  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max hidden md:block">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      {/* category only */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnly?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <label  className="cursor-pointer uppercase items-center gap-2  flex">
              <input type="checkbox" name={item} checked={category === item} id="" value={item} onChange={handleCategoryChange} />
                {item}
              </label>
            </div>
          );
        })}


        {/* price  */}
        <h1 className="mt-5 font-semibold text-xl">Price</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <input type="range" min="0" max="200" value={priceRange[1] } onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}  />
        </div>
        <button className="bg-blue-700 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={()=>{ setSearch(""); setCategory("all"); setPriceRange([0,200])}}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
