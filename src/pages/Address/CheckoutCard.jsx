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
    <div className="flex w-full flex-col items-center">
      <h4 className="text-lg font-semibold">Order Details</h4>
      <div className="my-3 w-full border-y-2 border-gray-500 py-2">
        <div className="flex w-full flex-row items-start justify-between">
          <p className="text-black">
            <strong>item</strong>
          </p>
          <p className="text-black">
            <strong>Quantity</strong>
          </p>
        </div>
        {cartItems.map((data) => {
          const { _id, title, qty } = data;
          return (
            <div
              className="mt-2 flex w-full flex-row items-start justify-between gap-3"
              key={_id}
            >
              <p className="text-sm text-black">{title}</p>
              <p className="text-sm text-black">{qty}</p>
            </div>
          );
        })}
      </div>
      <div className="mb-3 w-full border-b-2 border-gray-500 pb-2">
        <div className="flex w-full flex-row items-start justify-between">
          <h4 className="text-[15px] text-black">Price Details</h4>
          <p className="text-[15px] text-black">{priceDetails.quantity}</p>
        </div>
      </div>
      <div className="mb-3 w-full border-b-2 border-gray-500 pb-2">
        <li className="flex w-full list-none flex-row items-start justify-between">
          <strong>Discount</strong>
          <p className="text-[15px] text-black">Rs.{priceDetails.discount}</p>
        </li>
      </div>
      <div className="mb-3 w-full border-b-2 border-gray-500 pb-2">
        <li className="flex w-full list-none flex-row items-start justify-between">
          <strong>Grand Total</strong>
          <p className="text-[15px] text-black">
            Rs.{priceDetails.totalPrice - priceDetails.discount}
          </p>
        </li>
      </div>

      <div className="mb-3 w-full border-b-2 border-gray-500 pb-3">
        <h4 className="text-[15px] text-black">Deliver to</h4>
      </div>

      {Object.values(checkOut)[0].length > 0 ? (
        <div className="flex w-full flex-col items-start">
          <p>
            <strong>{checkOut.name}</strong>
          </p>
          <div>
            <p className="text-black">{checkOut.street}</p>
            <p className="text-black">
              {checkOut.city},{checkOut.state}
            </p>
            <p className="text-black">Pincode: {checkOut.pincode}</p>
          </div>
        </div>
      ) : (
        <p className="text-black">No Adrress Found</p>
      )}
      <button
        className="btn-brand my-5"
        onClick={() => {
          navigate("/order-summary");
        }}
      >
        Place Order
      </button>
    </div>
  );
};
