import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./Auth";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [updateCartItems, setUpdateCartItems] = useState(false);

  const getdata = async () => {
    try {
      setUpdateCartItems(true);
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/cart",
        headers: { authorization: token },
      });
      if (status === 200) {
        setCartItems(data?.cart);
        setUpdateCartItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addCartData = async (cartData) => {
    try {
      setUpdateCartItems(true);
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/cart",
        headers: { authorization: token },
        body: { cart: cartData },
      });
      if (status === 200) {
        setCartItems(data?.cart);
        setUpdateCartItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (_id) => {
    try {
      setUpdateCartItems(true);
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/cart/${_id}`,
        headers: { authorization: token },
        body: { cart: _id },
      });
      if (status === 200) {
        setCartItems(data?.cart);
        setUpdateCartItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const changeCartQuantity = async (_id, updateType) => {
    try {
      setUpdateCartItems(true);
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/cart/${_id}`,
        headers: { authorization: token },
        body: { action: { type: updateType } },
      });
      if (status === 200) {
        setCartItems(data?.cart);
        setUpdateCartItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdata();
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getdata,
        addCartData,
        removeFromCart,
        changeCartQuantity,
        updateCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
