import axios from "axios";
import { useState } from "react";
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
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
