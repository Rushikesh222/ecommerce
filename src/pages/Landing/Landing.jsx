import { CategoryCard } from "../../component/category-card/categoryCard";
import { useProductData } from "../../context/CardContext";

export function Landing() {
  const { productState } = useProductData();
  return (
    <div className="Cart">
      {productState?.isCategoryLoading ? (
        <h1>some thing went worng</h1>
      ) : (
        <CategoryCard />
      )}
    </div>
  );
}
