"use client";

import { Separator } from "@/components/ui/separator";
import { category } from "@/constant/category";
import Link from "next/link";

export const Category = () => {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-5 w-full h-full px-4 py-4  bg-white">
        <h1 className="text-xl font-semibold">Kategori</h1>
        <Separator className="bg-neutral-400 -mt-2" />
        <div className="grid grid-cols-10 gap-3">
          {category.map((item) => (
            <div className="col-span-12 sm:col-span-2" key={item.id}>
              <Link href={`/${item.slug}`}>
                <div role="link" className="flex flex-col gap-5 w-full h-[200px] items-center justify-center p-4 bg-orange-100 rounded-sm hover:scale-[101%] transition-all ease-in">
                  <img className="w-[90px] h-[90px] rounded-lg mb-2" src={item.image} alt="elektronik" />
                  <p className="text-center  overflow-ellipsis "> {item.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
