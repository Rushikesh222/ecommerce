import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { isItemPresentInWishlist } from "../../utils/isItemPresentINWishlist";

export function CartItems({ data, handleRemoveCart }) {
  const { _id, img, title, rating, qty, price } = data;
  const { changeCartQuantity, updateCartItems } = useCart();
  const { token } = useAuth();
  const { Wishlist, addWishlistData, updateWishlist } = useWishlist();
  const navigate = useNavigate();
  return (
    <div className="Cart">
      <div className="product" key={_id}>
        <img
          src={img}
          alt={title}
          onClick={() => navigate(`/products/${_id}`)}
        />
        <p>rating:{rating}</p>
        <button>Remove</button>
      </div>
      <div className="Cart-Qauntity">
        <div className="Select-Qauntity">
          <button
            disabled={qty <= 1 || updateCartItems}
            onClick={() => changeCartQuantity(_id, "decrement")}
          >
            <span class="material-symbols-outlined">remove</span>
          </button>
          {qty}
          <button onClick={() => changeCartQuantity(_id, "increment")}>
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
        <button
          disabled={updateCartItems}
          onClick={() => handleRemoveCart(_id)}
        >
          <span class="material-symbols-outlined">delete</span>Remove
        </button>
      </div>
      <div className="price-Card">
        <button
          disabled={updateWishlist}
          onClick={() => {
            if (token) {
              if (isItemPresentInWishlist(Wishlist, _id)) {
                navigate(`/wishlist`);
              } else {
                addWishlistData(data);
              }
            } else {
              navigate("/login");
            }
          }}
        >
          {isItemPresentInWishlist(Wishlist, _id)
            ? "Go to WishList"
            : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}
