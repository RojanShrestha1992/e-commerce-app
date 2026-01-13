import axios from "axios";
import {  useState } from "react";
import DataContext from "./DataContext";
export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  // fetch all products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
    //   console.log(res);
      const productsData = res.data;
      setData(productsData)
    } catch (error) {
      console.log(error);
    }
  };

   const getUniqueCategory = (data, property) => {
      let newVal = data?.map((curtLen) => {
        return curtLen[property];
      });
      newVal = [...new Set(newVal)];
      return newVal;
    };
    const categoryOnly = getUniqueCategory(data, "category");

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnly }}>
      {children}
    </DataContext.Provider>
  );
};

