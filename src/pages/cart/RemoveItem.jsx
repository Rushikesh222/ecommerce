import { useNavigate } from "react-router-dom";
import { cartEmptyImage } from "../../assets";
export const RemoveCartItem = () => {
  const navigate = useNavigate();
  return (
    <div className="card-empty">
      <img className="card-Image-empty" src={cartEmptyImage} alt="cart" />
      <h3>Your Cart is Empty!</h3>
      <p>Add something to make me happy :)</p>
      <button className="cart-btn" onClick={() => navigate(`/products`)}>
        Shop Now
      </button>
    </div>
  );
};
