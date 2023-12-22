import React from "react";
import { Card } from "./ui/card";
import TextTruncation from "./text-truncate";

interface CardProductProps {
  productImage: string;
  productName: string;
  price: string;
  sold: string;
  discount?: string;
  freeOngkir?: boolean;
  cod?: boolean;
}
export const CardProduct = ({ productImage, productName, discount, sold, freeOngkir, cod, price }: CardProductProps) => {
  return (
    <Card className="bg-white  pb-2 hover:border-orange-700 hover:-translate-y-[1px] transition ease-in-out">
      <div className="mb-2 ">
        <div className="w-full h-[200px] relative">
          <img loading="lazy" decoding="async" className="w-full h-full rounded-sm" src={productImage} alt={productName} />
          {discount && (
            <div className="w-12 h-6 z-30 absolute top-0 right-0 rounded-sm bg-amber-300 rounded-bl-sm">
              <div className="flex items-center justify-center h-full">
                <span className=" text-[10px] leading-[0.875rem] font-medium text-orange-700">{discount}</span>
              </div>
            </div>
          )}
          {freeOngkir && <img className="w-full  absolute bottom-0" src="https://down-id.img.susercontent.com/file/id-50009109-f9c8dd8c6536d50d6646509c2d6584bb" alt="p" />}
          <img src="https://down-id.img.susercontent.com/file/a7a8ecca1e417c2f76327736edd49ba7" className="absolute top-1 left-1 h-7 w-10" />
        </div>
      </div>
      <div className="flex flex-col mx-2 gap-2 ">
        <div>
          <TextTruncation originalText={productName} maxLength={35} />
        </div>
        <div>{cod && <img className="h-[10px] w-[27px]" src="https://down-id.img.susercontent.com/file/id-50009109-8d834dd660b129d1d3c72d22c1cb8867" alt="cod" />}</div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold text-orange-700">Rp{price}</p>
          <p className="text-xs text-muted-foreground">{sold}</p>
        </div>
      </div>
    </Card>
  );
};
