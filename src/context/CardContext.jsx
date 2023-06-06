import { createContext, useEffect, useReducer } from "react";

export const CardContext = createContext();
const handleReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_RATE":
      return {
        ...state,
        data: state.allproduct.filter(
          (items) => Number(items.rating) <= action.payload
        ),
      };
    case "FILTER_PRICE":
      return {
        ...state,
        data:
          action.payload === "high"
            ? state.allproduct.sort((a, b) => b.price - a.price)
            : action.payload === "low"
            ? state.allproduct.sort((a, b) => a.price - b.price)
            : state,
      };
    case "FILTER_CATEGORY":
      return {
        ...state,
        data: action.payload.checked
          ? state.allproduct.filter(
              (items) => items.category === action.payload.value
            )
          : state.allproduct,
      };
    case "ADD_CART":
      return {};

    case "INITIAL_DATA":
      return {
        ...state,
        data: action.payload.products,
        allproduct: action.payload.products,
      };

    default:
      return state;
  }
};
export function CardProvider({ children }) {
  const [state, dispatch] = useReducer(handleReducer, {
    data: [],
    allproduct: [],
    cart: [],
  });

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      dispatch({ type: "INITIAL_DATA", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
}
