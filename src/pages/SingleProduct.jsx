import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/useCart";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SingleProduct = () => {
 
  const [singleProduct, setSingleProduct] = useState("");
  const params = useParams();
  const { addToCart } = useCart();
  // console.log(params)
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${params.id}`,
      );
      // console.log(res)
      const product = res.data;
      // console.log(product);
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* product img  */}
            <div className=" items-center flex w-full h-110 justify-center">
              {/* img swiper  */}
              <Swiper
                
        pagination={{ clickable: true }}

                modules={[Pagination]}
                className="mySwiper w-full h-full"

              >
                <SwiperSlide>
                  <img
                    src={singleProduct.images[0]}
                    alt={singleProduct.title}
                    className="rounded-xl w-auto max-h-full mx-auto aspect-square object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={singleProduct.images[1]}
                    alt={singleProduct.title}
                    className="rounded-xl w-auto max-h-full mx-auto aspect-square object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={singleProduct.images[2]}
                    alt={singleProduct.title}
                    className="rounded-xl w-auto max-h-full mx-auto aspect-square object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* pro details  */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-3xl text-xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">{singleProduct.category.name}</div>{" "}
              <p className="text-3xl text-red-500 font-bold">
                ${singleProduct.price}
              </p>
              <p className="text-gray-600">{singleProduct.description}</p>
              {/* quantity select */}
              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  placeholder="1"
                  className="w-20 border-gray-300 border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="px-6 cursor-pointer flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md items-center"
                >
                  <IoCartOutline className="w-6 h-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SingleProduct;
