"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { category } from "@/constant/category";
import { Button } from "@/components/ui/button";

export const FilterSection = () => {
  return (
    <div className="px-4 py-4 bg-neutral-200 rounded-sm flex items-center gap-x-4 ">
      <h1>Urutkan</h1>
      <div className="flex items-center gap-x-3">
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Kategori" defaultValue="all" />
          </SelectTrigger>
          <SelectContent>
            {category.map((item) => (
              <SelectItem value={item.name} key={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Harga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Terendah</SelectItem>
            <SelectItem value="desc">Tertinggi</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
