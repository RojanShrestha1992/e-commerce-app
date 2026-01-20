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
                      onClick={() => navigate(`/products/${item.id}`)}
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
