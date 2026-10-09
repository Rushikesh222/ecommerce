import { useAddress } from "../../context/AddressContext";

export const AddressFrom = () => {
  const { addressData, setIsAddressCardVisiable, checkOut, setCheckOut } =
    useAddress();
  return (
    <div className="flex w-full max-w-[360px] flex-col rounded-[25px] border border-[#bfbfbf] px-4 py-4 shadow-[5px_5px_5px_#aaaaaa]">
      <h3 className="mb-3 text-xl font-semibold">Select Address</h3>
      {addressData?.length === 0 && <h2 className="mb-3 text-lg">address added.</h2>}
      {addressData?.map((data) => {
        const { _id, name, street, city, state, pincode } = data;
        return (
          <div
            key={_id}
            className="mb-6 flex w-full items-start gap-3 border-b-[5px] border-gray-500 pb-4"
          >
            <input
              type="radio"
              className="mt-1"
              checked={checkOut._id === _id}
              onChange={() => setCheckOut(data)}
            />
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-700">{street},</p>
              <p className="text-gray-700">
                {city},{state}
              </p>
              <p className="text-gray-700">Pincode:{pincode}</p>
            </div>
          </div>
        );
      })}
      <button
        className="btn-brand mx-auto mb-4"
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
  );
};
