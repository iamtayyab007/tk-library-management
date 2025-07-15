import { books } from "@/types";
import Image from "next/image";
import React from "react";
import BookCard from "./BookCard";

interface Props {
  title: string;
  books: books[];
  containerClassName?: string;
}

const BookList = ({ title, containerClassName, books }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-lime-100 mt-5">{title}</h2>
      <ul className="mt-10 flex flex-wrap gap-5 max-xs:justify-between sm:gap-15">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
