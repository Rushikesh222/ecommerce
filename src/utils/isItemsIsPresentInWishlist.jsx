export const isItemPresentInWishlist = (data, id) => {
  return data.find((items) => (items.id === id ? true : false));
};
