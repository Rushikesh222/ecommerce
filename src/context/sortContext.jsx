import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";
import { useProductData } from "./CardContext";
export const filterContext = createContext();
export const FilterProvider = ({ children }) => {
  const { productState } = useProductData();
  const initialFilter = {
    filterCategory: [],
    rating: 5,
    search: "",
    sort: "feature",
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );
  console.log(productState);

  let filteredData = productState.productData;
  console.log(filteredData.products);
  if (filterState.filterCategory.length > 0) {
    filteredData = filteredData.products.filter((data) =>
      filterState.filterCategory.include(data.category)
    );
  }
  if (filterState.rating > 0) {
    filteredData = filteredData.filter(
      (data) => data.rating.value <= filterState.rating
    );
  }
  if (filterState.search.length > 0) {
    filteredData = filteredData.filter((data) =>
      data.title.toLowerCase().include(filterState.search.toLowerCase())
    );
  }
  if (filterState.sort === "high") {
    filteredData = [...filteredData].sort((a, b) => b.price - a.price);
  } else if (filterState.sort === "low") {
    filteredData = [...filteredData].sort((a, b) => a.price - b.price);
  } else if (filterState.sort === "feature") {
    filteredData = [...filteredData];
  }

  return (
    <filterContext.Provider
      value={{ filterState, filterDispatch, filteredData }}
    >
      {children}
    </filterContext.Provider>
  );
};
export const useFilter = () => useContext(filterContext);
