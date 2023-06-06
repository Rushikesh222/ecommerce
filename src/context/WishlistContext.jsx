import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";

export const WishlistContext = createContext();
export const WishlistProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [addToWishlist, setAddToWishlist] = useState([]);

  const getdata = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        setAddToWishlist(response.json());
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleWishlist = async (items) => {
    try {
      const requestedbody = { product: items };
      const response = await fetch(`/api/user/wishlist`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedbody),
      })
        .then((response) => response.json())
        .then((wishList) => {
          setAddToWishlist(wishList.wishlist);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromWishlist = async (_id) => {
    try {
      const requestedbody = { product: _id };
      const response = await fetch(`/api/user/wishlist/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedbody),
      })
        .then((response) => response.json())
        .then((wishList) => {
          setAddToWishlist(wishList.wishlist);
        });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [token]);

  return (
    <WishlistContext.Provider
      value={{ handleWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
