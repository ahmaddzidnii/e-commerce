import { axiosInstance } from "@/lib/axios";
import { RekomendasiProps } from "../../_components/rekomendasi";
import { CardProduct } from "@/components/card-product";
import Link from "next/link";




const fetchAllProducts = async () => {
  const { data } = await axiosInstance.get("/products");
  return data.data.products;
};

export const ProductsCard = async () => {
  const products: RekomendasiProps[] = await fetchAllProducts();
  return (
    <div>
      <div className="grid grid-cols-12 gap-3 mt-4">
        {products.map((item) => (
          <div key={item.id} className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <Link href={`/products/${item.id}`}>
              <CardProduct productName={item.product_name} productImage={item.product_image} price={item.price} discount={item.discount} sold={item.sold} cod={item.cod} freeOngkir={item.free_ongkir} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
