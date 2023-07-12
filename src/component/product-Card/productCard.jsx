export const ProductCard = ({ data }) => {
  const { _id, img, title, rating, price } = data;
  return (
    <div>
      <div className="product" key={_id}>
        <img src={img} alt="name" />
        <h2>Title:{title}</h2>
        <p>rating:{rating}</p>
        <p>price:{price}</p>
        <button>Cart</button>
        <button>WishList</button>
      </div>
    </div>
  );
};
