import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useCart } from "../../context/CartContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { toast } from "react-toastify";

export const WishlistCard = ({ data, handleRemoveWishlist }) => {
  const { _id, img, title, rating, price } = data;
  const { token } = useAuth();
  const navigate = useNavigate();
  const { cartItems, addCartData, updateCartItems } = useCart();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl border border-[#bfbfbf] p-4 sm:flex-row">
      <img
        className="h-auto w-full max-w-xs rounded-2xl border border-[#bfbfbf] object-contain shadow-[5px_5px_5px_#aaaaaa] sm:h-64 sm:w-64"
        src={img}
        alt="name"
      />
      <div className="flex w-full max-w-[220px] flex-col items-center justify-start gap-1 text-lg sm:text-xl">
        <h4 className="text-center text-brand">{title}</h4>
        <p className="text-gray-600">
          rating:{rating} <i className="fa-solid fa-star"></i>
        </p>
        <p className="text-gray-600">
          {price}
          <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:h-48 sm:justify-between">
        <button
          className="btn-brand"
          onClick={() => {
            if (token) {
              if (isItemInCart(cartItems, _id)) {
                navigate("/cart");
              } else {
                addCartData(data);
                toast.success("Added to Cart!");
              }
            } else {
              toast.warning("please login to proceed!");
            }
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
        </button>
        <button
          className="btn-brand"
          disabled={updateCartItems}
          onClick={() => handleRemoveWishlist(_id)}
        >
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};
