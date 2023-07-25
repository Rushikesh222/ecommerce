import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CardProvider } from "./context/CardContext";
import { AuthProvider } from "./context/Auth";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/sortContext";
import { AddressProvider } from "./context/AddressContext";
import { WishlistProvider } from "./context/WishlistContext";
import ScrollToTop from "./component/Scrolltop";
// import {
//   WishlistContext,
//   WishlistProvider,
// } from "./component/context/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <CardProvider>
          <CartProvider>
            <FilterProvider>
              <WishlistProvider>
                <AddressProvider>
                  <App />
                </AddressProvider>
              </WishlistProvider>
            </FilterProvider>
          </CartProvider>
        </CardProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
