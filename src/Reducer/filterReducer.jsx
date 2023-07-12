export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_RATE":
      return {
        ...state,
        rating: action.payload,
      };
    case "FILTER_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER_CATEGORY":
      return state.filterCategory.include(action.payload)
        ? {
            ...state,
            filterCategory: [...state.filterCategory].filter(
              (items) => items !== action.payload
            ),
          }
        : {
            ...state,
            filterCategory: [...state.filterCategory, action.payload],
          };

    case "ADD_CART":
      return {};
    default:
      return state;
  }
};
