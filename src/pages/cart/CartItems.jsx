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
  console.log(qty);
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 rounded-2xl border border-[#bfbfbf] p-4 md:flex-row">
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <img
            className="h-40 w-40 cursor-pointer object-contain sm:h-48 sm:w-48"
            src={img}
            alt={title}
            onClick={() => navigate(`/products/${_id}`)}
          />
          <div
            onClick={() => navigate(`/products/${_id}`)}
            className="flex cursor-pointer flex-col items-center gap-1 text-gray-500 sm:items-start"
          >
            <h4 className="text-brand">{title}</h4>
            <p>
              rating:{rating} <i className="fa-solid fa-star"></i>
            </p>
            <p>
              {price}
              <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex h-10 w-[100px] flex-row items-center justify-center gap-4 rounded-[20px] border border-gray-500 text-2xl">
            <button
              className="border-none bg-transparent"
              disabled={qty <= 1}
              onClick={() => changeCartQuantity(_id, "decrement")}
            >
              <i className="fa-solid fa-minus"></i>
            </button>

            {qty}
            <button
              className="border-none bg-transparent"
              onClick={() => changeCartQuantity(_id, "increment")}
            >
              <i className="fa-solid fa-plus qty-icon"></i>
            </button>
          </div>
          <p
            className="cursor-pointer text-xl font-medium text-blue-600 hover:font-semibold hover:text-brand"
            disabled={updateCartItems}
            onClick={() => handleRemoveCart(_id)}
          >
            <i className="fa-solid fa-trash-can"></i> Remove
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-lg font-semibold">
          Rs.{price}{" "}
          <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>
        </h3>
        <button
          disabled={updateWishlist}
          className="btn-brand"
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
