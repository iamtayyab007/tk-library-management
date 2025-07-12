import { books } from "@/types";
import React from "react";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total,
  copies,
  available_copies,
  description,
  color,
  cover,
}: books) => {
  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-5xl font-semibold text-white md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default BookOverview;
