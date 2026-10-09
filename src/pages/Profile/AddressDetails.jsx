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
        className="mx-auto my-6 flex w-[min(420px,calc(100%-2rem))] flex-col items-center rounded-[25px] border border-[#bfbfbf] px-4 py-8 capitalize shadow-[5px_5px_5px_#aaaaaa]"
        style={{ filter: isAddressCardVisiable ? "blur(10px)" : "" }}
      >
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">Account</h1>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-2 flex flex-row justify-center gap-6 text-lg font-semibold sm:gap-8 sm:text-xl">
            <NavLink style={getStyles} to="/profile">
              Profile
            </NavLink>
            <NavLink style={getStyles} to="/address-details">
              Address
            </NavLink>
          </div>
          <button
            className="btn-brand mt-6"
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
          {addressData.length === 0 && (
            <h2 className="mt-6 text-xl">No Address</h2>
          )}
          {addressData.map((data) => {
            const { name, _id, street, city, state, pincode } = data;
            console.log(data);
            return (
              <div
                key={_id}
                className="mt-6 flex w-full flex-col items-center text-center"
              >
                <p>{name}</p>
                <p>{street}</p>
                <p>
                  {city},{state}
                </p>
                <p>{pincode}</p>
                <div className="mt-2 flex flex-row items-center justify-center gap-2">
                  <button
                    className="btn-brand-sm"
                    onClick={() => {
                      setIsAddressCardVisiable(true);
                      setCheckOut(data);
                      setIsEditBtn(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-brand-sm"
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
