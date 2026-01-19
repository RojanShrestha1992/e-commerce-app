import axios from "axios";
import {  useState } from "react";
import DataContext from "./DataContext";
export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  // fetch all products
  const fetchAllProducts = async () => {
    try {
      // const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");

      // console.log(res);
      const productsData = res.data;
      // console.log(productsData)
      setData(productsData)
    } catch (error) {
      console.log(error);
    }
  };

  //  const getUniqueCategory = (data, property) => {
  //     let newVal = data?.map((curtLen) => {
  //       return curtLen[property];
  //     });
  //     newVal = ["all",...new Set(newVal)];
  //     return newVal;
  //   };
  //   const categoryOnly = getUniqueCategory(data, "category");
  const getUniqueCategory = (data) => {
  const categories = data?.map(item => item.category.name);
  return ["all", ...new Set(categories)];
};

const categoryOnly = getUniqueCategory(data);


    const brandOnly = getUniqueCategory(data, "brand")
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnly, brandOnly }}>
      {children}
    </DataContext.Provider>
  );
};

