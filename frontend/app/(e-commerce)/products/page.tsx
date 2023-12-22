import { ProductsCard } from "./_components/product-card";


const ProductPage = async () => {


  return (
    <div className="flex">
      <div className="w-[200px]">Sidebar</div>
      <ProductsCard />
    </div>
  );
};

export default ProductPage;
