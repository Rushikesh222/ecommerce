import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { AddressCard } from "../../component/address/AddressCart";
import { AddressFrom } from "./AddressForm";
import { CheckoutCard } from "./CheckoutCard";
export const Address = () => {
  const navigate = useNavigate();
  const { isAddressCardVisiable } = useAddress();
  return (
    <div className="flex w-full flex-col items-center px-4 py-6 capitalize">
      <div className="mb-6 flex w-full max-w-5xl items-center gap-2 text-sm md:text-base">
        <p className="cursor-pointer" onClick={() => navigate("/cart")}>
          Cart
        </p>
        <i className="fa-solid fa-angle-right"></i>
        <span
          className="cursor-pointer font-semibold text-brand"
          onClick={() => navigate("/address")}
        >
          Address
        </span>
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-start">
        <AddressFrom />
        <div
          className="w-full max-w-[360px] rounded-[25px] border border-[#bfbfbf] px-4 py-6 shadow-[5px_5px_5px_#aaaaaa]"
          style={{ filter: isAddressCardVisiable ? "blur(10px)" : "" }}
        >
          <CheckoutCard />
        </div>
      </div>
      <AddressCard />
    </div>
  );
};
