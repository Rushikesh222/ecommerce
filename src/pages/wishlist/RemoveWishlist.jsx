import { useNavigate } from "react-router-dom";
import { wishlistEmptyImage } from "../../assets";

export const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="wishlist-empty">
      <img className="empty-wishlist" src={wishlistEmptyImage} alt="cart" />
      <h3>Your wishlist is Empty!</h3>
      <p>Add something to make me happy :)</p>
      <button
        className="wishlist-empty-btn"
        onClick={() => navigate(`/products`)}
      >
        Shop Now
      </button>
    </div>
  );
};
