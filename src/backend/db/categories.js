import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Oriental Fruity",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://m.media-amazon.com/images/I/717PPkZzQmL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Aromatic",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image:
      "https://m.media-amazon.com/images/I/41ErX89NiyL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Oriental, Woody",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image:
      "https://m.media-amazon.com/images/I/41pg6du5ZLL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Floral Fruity",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://m.media-amazon.com/images/I/61HAoKRKAUL._SX522_.jpg",
  },
];
