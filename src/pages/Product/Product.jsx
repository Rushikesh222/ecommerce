import { useContext } from "react";
import "./Product.css";
import { CardContext } from "../../context/CardContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
export function Product() {
  const { handleWishlist } = useContext(WishlistContext);
  const { handleCart } = useContext(CartContext);
  const { state, dispatch } = useContext(CardContext);
  const handleRate = (event) => {
    dispatch({ type: "FILTER_RATE", payload: event.target.value });
  };
  const handlePrice = (event) => {
    dispatch({ type: "FILTER_PRICE", payload: event.target.value });
  };
  const handleCategory = (event) => {
    dispatch({ type: "FILTER_CATEGORY", payload: event.target });
  };

  return (
    <div className="Home">
      <div className="filter-cotainer">
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
      </div>
      {state?.data?.map((items) => {
        const { _id, title, rating, price, img } = items;
        return (
          <div className="product" key={_id}>
            <img src={img} alt="name" />
            <h2>Title:{title}</h2>
            <p>rating:{rating}</p>
            <p>price:{price}</p>
            <button onClick={() => handleCart(items)}>Cart</button>
            <button onClick={() => handleWishlist(items)}>WishList</button>
          </div>
        );
      })}
    </div>
  );
}
