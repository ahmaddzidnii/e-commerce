import { CarouselComponents } from "../carousel";

export const Banner = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-12 gap-x-2 h-full items-center">
        <div className="col-span-12 md:col-span-8">
          <CarouselComponents />
        </div>
        <div className="col-span-12 md:col-span-4 ">
          <div className="flex flex-col mt-2 md:mt-0 gap-2">
            <img src="https://placehold.co/600x200" alt="banner" />
            <img src="https://placehold.co/600x200" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};
