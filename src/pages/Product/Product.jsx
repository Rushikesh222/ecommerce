// import { useContext } from "react";
import { productCard } from "../../component/product-Card/productCard";
import { useProductData } from "../../context/CardContext";

import "./Product.css";
// import { CartContext } from "../../context/CartContext";
// import { WishlistContext } from "../../context/WishlistContext";
export const Product = () => {
  const { productState } = useProductData();

  // const { handleWishlist } = useContext(WishlistContext);
  // const { handleCart } = useContext(CartContext);

  // const handleRate = (event) => {
  //   dispatch({ type: "FILTER_RATE", payload: event.target.value });
  // };
  // const handlePrice = (event) => {
  //   dispatch({ type: "FILTER_PRICE", payload: event.target.value });
  // };
  // const handleCategory = (event) => {
  //   dispatch({ type: "FILTER_CATEGORY", payload: event.target });
  // };

  return (
    <div className="Home">
      {productState.isProductLoading ? (
        <div>
          <h1>loading</h1>
        </div>
      ) : (
        <div>{}</div>
      )}
      <></>
      {/* <div className="filter-cotainer">
        <button>Clear</button>
        <div className="Filter_Rate">
          <h3>Filter</h3>
          <label>
            Rating
            <input type="range" onChange={handleRate} min="1" max="5" />
          </label>
        </div>
        <div className="Filter_Price">
          <label>
            <form className="Filter_Price" onChange={handlePrice}>
              <input type="radio" name="price" value="high" />
              price high to low
              <input type="radio" name="price" value="low" />
              price low to high
            </form>
          </label>
        </div>
        <div className="Filter_Category">
          <form onChange={handleCategory}>
            <label>
              Category
              <input type="checkbox" name="check" value="Aromatic" />
              <label>Aromatic</label>
              <input type="checkbox" name="check" value="Oriental, Woody" />
              <label>Oriental, Woody</label>
              <input type="checkbox" name="check" value="Oriental Fruity" />
              <label>Oriental Fruity</label>
              <input type="checkbox" name="check" value="Floral Fruity" />
              <label>Floral Fruity</label>
            </label>
          </form>
        </div>
      </div> */}
    </div>
  );
};
