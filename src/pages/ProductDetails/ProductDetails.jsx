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
import "./ProductDetails.css";

export const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { userId } = useParams();
  const { productState, productDispatch } = useProductData();
  const { cartItems, addCartData, updateCartItems } = useCart();
  const { Wishlist, addWishlistData, updateWishlist } = useWishlist();
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
  const { _id, img, title, rating, price } = singleProduct;
  return (
    <div className="details-block">
      <div className="details-link">
        <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Home
        </p>
        <i class="fa-solid fa-angle-right"></i>
        <p onClick={() => navigate("/products")} style={{ cursor: "pointer" }}>
          Browse Product
        </p>
        <i class="fa-solid fa-angle-right"></i>
        <span>Product Details</span>
      </div>
      {productState?.isDetailLoading ? (
        <LoaderIcon />
      ) : (
        <div className="product-details">
          <img className="product-details-image" src={img} alt={_id} />
          <div className="detials-items-list">
            <h3>{title}</h3>
            <p>{rating}⭐</p>
            <p>Price:{price}</p>
            <div className="price-card">
              <div className="wishlist-card">
                <button
                  className="cart-btn"
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
        </div>
      )}{" "}
    </div>
  );
};
