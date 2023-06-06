// import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./Auth";
import { CardContext } from "./CardContext";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [addToCartItems, setAddToCartItems] = useState([]);

  const getdata = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: { authorization: token },
      });
      if (response.status === 200) {
        setCartItems(response.json());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCart = async (items) => {
    try {
      const requestedbody = { product: items };
      const response = await fetch(`/api/user/cart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedbody),
      })
        .then((response) => response.json())
        .then((addcart) => {
          setAddToCartItems(addcart.cart);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (_id) => {
    try {
      const requestedbody = { product: _id };
      const response = await fetch(`/api/user/cart/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedbody),
      })
        .then((response) => response.json())
        .then((addcart) => {
          setAddToCartItems(addcart.cart);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdata();
  }, [token]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCartItems, handleCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
