export const filterReducer = (state, action) => {
  console.log(state.filterCategory);
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
      return state.filterCategory.includes(action.payload)
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
    case "clear_filters":
      return {
        filterCategory: [],

        rating: 5,
        sort: "featured",
        search: "",
      };
    default:
      return state;
  }
};
