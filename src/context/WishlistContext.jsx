import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";
import axios from "axios";

export const WishlistContext = createContext();
export const WishlistProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [Wishlist, setWishlist] = useState([]);
  const [updateWishlist, setUpdateWishlist] = useState(false);

  const getWishlistData = async () => {
    try {
      setUpdateWishlist(true);
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/wishlist",
        headers: {
          authorization: token,
        },
      });
      if (status === 200) {
        setWishlist(data?.wishlist);
        setUpdateWishlist(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addWishlistData = async (items) => {
    console.log(items);
    try {
      setUpdateWishlist(true);
      const { data, status } = await axios.post(
        "/api/user/wishlist",
        { product: items },
        { headers: { authorization: token } }
      );
      console.log(data);
      if (status === 200 || status === 201) {
        setWishlist(data?.wishlist);
        setUpdateWishlist(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromWishlist = async (_id) => {
    try {
      setUpdateWishlist(true);
      const { status, data } = await axios({
        method: "DELETE",
        url: `/api/user/wishlist/${_id}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        setWishlist(data?.wishlist);
        setUpdateWishlist(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWishlistData();
  }, [token]);

  return (
    <WishlistContext.Provider
      value={{
        Wishlist,
        setWishlist,
        getWishlistData,
        removeFromWishlist,
        addWishlistData,
        updateWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
export const useWishlist = () => useContext(WishlistContext);
