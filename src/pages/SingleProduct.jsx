import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const params = useParams();
  const discount = (singleProduct.price - singleProduct.discountedPrice)/singleProduct.price * 100
  // console.log(params)
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapiserver.reactbd.org/api/products/${params.id}`
      );
      // console.log(res)
      const product = res.data;
      console.log(product);
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
          <div className="max-w-6xl mx-auto md:px-6 grid grid-cols-2 gap-10">
            {/* product img  */}
            <div className="w-full ">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-wxl w-full object-cover"
              />
            </div>
            {/* pro details  */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">
                {singleProduct.brand}/{singleProduct.category}/
                {singleProduct.type}
              </div>
           
                {" "}
                <p className="text-xl text-red-500 font-bold">
                  ${singleProduct.discountedPrice   }  
                <span className="text-sm m-2 text-gray-700 line-through">${singleProduct.price}</span>
                <span className="bg-red-500 text-white px-4 py-2 rounded-full">{discount}% discount</span>
                </p>
                <p className="text-gray-600">{singleProduct.description}</p>
                {/* quantity select */}
                <div className="flex items-center gap-4">
                    <label htmlFor="" className="text-sm font-medium text-gray-700">
                        Quantity
                    </label>
                    <input type="number" min={1} value={1} className="w-20 border-gray-300 border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div className="flex gap-4 mt-4">

                <button className="px-6 cursor-pointer flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md items-center"><IoCartOutline className="w-6 h-6"/> Add to Cart</button>
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
