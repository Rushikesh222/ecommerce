import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/Auth";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { isItemInCart } from "../../utils/isItemInCart";
import { useWishlist } from "../../context/WishlistContext";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";
import "./Productitems.css";
export const ProductCard = ({ data }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { changeWishlist, setChangeWishlist } = useState(false);
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { _id, img, title, rating, price } = data;
  const { Wishlist, removeFromWishlist, addWishlistData, updateWishlist } =
    useWishlist();
  const addToWishlist = () => {
    if (token) {
      if (!isItemPresentInWishlist(Wishlist, _id)) {
        addWishlistData(data);
        toast.success("Add to Wishlist");
      } else {
        toast.warning("Add to Wishlist");
        navigate("/login");
      }
    }
  };
  return (
    <div className="product-card">
      {changeWishlist ? (
        <i onClick={() => removeFromWishlist} class="fa-solid fa-heart"></i>
      ) : (
        <i onClick={addToWishlist} class="fa-regular fa-heart"></i>
      )}
      <i onClick={addToWishlist} class="fa-solid fa-heart"></i>
      <div className="product" key={_id}>
        <img className="product-image" src={img} alt="name" />
        <div className="product-content">
          <h4>{title}</h4>
          <p>rating:{rating}</p>
          <p>price:{price}</p>
          <button
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
            <i class="fa-solid fa-cart-shopping"></i>{" "}
            {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
