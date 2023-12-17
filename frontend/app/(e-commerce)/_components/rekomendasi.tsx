import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeadingRekomendasi } from "./heading-rekomendasi";
import { axiosInstance } from "@/lib/axios";
import TextTruncation from "@/components/text-truncate";

interface RekomendasiProps {
  id: number;
  product_name: string;
  price: string;
  product_image: string;
  category: string;
  sold: string;
  discount: string;
  free_ongkir: boolean;
  cod: boolean;
}
export const Rekomendasi = async () => {
  const response = await axiosInstance.get("/recomendations");
  const recomendationsProducts: RekomendasiProps[] = response.data.data;

  return (
    <div>
      {/* className="fixed top-24 w-[95.5%] z-[999]" */}
      {/* <div>
        <div className="relative w-full h-full px-4 py-4  bg-white">
          <h1 className="text-xl font-semibold text-center text-orange-700">Rekomendasi Untuk Anda</h1>
          <Separator className="absolute bottom-0 left-0 bg-orange-700 h-2" />
        </div>
      </div> */}
      <HeadingRekomendasi />

      <div className="grid grid-cols-12 gap-3 mt-4">
        {recomendationsProducts &&
          recomendationsProducts.map((item) => (
            <div key={item.id} className="col-span-6 md:col-span-4 lg:col-span-2">
              <Link href={`/products/${item.id}`}>
                <Card className="bg-white  pb-2 hover:border-orange-700 hover:-translate-y-[1px] transition ease-in-out">
                  <div className="mb-2 ">
                    <div className="w-full h-[200px] relative">
                      <img loading="lazy" decoding="async" className="w-full h-full rounded-sm" src={item.product_image} alt={item.product_name} />
                      {item.discount && (
                        <div className="w-12 h-6 z-30 absolute top-0 right-0 rounded-sm bg-amber-300 rounded-bl-sm">
                          <div className="flex items-center justify-center h-full">
                            <span className=" text-[10px] leading-[0.875rem] font-medium text-orange-700">{item.discount}</span>
                          </div>
                        </div>
                      )}
                      {item.free_ongkir && <img className="w-full  absolute bottom-0" src="https://down-id.img.susercontent.com/file/id-50009109-f9c8dd8c6536d50d6646509c2d6584bb" alt="p" />}
                      <img src="https://down-id.img.susercontent.com/file/a7a8ecca1e417c2f76327736edd49ba7" className="absolute top-1 left-1 h-7 w-10" />
                    </div>
                  </div>
                  <div className="flex flex-col mx-2 gap-2 ">
                    <div>
                      <TextTruncation originalText={item.product_name} maxLength={35} />
                    </div>
                    <div>{item?.cod && <img className="h-[10px] w-[27px]" src="https://down-id.img.susercontent.com/file/id-50009109-8d834dd660b129d1d3c72d22c1cb8867" alt="cod" />}</div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold text-orange-700">Rp{item.price}</p>
                      <p className="text-xs text-muted-foreground">{item.sold}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
      </div>
      <div className="w-full flex justify-center">
        <Button variant="secondary" className="w-full md:w-[20%] mt-8 bg-white hover:bg-neutral-200 border-neutral-300 border" asChild>
          <Link href="/products">Lihat Semua</Link>
        </Button>
      </div>
    </div>
  );
};
