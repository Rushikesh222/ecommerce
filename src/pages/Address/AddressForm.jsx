import { useAddress } from "../../context/AddressContext";

export const AddressFrom = () => {
  const { addressData, setIsAddressCardVisiable, checkOut, setCheckOut } =
    useAddress();
  return (
    <div>
      <div className="adrress-form">
        {addressData?.length === 0 && <h2>address added.</h2>}
        {addressData?.map((data) => {
          const { _id, name, street, city, state, pincode } = data;
          return (
            <div>
              <input
                type="radio"
                className="address"
                checkOut={checkOut._id === _id}
                onChange={() => setCheckOut(data)}
              />
              <div className="address-data">
                <div>
                  <h3>{name}</h3>
                  <p>{street},</p>
                  <p>
                    {city},{state}
                  </p>
                  <p>{pincode}</p>
                </div>
              </div>
            </div>
          );
        })}
        <button
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
