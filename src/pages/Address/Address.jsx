import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { AddressCard } from "../../component/address/AddressCart";
import { AddressFrom } from "./AddressForm";
import { CheckoutCard } from "./CheckoutCard";
export const Address = () => {
  const navigate = useNavigate();
  const { isAddressCardVisiable } = useAddress();
  return (
    <div>
      <p>
        <p onClick={() => navigate("/cart")}>Cart</p>
        <span class="material-symbols-outlined">chevron_right</span>
        <span onClick={() => navigate("/address")}>Address</span>
      </p>
      <div
        className="address-checkout"
        style={{ filter: isAddressCardVisiable ? "blur(10px)" : "" }}
      >
        <AddressFrom />
        <CheckoutCard />
      </div>
      <AddressCard />
    </div>
  );
};
