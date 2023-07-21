import { NavLink } from "react-router-dom";
import { AddressCard } from "../../component/address/AddressCart";
import { useAddress } from "../../context/AddressContext";

export const AddressDetails = () => {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    borderBottom: isActive ? "1px solid var(--primary-color)" : "none",
  });
  const {
    addressData,
    removeAddress,
    isAddressCardVisiable,
    setIsAddressCardVisiable,
    setCheckOut,
    setIsEditBtn,
  } = useAddress();
  return (
    <div>
      <div style={{ filter: isAddressCardVisiable ? "blur(10px)" : "" }}>
        <h1>Account</h1>
        <div className="profile-address">
          <div className="link">
            <NavLink style={getStyles} to="/profile">
              Profile
            </NavLink>
            <NavLink style={getStyles} to="/address-details">
              Address
            </NavLink>
          </div>
          <button
            className="add-Address"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsAddressCardVisiable(true);
              setCheckOut({
                name: "",
                street: "",
                city: "",
                state: "",
                pincode: "",
              });
            }}
          >
            + ADD ADDRESS
          </button>
          {addressData.length === 0 && <h2>No Address</h2>}
          {addressData.map((data) => {
            const { name, _id, street, city, state, pincode } = data;
            return (
              <div className="show-addresscard">
                <p>{name}</p>
                <p>{street}</p>
                <p>
                  {city},{state}
                </p>
                <p>{pincode}</p>
                <button
                  onClick={() => {
                    setIsAddressCardVisiable(true);
                    setCheckOut(data);
                    setIsEditBtn(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    removeAddress(_id);
                    setCheckOut({
                      _id: "",
                      name: "",
                      street: "",
                      city: "",
                      state: "",
                      pincode: "",
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {isAddressCardVisiable && <AddressCard />}
    </div>
  );
};
