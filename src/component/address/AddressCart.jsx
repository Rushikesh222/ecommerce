import { useAddress } from "../../context/AddressContext";
import { v4 as uuid } from "uuid";
export const AddressCard = () => {
  const {
    addressData,
    addAddressData,
    removeAddress,
    editAddress,
    isAddressCardVisiable,
    setIsAddressCardVisiable,
    checkOut,
    setCheckOut,
    isEditBtn,
    setIsEditBtn,
  } = useAddress();
  const handleAddAddress = () => {
    const addressExist = addressData.find(
      (address) => address._id === checkOut._id
    );
    if (addressExist) {
      editAddress(checkOut, addressExist._id);
    } else {
      if (
        checkOut.name.trim() ||
        checkOut.street.trim() ||
        checkOut.city.trim() ||
        checkOut.state.trim() ||
        checkOut.pincode.trim()
      ) {
        addAddressData({ ...checkOut, _id: uuid() });
        setCheckOut({
          ...checkOut,
          _id: "",
          name: "",
          street: "",
          city: "",
          state: "",
          pincode: "",
        });
      } else {
        <h1>fill add the Data!</h1>;
      }
    }
    setIsAddressCardVisiable(false);
    setIsEditBtn(false);
  };
  return (
    <>
      <div
        className="address-card"
        style={{ display: isAddressCardVisiable ? "" : "none" }}
      >
        <span
          class="material-symbols-outlined"
          onClick={setIsAddressCardVisiable(false)}
        >
          close
        </span>
        <h1>Enter Your Address</h1>
        <label className="name">Name:</label>
        <input
          className="name-input"
          value={checkOut.name}
          onChange={(e) => setCheckOut({ ...checkOut, name: e.target.value })}
          required
        />
        <label className="street">Street:</label>
        <input
          className="street-input"
          value={checkOut.street}
          onChange={(e) => setCheckOut({ ...checkOut, street: e.target.value })}
          required
        />
        <label className="city">City:</label>
        <input
          className="city-input"
          value={checkOut.city}
          onChange={(e) => setCheckOut({ ...checkOut, city: e.target.value })}
          required
        />
        <label className="state">State:</label>
        <input
          className="state-input"
          value={checkOut.state}
          onChange={(e) => setCheckOut({ ...checkOut, state: e.target.value })}
          required
        />
        <label className="pincode">Pincode:</label>
        <input
          className="pincode-input"
          value={checkOut.pincode}
          onChange={(e) =>
            setCheckOut({ ...checkOut, pincode: e.target.value })
          }
          required
        />
        <button onClick={handleAddAddress}>
          {isEditBtn ? "Save Button" : "Add Address"}
        </button>
      </div>
    </>
  );
};
