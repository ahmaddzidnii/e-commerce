"use client";
import { CircleUserRoundIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { Input } from "./ui/input";
import { useState } from "react";

export const Navbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  return (
    <nav className=" w-full z-[999] h-24 py-2 flex items-center fixed shadow-md bg-gradient-to-b from-utama to-orange-500 text-white">
      <div className="container">
        <div className=" flex items-center justify-between ">
          <div className="w-[20%]">
            <Logo />
          </div>
          <div className="w-[60%] relative">
            <Input
              className="text-muted-foreground !rounded-[2px] "
              placeholder="Cari barang disini..."
              onChange={(e: any) => {
                if (e.target.value.length > 0) {
                  setIsSearchExpanded(true);
                } else {
                  setIsSearchExpanded(false);
                }
              }}
            />
            <div role="button" className="bg-gradient-to-b from-utama to-orange-500 absolute top-1 right-2 px-2 py-1 rounded-sm">
              <SearchIcon className="w-6 h-6" />
            </div>
            {isSearchExpanded && <div className="w-full h-[300px] bg-violet-50 absolute top-11 rounded-sm shadow-md"></div>}
          </div>
          <div className="w-[20%] flex gap-x-2 justify-end">
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="w-7 h-7" />
              <span className="absolute top-0 right-0 text-xs text-violet-100 bg-rose-500 border rounded-full w-4 h-4 flex items-center justify-center">9</span>
            </Link>
            <Link href="/cart">
              <CircleUserRoundIcon className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
