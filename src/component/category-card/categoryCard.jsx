import { useNavigate } from "react-router-dom";
import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";

export const CategoryCard = () => {
  const { productState } = useProductData();
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  return (
    <div>
      {productState?.categoryData?.length !== 0 &&
        productState?.categoryData?.map((category) => (
          <div
            onClick={() => {
              console.log(category);
              filterDispatch({ type: "clear_filter" });
              filterDispatch({
                type: "FILTER_CATEGORY",
                payload: category.categoryName,
              });
              navigate("/products");
            }}
          >
            <img src={category.image} alt={category.categoryName} />
            <p>{category.categoryName}</p>
          </div>
        ))}
    </div>
  );
};
