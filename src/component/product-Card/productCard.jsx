import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/Auth";
import { isItemInCart } from "../../utils/isItemInCart";
import { useWishlist } from "../../context/WishlistContext";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";
import { toast } from "react-toastify";
export const ProductCard = ({ data }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { _id, img, title, rating, price } = data;
  const { Wishlist, removeFromWishlist, addWishlistData, updateWishlist } =
    useWishlist();

  console.log(updateCartItems, updateWishlist);
  const addToWishlist = () => {
    if (token) {
      if (!isItemPresentInWishlist(Wishlist, _id)) {
        addWishlistData(data);
        toast.success("Add to Wishlist");
      }
    } else {
      toast.warning("You Have to Login");
      navigate("/login");
    }
  };
  return (
    <div className="relative m-3 flex min-h-[340px] w-full max-w-[280px] flex-col overflow-hidden rounded-3xl border border-gray-500 transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_5px_15px_rgba(0,0,0,0.15)] sm:max-w-[250px]">
      <div className="absolute right-4 top-3 z-10 text-xl">
        {isItemPresentInWishlist(Wishlist, _id) ? (
          <i
            onClick={() => {
              removeFromWishlist(_id);
              toast.warning("Item removed from wishlist!");
            }}
            className="fa-solid fa-heart text-red-600"
          ></i>
        ) : (
          <i onClick={addToWishlist} className="fa-regular fa-heart"></i>
        )}
      </div>

      <div className="flex h-auto w-full flex-col items-center justify-center px-2.5 pb-3 pt-8">
        <img
          onClick={() => navigate(`/product/${_id}`)}
          className="h-[175px] w-[min(180px,75%)] cursor-pointer object-contain"
          src={img}
          alt="name"
        />
        <div
          onClick={() => navigate(`/product/${_id}`)}
          className="m-2.5 flex cursor-pointer flex-col items-center justify-center p-1 capitalize"
        >
          <h4 className="text-center text-brand">{title}</h4>
          <p className="m-1 text-gray-500">
            rating:{rating}
            <i className="fa-solid fa-star"></i>
          </p>
          <p className="m-1 text-gray-500">
            price:{price}{" "}
            <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>
          </p>
        </div>
        <div className="m-1 flex items-center justify-center p-1">
          <button
            className="btn-brand"
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
            <i className="fa-solid fa-cart-shopping"></i>
            {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
