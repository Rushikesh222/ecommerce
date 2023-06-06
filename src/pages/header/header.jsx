import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/wishlist">WishList</NavLink>
      </nav>
    </div>
  );
}
