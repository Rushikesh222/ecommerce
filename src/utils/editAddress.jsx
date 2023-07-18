import axios from "axios";

export const EditAddressService = async (address, addressId, endocedToken) =>
  await axios.post(
    `/api/user/address/${addressId}`,
    { address: address },
    {
      headers: {
        autorization: endocedToken,
      },
    }
  );
