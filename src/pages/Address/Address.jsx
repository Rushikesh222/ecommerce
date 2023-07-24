import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { AddressCard } from "../../component/address/AddressCart";
import { AddressFrom } from "./AddressForm";
import { CheckoutCard } from "./CheckoutCard";
import "./Address.css";
export const Address = () => {
  const navigate = useNavigate();
  const { isAddressCardVisiable } = useAddress();
  return (
    <div className="addres-block">
      <p className="address-location">
        <p onClick={() => navigate("/cart")}>Cart</p>
        <i class="fa-solid fa-angle-right"></i>
        <span onClick={() => navigate("/address")}>Address</span>
      </p>
      <AddressFrom />
      <div
        className="address-checkout"
        style={{ filter: isAddressCardVisiable ? "blur(10px)" : "" }}
      >
        <CheckoutCard />
      </div>
      <AddressCard />
    </div>
  );
};
