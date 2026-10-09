import { useWishlist } from "../../context/WishlistContext";
import { WishlistCard } from "./WishlistCard";
import { EmptyWishlist } from "./RemoveWishlist";
export const WishList = () => {
  const { Wishlist, removeFromWishlist } = useWishlist();
  const handleRemoveWishlist = (id) => {
    removeFromWishlist(id);
  };

  return (
    <div className="flex w-full flex-col items-center px-4 py-6 capitalize">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">WishList</h1>
      {Wishlist?.length > 0 ? (
        <div className="flex w-full max-w-5xl flex-col gap-4">
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
