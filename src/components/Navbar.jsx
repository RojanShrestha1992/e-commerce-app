import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/useCart";

const Navbar = ({ location, openDropDown, setOpenDropDown, getLocation }) => {
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const { cartItem} = useCart()

  return (
    <div className="bg-white py-3 shadow-2xl h-16 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo  */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-extrabold text-3xl">
              <span className="text-blue-500 font-serif">B</span>azzar
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center ">
            <MapPin className="text-blue-500" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropDown} />
          </div>
          {openDropDown ? (
            <div className="w-62.5 h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change Location{" "}
                <span onClick={toggleDropDown} className="cursor-pointer">
                  <CgClose />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400"
              >
                Detect My Location
              </button>
            </div>
          ) : null}
        </div>

        {/* menu  */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all duration-200 border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all  duration-200 border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all  duration-200 border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all  duration-200 border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 -top-3 -right-3 px-2 rounded-full absolute">
              {cartItem.length}
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
