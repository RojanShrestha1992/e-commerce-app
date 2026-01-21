import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { getAllCategory, category } = useContext(DataContext);
  useEffect(() => {
    getAllCategory();
  }, []);
  const navigate = useNavigate();
  // console.log(categoryOnly);
  // console.log("category", category);

  return (
 

    <>
      <div className="max-w-6xl mx-auto  p-4  ">
        <h1 className=" py-4 font-bold text-3xl text-gray-900">Shop By Category</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {category?.slice(0,5).map((item, index) => {
            return (
              <div onClick={()=>navigate(`/category/${item.id}`)}
                className="relative w-full overflow-hidden group  shadow rounded-lg cursor-pointer border-gray-500 "
                key={index}
              >
                <img
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
                  src={item.image}
                  alt={item.name}
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute flex items-center inset-0 justify-center">
                  <p className="text-2xl md:text-3xl  text-gray-100 font-semibold">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
