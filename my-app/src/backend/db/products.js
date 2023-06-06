import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attribute s
 * */

export const products = [
  {
    _id: uuid(),
    title: "One Indian Girl",
    author: "Chetan Bhagat",
    price: "1000",
    categoryName: "Fiction",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1471605709i/31557698.jpg",
    rating: "4.8",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "500",
    categoryName: "Fiction",
    image: "https://kbimages1-a.akamaihd.net/60e67846-0acc-4e4e-b3cd-65e7a7c939e9/353/569/90/False/think-and-grow-rich-5.jpg",
    rating: "3.5",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "2000",
    categoryName: "Fiction",
    image: "https://kbimages1-a.akamaihd.net/c5742da9-e63f-4ed5-acb6-074fab5e3f41/353/569/90/False/the-great-gatsby-11.jpg",
    rating: "2.0",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "Wings of Fire: An Autobiography",
    author: "A.P.J. Abdul Kalam",
    price: "1500",
    categoryName: "Biography",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg",
    rating: "4",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: "2500",
    categoryName: "Fantasy",
    image: "https://kbimages1-a.akamaihd.net/6750d058-29cb-4626-9c12-a62e816a80cc/353/569/90/False/harry-potter-and-the-philosopher-s-stone-3.jpg",
    rating: "3.9",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "1984",
    author: "George Orwell",
    price: "1800",
    categoryName: "Fiction",
    image: "https://kbimages1-a.akamaihd.net/460820aa-d853-4b9b-8ac4-16c0df7f3721/353/569/90/False/uPpagIMVqza-XnC7PD9ayQ.jpg",
    rating:"2.5",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "2200",
    categoryName: "Fantasy",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780007458424&w=&h=570",
    rating:"1",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "1900",
    categoryName: "Fiction",
    image: "https://savethecat.com/wp-content/uploads/2019/05/243a0ba33adbee20d3ed689fbf712ec8-jd-salinger-holden-caulfield-416x600.jpg",
    rating:"3",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "1700",
    categoryName: "Fiction",
    image: "https://kbimages1-a.akamaihd.net/afcd8653-3b27-4423-bee9-570fb1441aed/353/569/90/False/pride-and-prejudice-71.jpg",
    rating:"4.1",
    binding:"Hard Cover",
    language: "English"
  },
  ,
  {
    _id: uuid(),
    title: "I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban",
    author: "Malala Yousafzai",
    price: "2000",
    categoryName: "Biography",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375414895i/17851885.jpg",
    rating: "4.5",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: "3500",
    categoryName: "Fantasy",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594919131i/20310621.jpg",
    rating:"3.5",
    binding:"Hard Cover",
    language: "English"
  },
  {
    _id: uuid(),
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    price: "2800",
    categoryName: "Fantasy",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg",
    rating:"3.8",
    binding:"Hard Cover",
    language: "English"
  }
];

