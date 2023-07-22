import { backgroundImage } from "../../assets";
import { CategoryCard } from "../../component/category-card/categoryCard";
import { useProductData } from "../../context/CardContext";
import "./Landing.css";

export function Landing() {
  const { productState } = useProductData();
  return (
    <div className="Cart">
      <div className="image-card">
        <img className="bg-image" src={backgroundImage} alt="bg" />
      </div>
      {productState?.isCategoryLoading ? (
        <h1>some thing went worng</h1>
      ) : (
        <CategoryCard />
      )}
    </div>
  );
}
