import axios from "axios";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryProduct from "../components/CategoryProduct";
import Pagination from "../components/Pagination";
import Loading from "../assets/loading4.webm"


const CategoryPage = () => {
  const [page, setPage] = useState(1);
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);
  const params = useParams();
  // console.log(params)
  const category = params.categoryid;
  const filterData = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${category}/products`,
      );
      // console.log("categorydata", res)
      const catData = res.data;
      console.log("catdata", catData);
      setCategoryData(catData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    filterData();
  }, []);
  const dynamicPage = Math.ceil(categoryData?.length / 8);

  return (
    <div>
      {categoryData?.length > 0 ? (
        <div className="max-w-6xl mx-auto  mt-5 px-4 mb-10">
          <button
            onClick={() => navigate(`/`)}
            className="bg-gray-800 flex items-center gap-1 mb-10 cursor-pointer text-white px-3 py-1 rounded-md"
          >
            <ChevronLeft />
            Back
          </button>
          {categoryData?.slice(page * 8 -8, page*8).map((product, index) => {
            return <CategoryProduct key={index} product={product} />;
          })}
          <Pagination
            pageHandler={pageHandler}
            page={page}
            dynamicPage={dynamicPage}
          />
        </div>
      ) : (
             <div className='flex items-center justify-center h-screen'>
                               <video muted autoPlay loop>
                                   <source src={Loading} type='video/webm' />
                               </video>
                           </div>
      )}
    </div>
  );
};

export default CategoryPage;
