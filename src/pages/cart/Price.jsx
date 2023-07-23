import { useNavigate } from "react-router-dom";

export const PriceCard = ({ obj }) => {
  console.log(obj);
  const navigate = useNavigate();
  return (
    <div className="price-block">
      <ul className="price-detials">
        <li>
          <p>SubTotal({obj.quantity}):</p>
          <h4>Rs:{obj.totalPrice}</h4>
        </li>
        <li>
          <p>Discount:</p>
          <h4>Rs.{obj.discount}</h4>
        </li>
        <hr />
        <li>
          <p>Grand Total({obj.quantity}):</p>
          <h4>Rs.{obj.totalPrice - obj.discount}</h4>
        </li>
        <button
          className="checkout-button"
          onClick={() => navigate("/address")}
        >
          CheckOut Now
        </button>
      </ul>
    </div>
  );
};
