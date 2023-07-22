import { useNavigate } from "react-router-dom";
import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";
import "./CategoryCard.css";

export const CategoryCard = () => {
  const { productState } = useProductData();
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  return (
    <div className="category-card">
      {productState?.categoryData?.length !== 0 &&
        productState?.categoryData?.map((category) => (
          <div
            className="category-frames"
            onClick={() => {
              filterDispatch({ type: "clear_filter" });
              filterDispatch({
                type: "FILTER_CATEGORY",
                payload: category.categoryName,
              });
              navigate("/products");
            }}
          >
            <img
              className="category-image"
              src={category.image}
              alt={category.categoryName}
            />
            <p>{category.categoryName}</p>
          </div>
        ))}
    </div>
  );
};
