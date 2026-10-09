import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../utils/itemsProduct";
import { useAuth } from "../../context/Auth";
import { isItemInCart } from "../../utils/isItemInCart";
import { useWishlist } from "../../context/WishlistContext";
import { useProductData } from "../../context/CardContext";
import { LoaderIcon } from "react-hot-toast";
import { toast } from "react-toastify";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";

export const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { userId } = useParams();
  const { productState, productDispatch } = useProductData();
  const { cartItems, addCartData } = useCart();
  const { Wishlist, addWishlistData } = useWishlist();
  const navigate = useNavigate();
  const { token } = useAuth();
  console.log(userId);
  const getSingleProduct = async () => {
    try {
      productDispatch({ type: "products_loading", payload: true });
      const product = await getProduct(userId);
      setSingleProduct(product?.product);
      productDispatch({ type: "products_loading", payload: false });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  if (Object.keys(singleProduct).length === 0) {
    return null;
  }
  const { _id, img, title, rating, price, discount } = singleProduct;
  return (
    <div className="flex flex-col items-stretch pb-10">
      <div className="mx-4 mt-6 flex flex-wrap items-center gap-2 text-sm md:mx-8 md:text-base">
        <p className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </p>
        <i className="fa-solid fa-angle-right"></i>
        <p className="cursor-pointer" onClick={() => navigate("/products")}>
          Browse Product
        </p>
        <i className="fa-solid fa-angle-right"></i>
        <span className="font-semibold text-brand">Product Details</span>
      </div>
      {productState?.isDetailLoading ? (
        <LoaderIcon />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-6 px-4 py-6 lg:flex-row lg:items-start lg:gap-10">
          <img
            className="h-auto w-full max-w-md rounded-[35px] border border-[#bfbfbf] object-contain shadow-[5px_5px_5px_#aaaaaa] lg:h-[400px] lg:w-[400px]"
            src={img}
            alt={_id}
          />
          <div className="flex w-full max-w-md flex-col items-start gap-2">
            <h3 className="text-xl font-semibold capitalize md:text-2xl">
              {title}
            </h3>
            <p className="text-gray-600">{rating}⭐</p>
            <p className="text-gray-600">Price:{price}₹</p>
            <p className="text-gray-600">Discount:-{discount}₹</p>
            <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                className="btn-brand"
                onClick={() => {
                  if (token) {
                    if (isItemPresentInWishlist(Wishlist, _id)) {
                      navigate("/wishlist");
                    } else {
                      addWishlistData(singleProduct);
                      toast.success("Added to wishlist");
                    }
                  } else {
                    toast.warning("please login to proceed");
                    navigate("/login");
                  }
                }}
              >
                {isItemPresentInWishlist(Wishlist, _id)
                  ? "Go to Wishlist"
                  : "Add to Wishlist"}
              </button>
              <button
                className="btn-brand"
                onClick={() => {
                  if (token) {
                    if (isItemInCart(cartItems, _id)) {
                      navigate("/cart");
                    } else {
                      addCartData(singleProduct);
                      toast.success("Added to cart!");
                    }
                  } else {
                    toast.warning("Please login to proceed");
                    navigate("/login");
                  }
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};
