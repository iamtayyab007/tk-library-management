"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          {" "}
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/library" ? "text-purple-300" : "text-purple-600"
            )}
          >
            library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
