import { useNavigate } from "react-router-dom";
import { wishlistEmptyImage } from "../../assets";

export const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="wishlist-empty">
      <img src={wishlistEmptyImage} alt="cart" />
      <h3>Your wishlist is Empty!</h3>
      <p>Add something to make me happy :)</p>
      <button onClick={() => navigate(`/wishlist`)}>Shop Now</button>
    </div>
  );
};
