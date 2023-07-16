import { useCart } from "../../context/CartContext";
import { CartItems } from "./CartItems";
import { RemoveCartItem } from "./RemoveItem";
export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const handleRemoveCart = (id) => {
    removeFromCart(id);
  };
  return (
    <div>
      <div className="Cart">
        <h1>Cart{cartItems.length > 0 && <span>{cartItems.length}</span>}</h1>
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
          Cart(
            <div className="CartItems-card">
              <div className="CartItems-Items">
                {cartItems.map((item) => (
                  <CartItems
                    data={item}
                    handleRemoveCart={() => handleRemoveCart(item._id)}
                  />
                ))}
              </div>
            </div>
          )
        ) : (
          <RemoveCartItem />
        )}
      </div>
    </div>
  );
};
