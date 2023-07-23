import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";

export function CartItems({ data, handleRemoveCart }) {
  const { _id, img, title, rating, qty, price } = data;
  const { changeCartQuantity, updateCartItems } = useCart();
  const { token } = useAuth();
  const { Wishlist, addWishlistData, updateWishlist } = useWishlist();
  const navigate = useNavigate();
  return (
    <div className="Cart-items">
      <div className="product-cart" key={_id}>
        <img
          className="cart-image"
          src={img}
          alt={title}
          onClick={() => navigate(`/products/${_id}`)}
        />
        <div className="cart-items-list">
          <h4>{title}</h4>
          <p>
            rating:{rating} <i class="fa-solid fa-star"></i>
          </p>
          <p>
            {price}
            <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
          </p>
        </div>
      </div>
      <div className="Cart-Qauntity">
        <div className="Select-Quantity">
          <i
            disabled={qty <= 1 || updateCartItems}
            onClick={() => changeCartQuantity(_id, "decrement")}
            class="fa-solid fa-minus"
          ></i>

          {qty}

          <i
            onClick={() => changeCartQuantity(_id, "increment")}
            class="fa-solid fa-plus qty-icon"
          ></i>
        </div>
        <p
          className="remove-cart"
          disabled={updateCartItems}
          onClick={() => handleRemoveCart(_id)}
        >
          <i class="fa-solid fa-trash-can"></i> Remove
        </p>
      </div>
      <div className="price-Card">
        <h3>
          Rs.{price} <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
        </h3>
        <button
          disabled={updateWishlist}
          className="add-wislist-button"
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
