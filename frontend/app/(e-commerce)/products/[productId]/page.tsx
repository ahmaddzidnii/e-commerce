import { axiosInstance } from "@/lib/axios";

interface Params {
  params: {
    productId: string;
  };
}

// const fetchProduct = async (id: string) => {
//   const { data } = await axiosInstance.get(`/products/${id}`);
//   return data;
// };
const ProductIdPage = ({ params }: Params) => {
  //   const product = fetchProduct(params.productId);
  //   console.log(product);

  return (
    <div className="grid grid-cols-12 bg-white gap-6 p-5">
      <div className="col-span-5">
        <div>
          <img className="w-full" src="https://placehold.co/400" alt="" />
        </div>
      </div>
      <div className="col-span-7">
        <div className="flex flex-col gap-3">
          <div>
            <span className="bg-orange-600 text-white px-2 py-1 rounded-sm text-sm">Star+</span>
            <h1 className="inline ml-2 font-normal text-xl text-neutral-600">Kaos Dewasa The Simpsons Bart Simpson Squishee Brain Freeze T-Shirt - Kaos Pria - Kaos Wanita - Kaos Laki Laki - Kaos Perempuan</h1>
          </div>
          <p>2 Terjual</p>
          <div className="bg-neutral-100 px-5 py-2 rounded-sm">
            <p className="text-orange-600 text-4xl ">Rp3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdPage;
