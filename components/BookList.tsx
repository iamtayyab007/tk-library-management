import { books } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  books: books[];
  containerClassName: string;
}

const BookList = ({ title, containerClassName, books }: Props) => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl text-lime-100 mt-5">
        popular Books
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-5">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-11 gap-3 justify-center w-36 text-center"
          >
            <Image src={book.cover} alt="bookImage" height={70} width={70} />
            <p className="font-bold">{book.title}</p>

            <p className="text-xs font-bold">{book.genre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
