import { useNavigate } from "react-router-dom";

export const PriceCard = ({ obj }) => {
  console.log(obj);
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center rounded-2xl border border-[#bfbfbf] p-5 shadow-[5px_5px_5px_#aaaaaa] xl:sticky xl:top-28">
      <ul className="w-full list-none p-0">
        <li className="mt-4 flex flex-row items-center justify-between gap-3">
          <p>SubTotal({obj.quantity}):</p>
          <h4 className="font-semibold">Rs:{obj.totalPrice}</h4>
        </li>
        <li className="mt-4 flex flex-row items-center justify-between gap-3">
          <p>Discount:</p>
          <h4 className="font-semibold">Rs.{obj.discount}</h4>
        </li>
        <hr className="my-4 w-full" />
        <li className="flex flex-row items-center justify-between gap-3">
          <p>Grand Total({obj.quantity}):</p>
          <h4 className="font-semibold">Rs.{obj.totalPrice - obj.discount}</h4>
        </li>
        <button
          className="btn-brand mx-auto mt-6"
          onClick={() => navigate("/address")}
        >
          CheckOut Now
        </button>
      </ul>
    </div>
  );
};
