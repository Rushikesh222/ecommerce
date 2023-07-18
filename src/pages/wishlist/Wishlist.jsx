import { useWishlist } from "../../context/WishlistContext";
import { WishlistCard } from "./WishlistCard";
export const WishList = () => {
  const { WishList, removeFromWishlist } = useWishlist();
  const handleRemoveWishlist = (id) => {
    removeFromWishlist(id);
  };
  return (
    <>
      <div className="wishlist-Card">
        <h1>WishList</h1>
        {WishList.length > 0 ? (
          <div>
            {WishList.map((items) => {
              return (
                <WishlistCard
                  key={items._id}
                  data={items}
                  handleRemoveWishlist={handleRemoveWishlist(items._id)}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
