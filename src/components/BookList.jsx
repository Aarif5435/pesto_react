import React from 'react';
import { Book } from './Book';
export const BookList = () => {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    // Add more books if you'd like
  ];

  return (
    <>
      <div className="flex justify-center mt-20">
        <div>
          <h1 className="font-bold">Welcome to Book Story</h1>
          <ol> {/* Wrap your list items in a <ol> or <ol> */}
            {books.map((item, index) => (
              <li key={index} className='mt-10'> {/* Add a unique key to each list item */}
                <Book title={item.title} author={item.author} year={item.year}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};
