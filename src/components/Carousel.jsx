import React, { useContext, useEffect, } from "react";
import DataContext from "../context/DataContext";
// import Swiper from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Category from "./Category";
import { useNavigate } from "react-router-dom";


const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  // console.log("carosel", data);

const navigate = useNavigate()


  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter:true,
        }}
        loop={true}
        navigation={true}
        speed={1000}
        className="mySwiper h-[calc(100vh-64px)] w-full"
      >
        {data?.slice(12,20)?.map((item, index) => {
        
       
       
            return(
            <SwiperSlide className="h-full" key={index}>
              <div className="h-full  items-center bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
                <div className="flex sm:flex-col lg:flex-row  gap-10 justify-center  items-center px-4  ">
                    {/* content  */}
                  <div className="space-y-6">
                    <h3 className="text-red-500 font-semibold font-sans text-sm">
                      Best in the World
                    </h3>
                    <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">
                      {item.title}
                    </h1>
                    <p className="md:w-125 line-clamp-3 text-gray-400  pr-7">
                      {item.description}
                    </p>
                    <button onClick={()=>navigate(`/products/${item.id}`)} className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2 ">
                      Shop Now
                    </button>
                  </div>
                  {/* content end  */}
                  {/* img   */}
                  <div>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="rounded-full w-110 h-110 p-3 mt-10 hover:scale-105 transition-all drop-shadow-2xl drop-shadow-red-400 "
                    />
                  </div>
                  {/* img end  */}
                </div>
              </div>
            </SwiperSlide>
           ) })
}
      
      </Swiper>

      <Category/>
    </>
  );
};

export default Carousel;
