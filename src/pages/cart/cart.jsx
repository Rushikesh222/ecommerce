import { useCart } from "../../context/CartContext";
import { CartItems } from "./CartItems";
import { PriceCard } from "./Price";
import { RemoveCartItem } from "./RemoveItem";
export const Cart = () => {
  const { cartItems, removeFromCart, priceDetails } = useCart();
  const handleRemoveCart = (id) => {
    removeFromCart(id);
  };
  return (
    <div className="flex w-full flex-col items-center px-3 py-6 capitalize md:px-6">
      <div className="flex w-full max-w-6xl flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">
          Cart{cartItems.length > 0 && <span>({cartItems.length})</span>}
        </h1>
        {cartItems.length > 0 && (
          <div className="mb-4 flex w-full justify-center sm:justify-start">
            <button
              className="btn-brand"
              onClick={() => {
                cartItems.map((item) => removeFromCart(item._id));
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
        {cartItems.length > 0 ? (
          <div className="flex w-full flex-col items-stretch gap-6 xl:flex-row xl:items-start">
            <div className="flex w-full flex-col gap-4">
              {cartItems.map((item) => (
                <CartItems
                  key={item._id}
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
