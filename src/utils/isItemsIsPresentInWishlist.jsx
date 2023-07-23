export const isItemPresentInWishlist = (data, id) => {
  return data.find((items) => (items._id === id ? true : false));
};
