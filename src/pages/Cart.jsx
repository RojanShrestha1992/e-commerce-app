import React, { useEffect, useState } from "react";
import { useCart } from "../context/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebook, LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png"

const Cart = ({location,getLocation}) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const navigate = useNavigate()
  const {user} = useUser()
  // console.log(user)
  const [fullName, setfullName] = useState("")
  
  

  useEffect(()=>{
    if(user?.fullName ){
      setfullName(user.fullName)
    }

  }, [])


  const totalPrice = cartItem.reduce((total, item) => total + item.quantity*item.price, 0);
  return (
    <div className=" max-w-6xl mx-auto mb-5 px-4 md:px-0">
      {cartItem.length > 0 ? (
        <div className="">
          <h1 className="font-bold text-2xl mt-4 md:mt-0">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-20 h-20 cursor-pointer rounded-md"
                         onClick={() => navigate(`/products/${item.id}`)}
                      />
                      <div>
                        <h1 className="md:w-75 w-30 line-clamp-2">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                      <button className="cursor-pointer " onClick={()=>updateQuantity(cartItem,item.id, "decrease")} >-</button>
                      <span>{item.quantity}</span>
                      <button className="cursor-pointer" onClick={()=>updateQuantity(cartItem, item.id, "increase")}>+</button>
                    </div>
                    <span className="hover:bg-white/60 transition-all rounded-full p-3 shadow-2xl" onClick={()=>deleteItem(item.id)}>
                      <FaRegTrashAlt className="w-6 h-6 text-blue-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info
                </h1>
                <div className="space-y-1 flex flex-col">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    className="p-2 rounded-md"
                    placeholder="Enter Your Name"
                    value={fullName}
                    onChange={(e)=>setfullName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    className="p-2 rounded-md"
                    placeholder="Enter Your Address"
                    value={location?.county}
                    
                  />
                </div>
                <div className="flex w-full  gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="p-2 rounded-md w-full"
                      value={location?.state}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Postal Code</label>
                    <input
                      type="text"
                      placeholder="Enter your Post Code"
                      className="p-2 rounded-md w-full"
                      value={location?.postcode}
                    />
                  </div>
                </div>
                <div className="flex w-full  gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      placeholder="Enter your Country"
                      className="p-2 rounded-md w-full"
                      value={location?.country}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter your Phone Number"
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>
                <button className="bg-blue-700 hover:bg-blue-800  font-medium  text-white py-1 px-3 rounded-md mt-3 cursor-pointer">
                  Submit
                </button>
                <div className="flex items-center justify-center w-full text-gray-700 ">
                  ---------OR----------
                </div>
                <div className="flex justify-center">
                  <button onClick={getLocation} className="bg-blue-700 hover:bg-blue-800  font-medium  text-white px-3 py-2 rounded-md">
                    Detect Location
                  </button>
                </div>
              </div>

              <div className="h-max bg-white border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  Bill Details
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center text-gray-700">
                    <span>
                      <LuNotebookText className="w-6 h-6" />
                    </span>{" "}
                    Items total
                  </h1>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center text-gray-700">
                    <span>
                      <MdDeliveryDining className="w-6 h-6" />
                    </span>{" "}
                    Delivery Charge{" "}
                  </h1>
                  <p className="text-red-500 font-semibold"><span className="text-gray-600 line-through">$25</span> Free</p>
                </div>
                 <div className="flex justify-between items-center">
                  <h1 className="flex items-center text-gray-700">
                    <span>
                      <GiShoppingBag className="w-6 h-6" />
                    </span>{" "}
        Handling{" "}
                  </h1>
                  <p className="text-red-500 font-semibold"><span className="text-black ">$5</span> </p>
                </div>
                <hr className="text-gray-200 mt-2"/>
                <div className="flex justify-between items-center ">
                  <h1 className="font-semibold text-lg">Grand Total</h1>
                  <p className="font-semibold text-lg">${(totalPrice + 5).toFixed(2)}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-700 mb-3 mt-7 ">Apply Promo Code</h1>
                  <div className="flex gap-3"> 
                    <input type="text" placeholder="Enter Promo Code" className="p-2 rounded-md w-full" />
                    <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">Apply</button>
                    
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium  px-3 py-2 rounded-md cursor-pointer w-full mt-4">Proceed to Checkout</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center h-150"> 
        <h1 className="text-blue-700/80 font-bold text-5xl text-muted">Cart Is Empty</h1>
        <img src={emptyCart} alt="" className="w-70" />
        <button className="bg-blue-700 hover:bg-blue-800  font-medium  text-white py-2 rounded-md  px-3 cursor-pointer" onClick={()=>navigate('/products')}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
