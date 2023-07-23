import { NavLink } from "react-router-dom";
import { AddressCard } from "../../component/address/AddressCart";
import { useAddress } from "../../context/AddressContext";

export const AddressDetails = () => {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "rgb(1, 1, 83)" : "black",
    borderBottom: isActive ? "1px solid rgb(1, 1, 83)" : "none",
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
      <div
        className="profile-block"
        style={{ filter: isAddressCardVisiable ? "blur(10px)" : "" }}
      >
        <h1>Account</h1>
        <div className="profile-address">
          <div className="link-address">
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
              <div className="show-address-card">
                <p>{name}</p>
                <p>{street}</p>
                <p>
                  {city},{state}
                </p>
                <p>{pincode}</p>
                <div className="address-btn">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setIsAddressCardVisiable(true);
                      setCheckOut(data);
                      setIsEditBtn(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
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
              </div>
            );
          })}
        </div>
      </div>
      {isAddressCardVisiable && <AddressCard />}
    </div>
  );
};
