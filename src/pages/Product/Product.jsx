import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";
import { ProductCard } from "../../component/product-Card/productCard";
import "./Product.css";

export const Product = () => {
  const { productState } = useProductData();
  const { filteredData } = useFilter();

  return (
    <div className="Home">
      {productState.isProductLoading ? (
        <div>
          <h1>loading</h1>
        </div>
      ) : (
        <div>
          {filteredData.length === 0 ? (
            <h1>no Product</h1>
          ) : (
            filteredData.map((products) => {
              console.log(products);
              return (
                <li>
                  <ProductCard data={products} />
                </li>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
