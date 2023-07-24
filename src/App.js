import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Header } from "./pages/header/header";
import { Cart } from "./pages/cart/cart";
import { Product } from "./pages/Product/Product";
import { Landing } from "./pages/Landing/Landing";
import { WishList } from "./pages/wishlist/Wishlist";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Address } from "./pages/Address/Address";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { RequireAuth } from "./component/Auth/RequireAuth";
import { OrderSummary } from "./pages/Summary/OrderSummary";
import { Profile } from "./pages/Profile/Profile";
import { AddressDetails } from "./pages/Profile/AddressDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:userId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/address-details" element={<AddressDetails />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/address" element={<Address />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
