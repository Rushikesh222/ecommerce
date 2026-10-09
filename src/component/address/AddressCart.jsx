import { useAddress } from "../../context/AddressContext";
import { v4 as uuid } from "uuid";
export const AddressCard = () => {
  const {
    addressData,
    addAddressData,
    editAddress,
    isAddressCardVisiable,
    setIsAddressCardVisiable,
    checkOut,
    setCheckOut,
    isEditBtn,
    setIsEditBtn,
  } = useAddress();

  const handleAddAddress = () => {
    const addressExist = addressData?.find(
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
        className="fixed left-1/2 top-[8%] z-50 flex max-h-[85vh] w-[min(350px,calc(100%-1.5rem))] -translate-x-1/2 flex-col gap-1 overflow-y-auto rounded-xl bg-white px-4 py-5 shadow-[0_7px_29px_#64646f33]"
        style={{ display: isAddressCardVisiable ? "" : "none" }}
      >
        <i
          onClick={() => setIsAddressCardVisiable(false)}
          className="fa-solid fa-xmark self-end text-lg"
        ></i>

        <h1 className="mb-2 text-center text-xl font-bold md:text-2xl">
          Enter Your Address
        </h1>
        <label className="name">Name</label>
        <input
          className="field-input"
          value={checkOut.name}
          onChange={(e) => setCheckOut({ ...checkOut, name: e.target.value })}
          required
        />
        <label className="mt-2">Street</label>
        <input
          className="field-input"
          value={checkOut.street}
          onChange={(e) =>
            setCheckOut({ ...checkOut, street: e.target.value })
          }
          required
        />
        <label className="mt-2">City</label>
        <input
          className="field-input"
          value={checkOut.city}
          onChange={(e) => setCheckOut({ ...checkOut, city: e.target.value })}
          required
        />
        <label className="mt-2">State</label>
        <input
          className="field-input"
          value={checkOut.state}
          onChange={(e) => setCheckOut({ ...checkOut, state: e.target.value })}
          required
        />
        <label className="mt-2">Pincode</label>
        <input
          className="field-input"
          value={checkOut.pincode}
          onChange={(e) =>
            setCheckOut({ ...checkOut, pincode: e.target.value })
          }
          required
        />
        <div className="mt-3 flex w-full items-center justify-center">
          <button className="btn-brand" onClick={handleAddAddress}>
            {isEditBtn ? "Save Button" : "Add Address"}
          </button>
        </div>
      </div>
    </>
  );
};
