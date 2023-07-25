import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
export const CheckoutCard = () => {
  const { checkOut } = useAddress();
  const { cartItems, removeFromCart, priceDetails } = useCart();
  const navigate = useNavigate();

  const displayRazorpay = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    console.log(response);
    if (!response) {
      alert("Razorpay SDK failed to load, check you internet connection");
      return;
    }

    const options = {
      key: "rzp_test_SJd4C2Kvq5UZIu",
      amount: Number(priceDetails.totalPrice) * 100,
      currency: "INR",
      name: "PERFUMA",
      description: "Thank you for shopping with us",
      handler: function () {
        toast.success(`Payment of Rs. ${priceDetails.totalPrice} is Succesful`);
        navigate("/order-summary");
        cartItems.map((item) => removeFromCart(item._id));
        setTimeout(() => {
          console.log("Success");
          navigate("/");
        }, 4000);
      },
      theme: {
        color: " rgb(1, 1, 83)",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="checkout-block">
      <h4>Order Details</h4>
      <div className="check-border">
        <div className="check-items">
          <p>
            <strong>item</strong>
          </p>
          <p>
            <strong>Quantity</strong>
          </p>
        </div>
        {cartItems.map((data) => {
          const { _id, title, qty } = data;
          return (
            <div className="items-details" key={_id}>
              <p>{title}</p>
              <p>{qty}</p>
            </div>
          );
        })}
      </div>
      <div className="check-border-price">
        <div className="checkout-price">
          <h4>Price Details</h4>
          <p>{priceDetails.quantity}</p>
        </div>
      </div>
      <div className="check-border-price">
        <li className="checkout-price">
          <strong>Discount</strong>
          <p>Rs.{priceDetails.discount}</p>
        </li>
      </div>
      <div className="check-border-price">
        <li className="checkout-price">
          <strong>Grand Total</strong>
          <p>Rs.{priceDetails.totalPrice - priceDetails.discount}</p>
        </li>
      </div>

      <div className="checkout-order">
        <h4>Deliver to</h4>
      </div>

      {Object.values(checkOut)[0].length > 0 ? (
        <div className="address-details">
          <p>
            <strong>{checkOut.name}</strong>
          </p>
          <div>
            <p>{checkOut.street}</p>
            <p>
              {checkOut.city},{checkOut.state}
            </p>
            <p>Pincode: {checkOut.pincode}</p>
          </div>
        </div>
      ) : (
        <p>No Adrress Found</p>
      )}
      <button
        className="place-order-btn"
        // disabled={
        //   Object.values(checkOut)[0].length === 0 || cartItems.length === 0
        // }
        onClick={() => {
          // displayRazorpay();
          navigate("/order-summary");
        }}
      >
        Place Order
      </button>
    </div>
  );
};
