import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const srcipt = document.createElement("srcipt");
    srcipt.src = url;
    srcipt.onload = () => {
      resolve(true);
    };
    srcipt.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(srcipt);
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
    if (!response) {
      alert("Razorpay SDK failed to load, check you internet connection");
    }

    const options = {
      key: "rzp_test_SJd4C2Kvq5UZIu",
      amount: Number(priceDetails.totalPrice) * 100,
      currency: "INR",
      name: "ATTIRE",
      description: "Thank you for shopping with us",
      handler: function () {
        toast.success(`Payment of Rs. ${priceDetails.totalPrice} is Succesful`);
        navigate("/order-summary");
        cart.map((item) => removeCartData(item._id));
        setTimeout(() => {
          console.log("Success");
          navigate("/");
        }, 4000);
      },
      theme: {
        color: "#e80071",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h4>Order Details</h4>
      <hr />
      <div>
        <p>
          <strong>item</strong>
        </p>
        <p>
          <strong>Quantity</strong>
        </p>
      </div>
      {cart.map((data) => {
        const { _id, title, qty } = data;
        return (
          <div key={_id}>
            <p>{title}</p>
            <p>{Q}</p>
          </div>
        );
      })}
      <hr />
      <div className="checkout-price">
        <h4>Price Details</h4>
        <p>{priceDetails.quantity}</p>
      </div>
      <hr />
      <ul>
        <li>
          <p>Grand Total</p>
          <h4>Rs.{priceDetails.totalPrice}</h4>
        </li>
      </ul>
      <hr />
      <h4>Deliver to</h4>
      <hr />
      {Object.values(checkOut)[0].length > 0 ? (
        <div>
          <p>
            <strong>{checkOut.name}</strong>
          </p>
          <div>
            <p>{checkOut.street}</p>
            <p>
              {checkOut.city},{checkOut.state}
            </p>
            <p>{checkOut.pincode}</p>
          </div>
        </div>
      ) : (
        <p>No Adrress Found</p>
      )}
      <button
        disabled={Object.values(checkOut)[0].length === 0 || cart.length === 0}
        onClick={() => {
          displayRazorpay();
        }}
      >
        Place Order
      </button>
    </div>
  );
};
