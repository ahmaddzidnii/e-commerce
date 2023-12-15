"use client";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Rekomendasi = () => {
  return (
    <div>
      {/* className="fixed top-24 w-[95.5%] z-[999]" */}
      <div>
        <div className="relative w-full h-full px-4 py-4  bg-white">
          <h1 className="text-xl font-semibold text-center text-orange-700">Rekomendasi Untuk Anda</h1>
          <Separator className="absolute bottom-0 left-0 bg-orange-700 h-2" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 mt-4">
        {new Array(48).fill(null).map((_, index) => (
          <div key={index} className="col-span-6 md:col-span-4 lg:col-span-2">
            <Card className="bg-white  pb-2 hover:border-orange-700 hover:scale-[101%] transition ease-in">
              <div className="mb-2 ">
                <div className="w-full h-[200px] relative">
                  <img className="w-full h-full rounded-sm" src="https://down-id.img.susercontent.com/file/id-11134207-7qul3-lk5l8pr5jo6344_tn" alt="product" />
                  <img className="w-full  absolute bottom-0" src="https://down-id.img.susercontent.com/file/id-50009109-f9c8dd8c6536d50d6646509c2d6584bb" alt="p" />
                  <img src="https://down-id.img.susercontent.com/file/a7a8ecca1e417c2f76327736edd49ba7" className="absolute top-1 left-1 h-7 w-10" />
                </div>
              </div>
              <div className="flex flex-col mx-2 gap-2 ">
                <div>
                  <p className="text-sm text-muted-foreground font font-normal">Flashdisk Flashdisk Flashdisk</p>
                </div>
                <div>
                  <img className="h-[10px] w-[27px]" src="https://down-id.img.susercontent.com/file/id-50009109-8d834dd660b129d1d3c72d22c1cb8867" alt="cod" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-orange-700">Rp20.000</p>
                  <p className="text-xs text-muted-foreground">100 Terjual</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button variant="secondary" className="w-full md:w-[20%] mt-8 bg-white hover:bg-neutral-200 border-neutral-300 border" asChild>
          <Link href="/category">Lihat Semua</Link>
        </Button>
      </div>
    </div>
  );
};
