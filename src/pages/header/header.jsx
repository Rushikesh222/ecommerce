import { NavLink } from "react-router-dom";
import { useFilter } from "../../context/sortContext";

export function Header() {
  const { filterDispatch } = useFilter();

  return (
    <div>
      <nav>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/wishlist">WishList</NavLink>
        <div className="Search-bar">
          <span class="material-symbols-outlined">search</span>
          <input
            placeholder="Search"
            onChange={(e) =>
              filterDispatch({
                type: "SEARCH_FILTER",
                payload: e.target.value,
              })
            }
          />
        </div>
      </nav>
    </div>
  );
}
