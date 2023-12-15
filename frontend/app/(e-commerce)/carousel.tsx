"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const CarouselComponents = () => {
  return (
    <div>
      <Carousel showArrows autoPlay infiniteLoop stopOnHover showThumbs={false} showStatus={false} interval={5000}>
        <div>
          <img src="https://cf.shopee.co.id/file/id-50009109-3c8acfbd2e24924d49cdb45e72908d65_xxhdpi" />
        </div>
        <div>
          <img src="https://cf.shopee.co.id/file/id-50009109-89b78f26972b02ae541db265b113b7c2_xxhdpi" />
        </div>
        <div>
          <img src="https://cf.shopee.co.id/file/id-50009109-0ae5b5c5b29079bf90f4e01e382757bb_xxhdpi" />
        </div>
      </Carousel>
    </div>
  );
};
