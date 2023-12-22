import { CarouselComponents } from "./carousel";

export const Banner = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-12 gap-x-2 h-full items-center">
        <div className="col-span-12 md:col-span-8">
          <CarouselComponents />
        </div>
        <div className="col-span-12 md:col-span-4 ">
          <div className="flex flex-col mt-2 md:mt-0 gap-2">
            <img src="https://cf.shopee.co.id/file/id-50009109-8ebed67d5806f449068ff095887ad329_xhdpi" alt="banner" />
            <img src="https://cf.shopee.co.id/file/id-50009109-1424a8936b3afb4a604f8c0f451a2dad_xhdpi" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};
