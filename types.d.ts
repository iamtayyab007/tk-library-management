import { StringToBoolean } from "class-variance-authority/types";

interface books {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: string;
  total: string;
  copies: string;
  available_copies: string;
  description: String;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}
