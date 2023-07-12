export const productReducer = (state, action) => {
  switch (action.type) {
    case "products_loading":
      return { ...state, isProductLoading: action.payload };
    case "category-loading":
      return { ...state, isCategoryLoading: action.payload };
    case "get_product":
      return { ...state, productData: action.payload };
    case "get_category":
      return { ...state, categoryData: action.payload };

    default:
      break;
  }
};
