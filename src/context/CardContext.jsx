import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../Reducer/ProductReducer";
import axios from "axios";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const initialState = {
    isProductLoading: false,
    isCategoryLoading: false,
    productData: [],
    categoryData: [],
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  const getData = async () => {
    try {
      productDispatch({ type: "products_loading", payload: true });
      const { status, data } = await axios({
        method: "GET",
        url: "/api/products",
      });
      if (status === 200 || status === 201) {
        console.log(data);
        productDispatch({ type: "get_product", payload: data.products });
        productDispatch({ type: "products_loading", payload: false });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getCategory = async () => {
    try {
      productDispatch({ type: "category-loading", payload: true });
      const { data, status } = await axios({
        method: "GET",
        url: "/api/categories",
      });
      if (status === 200 || status === 201) {
        productDispatch({ type: "get_category", payload: data.categories });
        productDispatch({ type: "category-loading", payload: false });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CardContext.Provider value={{ productState, productDispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export const useProductData = () => useContext(CardContext);
