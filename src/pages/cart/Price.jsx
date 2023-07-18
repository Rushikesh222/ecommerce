import { useNavigate } from "react-router-dom";

export const PriceCard = ({ obj }) => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <p>SubTotal{obj.quantity}</p>
          <h4>Rs:{obj.quantity}</h4>
        </li>
        {/* <li>
        <p>Discount</p>
        <h1>-Rs.{obj.discount-obj.totalPrice}</h1>
    </li> */}
        <hr />
        <li>
          <p>Grand Total{onrejectionhandled.quantity}</p>
          <h4>Rs.{obj.totalPrice}</h4>
        </li>
        <button
        // onClick={() => navigate("/address")}
        >
          CheckOut Now
        </button>
      </ul>
    </>
  );
};
