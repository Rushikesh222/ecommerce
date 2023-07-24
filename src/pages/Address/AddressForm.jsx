import { useAddress } from "../../context/AddressContext";

export const AddressFrom = () => {
  const { addressData, setIsAddressCardVisiable, checkOut, setCheckOut } =
    useAddress();
  return (
    <div>
      <div className="address-form">
        <h3 className="select-address">Select Address</h3>
        {addressData?.length === 0 && <h2>address added.</h2>}
        {addressData?.map((data) => {
          const { _id, name, street, city, state, pincode } = data;
          return (
            <div className="address-details-cart">
              <input
                type="radio"
                className="address"
                checked={checkOut._id === _id}
                onChange={() => setCheckOut(data)}
              />
              <div className="address-data">
                <div>
                  <h3>{name}</h3>
                  <p>{street},</p>
                  <p>
                    {city},{state}
                  </p>
                  <p>Pincode:{pincode}</p>
                </div>
              </div>
            </div>
          );
        })}
        <button
          className="add-address-btn"
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
          +ADD NEW ADDRESS
        </button>
      </div>
    </div>
  );
};
