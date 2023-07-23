import { useWishlist } from "../../context/WishlistContext";
import { WishlistCard } from "./WishlistCard";
import "./Wishlist.css";
import { EmptyWishlist } from "./RemoveWishlist";
export const WishList = () => {
  const { Wishlist, removeFromWishlist } = useWishlist();
  const handleRemoveWishlist = (id) => {
    removeFromWishlist(id);
  };

  return (
    <div className="wishlist-Card">
      <h1>WishList</h1>
      {Wishlist?.length > 0 ? (
        <div className="wishlist-product-details">
          {Wishlist?.map((items) => {
            return (
              <WishlistCard
                key={items._id}
                data={items}
                handleRemoveWishlist={() => handleRemoveWishlist(items._id)}
              />
            );
          })}
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </div>
  );
};
