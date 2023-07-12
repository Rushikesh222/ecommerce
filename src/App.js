import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Header } from "./pages/header/header";
import { Cart } from "./pages/cart/cart";
import { Product } from "./pages/Product/Product";
import { Landing } from "./pages/Landing/Landing";

import { Wishlist } from "./pages/wishlist/Wishlist";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
