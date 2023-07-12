// import { useContext } from "react";
// import { WishlistContext } from "../../component/context/WishlistContext";

// export const Wishlist = () => {
//   const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

//   return (
//     <div className="Wishlist">
//       <h1>Wishlist</h1>
//       {addToWishlist?.map((items) => {
//         const { _id, title, rating, price, img } = items;
//         return (
//           <div className="product" key={_id}>
//             <img src={img} alt="name" />
//             <h2>Title:{title}</h2>
//             <p>rating:{rating}</p>
//             <p>price:{price}</p>
//             <button onClick={() => removeFromWishlist(_id)}>Remove</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
