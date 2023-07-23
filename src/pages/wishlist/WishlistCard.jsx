import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { toast } from "react-toastify";

export const WishlistCard = ({ data, handleRemoveWishlist }) => {
  const { _id, img, title, rating, price } = data;
  const { token } = useAuth();
  const navigate = useNavigate();
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { removeFromWishlist } = useWishlist();
  return (
    <div className="wishlist-product" key={_id}>
      <img className="wishlist-image" src={img} alt="name" />
      <div className="wishlist-product-details">
        <h4>{title}</h4>
        <p>
          rating:{rating} <i class="fa-solid fa-star"></i>
        </p>
        <p>
          {price}
          <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
        </p>
      </div>
      <div className="wishlist-button">
        <button
          className="add-to-cart"
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
          {" "}
          <i class="fa-solid fa-cart-shopping"></i>{" "}
          {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
        </button>
        <button
          className="remove-from-wishlist"
          disabled={updateCartItems}
          onClick={() => removeFromWishlist(_id)}
        >
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};
