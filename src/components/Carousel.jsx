import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
// import Swiper from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  // console.log("carosel", data);

  const navigate = useNavigate();

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={true}
        speed={1000}
        className="mySwiper h-full  md:h-[calc(100vh-64px)] w-full"
      >
        {data?.slice(12, 20)?.map((item, index) => {
          return (
            <SwiperSlide className="items-center" key={index}>
              {/* <div className="h-full w-full  flex items-center bg-linear-to-r from-[#0f0c29]  via-[#302b63] to-[#24243e] -z-10 ">
                <div className="flex flex-col-reverse   md:flex-row  gap-10 justify-center  items-center px-4 md:px-10 ">
               
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-red-500 font-semibold font-sans text-sm mt-4 md:mt-0 hidden md:block">
                      Best in the World
                    </h3>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold uppercase line-clamp-2 md:w-125 text-white">
                      {item.title}
                    </h1>
                    <p className=" max-w-xl sm:text-base md:text-lg line-clamp-3 text-gray-400  pr-7">
                      {item.description}
                    </p>
                    <button
                      onClick={() => navigate(`/products/${item.id}`)}
                      className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer -mt-2 md:mt-2 mb-20"
                    >
                      Shop Now
                    </button>
                  </div>
           
                  <div>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 p-3 mt-10 hover:scale-105 transition-all drop-shadow-xl  md:drop-shadow-2xl drop-shadow-red-400 "
                    />
                  </div>
       
                </div>
              </div> */}

              {/* <div
                key={index}
                className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
              >
                <div className="flex flex-col md:flex-row gap-10 justify-center h-150 my-20 md:my-0 items-center px-4">
                  <div className="md:space-y-6 space-y-3">
                    <h3 className="text-red-500 font-semibold font-sans text-sm">
                      Powering Your World with the Best in Electronics
                    </h3>
                    <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-125 text-white">
                      {item.title}
                    </h1>
                    <p className="md:w-125 line-clamp-3 text-gray-400 pr-7">
                      {item.description}
                    </p>
                    <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                      Shop Now
                    </button>
                  </div>
                  <div>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="rounded-full w-137.5 hover:scale-105 transition-all shadow-2xl shadow-red-400"
                    />
                  </div>
                </div>
              </div> */}

              <div
                key={index}
                className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
              >
                <div
                  className="
      max-w-7xl mx-auto
      min-h-[80vh] md:min-h-[calc(100vh-64px)]
      flex flex-col-reverse md:flex-row
      items-center justify-center
      gap-8 md:gap-14
      px-4 md:px-8
    "
                >
                  {/* TEXT CONTENT */}
                  <div className="space-y-4 md:space-y-6 text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-sm tracking-wide">
                      Powering Your World with the Best
                    </h3>

                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold uppercase text-white sm:line-clamp-2  lg:min-h-0 md:min-h-0 min-h-[2.5em] "
                    >
                      {item.title}
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl line-clamp-4">
                      {item.description}
                    </p>

                    <button
                      className="
          inline-block
          bg-linear-to-r from-red-500 to-purple-500
          text-white
          px-5 py-3
          rounded-md
          text-sm md:text-base
          hover:opacity-90 transition
          mb-10 md:mt-0
        "
                    >
                      Shop Now
                    </button>
                  </div>

                  {/* IMAGE */}
                  <div className="flex justify-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="
        mt-4 md:mt-0
          w-48 h-48
          sm:w-60 sm:h-60
          md:w-80 md:h-80
          lg:w-96 lg:h-96
          rounded-full
          object-cover
          shadow-2xl shadow-red-500/40
          hover:scale-105 transition-transform duration-300
        "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Category />
    </>
  );
};

export default Carousel;
