import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";
import { useProductData } from "./CardContext";
export const filterContext = createContext();
export const FilterProvider = ({ children }) => {
  const { productState } = useProductData();
  // const [filteredData, setFilteredData] = useState([]);
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
  console.log(filterState.rating);
  // console.log(filterState.filterCategory);
  // let categoryData = [];
  let filteredData = productState?.productData;
  console.log(filteredData.price);

  if (filterState?.filterCategory?.length > 0) {
    filteredData = filteredData.filter((data) =>
      filterState.filterCategory.includes(data.category)
    );
    // setFilteredData(categoryData);
    // console.log({ categoryData });
  }
  if (filterState.rating >= 0) {
    filteredData = filteredData.filter(
      (data) => data.rating <= filterState.rating
    );
  }
  if (filterState.search.length > 0) {
    filteredData = filteredData.filter((data) =>
      data.title.toLowerCase().includes(filterState.search.toLowerCase())
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
