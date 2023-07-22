import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";
import { ProductCard } from "../../component/product-Card/productCard";
import "./Product.css";
import { Sidebar } from "../../component/Sidebar/Sidebar";

export const Product = () => {
  const { productState } = useProductData();
  const { filteredData } = useFilter();

  return (
    <div className="Home">
      <Sidebar />
      {productState.isProductLoading ? (
        <h1>loading</h1>
      ) : (
        <div className="product-display">
          {filteredData.length === 0 ? (
            <h1>no Product</h1>
          ) : (
            filteredData.map((products) => {
              return (
                <div>
                  <ProductCard data={products} />
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
