import { useCart } from "../../context/CartContext";
import { CartItems } from "./CartItems";
import { PriceCard } from "./Price";
import { RemoveCartItem } from "./RemoveItem";
import "./Cart.css";
export const Cart = () => {
  const { cartItems, removeFromCart, priceDetails } = useCart();
  const handleRemoveCart = (id) => {
    removeFromCart(id);
  };
  return (
    <div className="cart-block">
      <div className="Cart">
        <h1>Cart{cartItems.length > 0 && <span>({cartItems.length})</span>}</h1>
        {cartItems.length > 0 && (
          <button
            className="clear_cart"
            onClick={() => {
              cartItems.map((item) => removeFromCart(item._id));
            }}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length > 0 ? (
          <div className="CartItems-card">
            <div className="CartItems-Items">
              {cartItems.map((item) => (
                <CartItems
                  data={item}
                  handleRemoveCart={() => handleRemoveCart(item._id)}
                />
              ))}
            </div>
            <PriceCard obj={priceDetails} />
          </div>
        ) : (
          <RemoveCartItem />
        )}
      </div>
    </div>
  );
};
