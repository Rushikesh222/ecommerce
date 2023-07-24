import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/Auth";
import { isItemInCart } from "../../utils/isItemInCart";
import { useWishlist } from "../../context/WishlistContext";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";
import "./Productitems.css";
import { toast } from "react-toastify";
export const ProductCard = ({ data }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { _id, img, title, rating, price } = data;
  const { Wishlist, removeFromWishlist, addWishlistData, updateWishlist } =
    useWishlist();
  console.log(token);
  const addToWishlist = () => {
    if (token) {
      if (!isItemPresentInWishlist(Wishlist, _id)) {
        addWishlistData(data);
        toast.success("Add to Wishlist");
      } else {
        toast.warning("You Have to Login");
        navigate("/login");
      }
    }
  };
  return (
    <div className="product-card">
      <div className="wishlist-icon">
        {isItemPresentInWishlist(Wishlist, _id) ? (
          <i
            onClick={() => {
              removeFromWishlist(_id);
              toast.warning("Item removed from wishlist!");
            }}
            style={{ color: "#ff0000" }}
            class="fa-solid fa-heart add-wishlist"
          ></i>
        ) : (
          <i
            onClick={addToWishlist}
            disabled={updateWishlist}
            class="fa-regular fa-heart"
          ></i>
        )}
      </div>

      <div className="product" key={_id}>
        <img
          onClick={() => navigate(`/product/${_id}`)}
          className="product-image"
          src={img}
          alt="name"
        />
        <div
          onClick={() => navigate(`/product/${_id}`)}
          className="product-content"
        >
          <h4>{title}</h4>
          <p>
            rating:{rating}
            <i class="fa-solid fa-star"></i>
          </p>
          <p>
            price:{price} <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
          </p>
        </div>
        <div className="cart-button">
          <button
            className="add-cart-button"
            disabled={updateCartItems}
            onClick={() => {
              if (token) {
                if (isItemInCart(cartItems, _id)) {
                  navigate("/cart");
                } else {
                  addCartData(data);
                  toast.success("Added to cart!");
                }
              } else {
                toast.warning("Please login to proceed!");
                navigate("/login");
              }
            }}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
