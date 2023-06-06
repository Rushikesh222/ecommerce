import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Cart() {
  const { addToCartItems, removeFromCart } = useContext(CartContext);
  return (
    <div className="Cart">
      <h1>Cart</h1>

      {addToCartItems?.map((items) => {
        const { _id, title, rating, price, img } = items;
        return (
          <div className="product" key={_id}>
            <img src={img} alt="name" />
            <h2>Title:{title}</h2>
            <p>rating:{rating}</p>
            <p>price:{price}</p>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
