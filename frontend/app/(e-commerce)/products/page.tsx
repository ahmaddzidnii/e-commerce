import { FilterSection } from "./_components/filter-section";
import { ProductsCard } from "./_components/product-card";

const ProductPage = async () => {
  return (
    <div>
      <FilterSection />
      <ProductsCard />
    </div>
  );
};

export default ProductPage;
