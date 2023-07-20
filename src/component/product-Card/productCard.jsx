import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/Auth";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { isItemInCart } from "../../utils/isItemInCart";
import { useWishlist } from "../../context/WishlistContext";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";
export const ProductCard = ({ data }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { changeWishlist, setChangeWishlist } = useState(false);
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { _id, img, title, rating, price } = data;
  const { Wishlist, removeFromWishlist, addWishlistData, updateWishlist } =
    useWishlist();
  // const { Wishlist, addWishlistData } = useWishlist();
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
    <div>
      {/* <span class="material-symbols-outlined">favorite</span> */}
      {/* <span onClick={addToWishlist} class="material-symbols-outlined">
        favorite
      </span> */}
      <i class="fa-solid fa-heart"></i>
      <div className="product" key={_id}>
        <img src={img} alt="name" />
        <h2>Title:{title}</h2>
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
  );
};
