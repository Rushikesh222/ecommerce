// import { useContext } from "react";
// import { WishlistContext } from "../../component/context/WishlistContext";

export const WishlistCard = ({ data, handleRemoveWishlist }) => {
  //   const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const { _id, img, title, rating, price } = data;
  return (
    <div className="Wishlist">
      <div className="product" key={_id}>
        <img src={img} alt="name" />
        <h2>Title:{title}</h2>
        <p>rating:{rating}</p>
        <p>price:{price}</p>
        <button onClick={() => handleRemoveWishlist(_id)}>Remove</button>
      </div>
    </div>
  );
};
