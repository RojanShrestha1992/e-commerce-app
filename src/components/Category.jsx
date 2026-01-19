import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { categoryOnly } = useContext(DataContext);
  const navigate = useNavigate()
  // console.log(categoryOnly);

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnly.map((item, index) => {
          return (
            <div key={index}>
              <button onClick={()=>navigate(`/category/${item}`)} className="uppercase bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
