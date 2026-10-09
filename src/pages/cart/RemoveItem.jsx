import { useNavigate } from "react-router-dom";
import { cartEmptyImage } from "../../assets";
export const RemoveCartItem = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <img
        className="h-auto w-full max-w-md object-contain"
        src={cartEmptyImage}
        alt="cart"
      />
      <h3 className="mt-4 text-xl font-semibold">Your Cart is Empty!</h3>
      <p className="mt-2 text-gray-600">Add something to make me happy :)</p>
      <button className="btn-brand mt-6" onClick={() => navigate(`/products`)}>
        Shop Now
      </button>
    </div>
  );
};
