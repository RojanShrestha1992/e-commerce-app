import axios from "axios";
import { useState } from "react";
import DataContext from "./DataContext";
export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [category, setCategory] = useState()

  // fetch all products
  const fetchAllProducts = async () => {
    try {
      // const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      // console.log(res);
      const productsData = res.data;
      // console.log(productsData)
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async () => {
    try {
      const resu = await axios.get("https://api.escuelajs.co/api/v1/categories");
      // console.log("cat", resu);
      const categoryData = resu.data
      console.log(categoryData) 
      setCategory(categoryData)
    } catch (error) {
      console.log(error);
    }
  };

 
  const getUniqueCategory = (data) => {
    const categories = data?.map((item) => item.category.name);
    return ["all", ...new Set(categories)];
  };

  const categoryOnly = getUniqueCategory(data);


  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts,categoryOnly,  getAllCategory, category, setCategory }}
    >
      {children}
    </DataContext.Provider>
  );
};
