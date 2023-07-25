import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./Auth";
import { EditAddressService } from "../utils/editAddress";
export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  const { token } = useAuth();
  const [addressData, setAddressData] = useState([]);
  const [isAddressCardVisiable, setIsAddressCardVisiable] = useState(false);
  const [isEditBtn, setIsEditBtn] = useState([]);
  // console.log(token, "address");
  const checkoutInitial = {
    _id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  };
  const [checkOut, setCheckOut] = useState(checkoutInitial);
  const getAddressData = async () => {
    try {
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/address",
        headers: { authorization: token },
      });
      if (status === 200) {
        setAddressData(data?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addAddressData = async (addressData) => {
    console.log(addressData);
    try {
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/address",
        data: {
          address: addressData,
        },
        headers: { authorization: token },
      });
      if (status === 201) {
        setAddressData(data?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const removeAddress = async (dataId) => {
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/address/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setAddressData(data?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const editAddress = async (addressInput, addressId) => {
    try {
      const response = await EditAddressService(addressInput, addressId, token);
      const { data, status } = response;
      if (status === 201) {
        setAddressData(data?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (token) {
      getAddressData();
    }
  }, [token]);

  return (
    <AddressContext.Provider
      value={{
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
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
export const useAddress = () => useContext(AddressContext);
