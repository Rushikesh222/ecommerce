import { NavLink, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/sortContext";
import { logo } from "../../assets";
import { useCart } from "../../context/CartContext";
import "./Header.css";
import { useAuth } from "../../context/Auth";
import { useWishlist } from "../../context/WishlistContext";

export function Header() {
  const { filterDispatch } = useFilter();
  const { token } = useAuth();
  const { cartItems } = useCart();
  const { Wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="Navbar">
        <img
          className="logo-image"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <nav className="nav-container">
          <div className="Search-bar">
            <span class="material-symbols-outlined">search</span>
            <input
              className="search-box-input"
              placeholder="Search"
              onChange={(e) => {
                filterDispatch({
                  type: "SEARCH_FILTER",
                  payload: e.target.value,
                });
                navigate("/products");
              }}
            />
          </div>
          <div className="items-icon">
            <NavLink to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <p className="items-size">{token ? cartItems.length : "0"}</p>
            </NavLink>
            <NavLink to="/wishlist">
              <i class="fa-solid fa-heart"></i>
              <p className="items-size-first">
                {token ? Wishlist.length : "0"}
              </p>
            </NavLink>
            <NavLink to="/profile">
              <i class="fa-regular fa-user"></i>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
