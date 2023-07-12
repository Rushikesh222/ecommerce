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
// import {
//   WishlistContext,
//   WishlistProvider,
// } from "./component/context/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CardProvider>
          <CartProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CartProvider>
        </CardProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
