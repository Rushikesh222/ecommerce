import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../utils/itemsProduct";
import { useAuth } from "../../context/Auth";
import { isItemInCart } from "../../utils/isItemInCart";
import { useWishlist } from "../../context/WishlistContext";
import { useProductData } from "../../context/CardContext";
import axios from "axios";
import { LoaderIcon } from "react-hot-toast";
import { toast } from "react-toastify";
import { isItemPresentInWishlist } from "../../utils/isItemsIsPresentInWishlist";

export const ProductDetails = () => {
  const { singleProduct, setSingleProduct } = useState({});
  const { userId } = useParams();
  const { productState, productDispatch } = useProductData();
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { Wishlist, addWishlistData, updateWishlist } = useWishlist();
  const navigate = useNavigate();
  const { token } = useAuth();

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
  const { _id, img, title, rating, price } = singleProduct;
  return (
    <div>
      <p>
        {" "}
        <p onClick={() => navigate("/")}>Home</p>
        <i class="fa-solid fa-angle-right"></i>
        <p onClick={() => navigate("/products")}>Browse Product</p>
        <i class="fa-solid fa-angle-right"></i>
        <span>Product Delaits</span>
      </p>
      {productState?.isDetailLoading ? (
        <LoaderIcon />
      ) : (
        <div className="product-details">
          <img src={img} alt={_id} />
          <p>{title}</p>
          <hr />
          <p>{rating.value}⭐</p>
          <div className="price-card">
            <h4>{price}</h4>
            <div className="wishlist-card">
              <button
                className="wishlist-btn"
                disabled={updateWishlist}
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
                className="cart-btn"
                disabled={isItemInCart}
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
                <i class="fa-solid fa-cart-shopping"></i>{" "}
                {isItemInCart(cartItems, _id) ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};
