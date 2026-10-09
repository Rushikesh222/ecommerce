import { NavLink, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/sortContext";
import { logo } from "../../assets";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/Auth";
import { useWishlist } from "../../context/WishlistContext";

export function Header() {
  const { filterDispatch } = useFilter();
  const { token } = useAuth();
  const { cartItems } = useCart();
  const { Wishlist } = useWishlist();
  const navigate = useNavigate();

  const iconLink =
    "relative mx-2 inline-flex items-center justify-center font-bold text-[#5d5d5d] md:mx-3 [&.active]:text-brand";

  return (
    <header className="sticky top-0 z-20 w-full bg-white text-lg md:text-xl">
      <div className="grid grid-cols-[auto_1fr] items-center gap-2 border border-[#bfbfbf] px-3 py-2 shadow-[5px_5px_5px_#aaaaaa] md:flex md:px-4">
        <img
          className="h-16 w-24 cursor-pointer object-contain md:ml-8 md:h-[88px] md:w-[150px] lg:ml-16"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <nav className="contents">
          <div className="col-start-2 row-start-1 flex items-center justify-self-end md:order-3">
            <NavLink to="/cart" className={iconLink}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="absolute -right-2.5 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                {token ? cartItems.length : "0"}
              </span>
            </NavLink>
            <NavLink to="/wishlist" className={iconLink}>
              <i className="fa-solid fa-heart"></i>
              <span className="absolute -right-2.5 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                {token ? Wishlist.length : "0"}
              </span>
            </NavLink>
            <NavLink to="/profile" className={iconLink}>
              <i className="fa-regular fa-user"></i>
            </NavLink>
          </div>
          <div className="col-span-2 row-start-2 flex h-9 w-full min-w-0 items-center gap-1 rounded-full border border-gray-500 bg-[#ebeaea] px-3 md:order-2 md:ml-auto md:w-[250px] md:flex-none">
            <span className="material-symbols-outlined text-[20px]">
              search
            </span>
            <input
              className="min-w-0 flex-1 border-none bg-transparent text-sm outline-none"
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
        </nav>
      </div>
    </header>
  );
}
