"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const CarouselComponents = () => {
  return (
    <div>
      <Carousel showArrows autoPlay infiniteLoop stopOnHover showThumbs={false} showStatus={false} interval={5000}>
        <div>
          <img src="https://placehold.co/600x206" />
        </div>
        <div>
          <img src="https://placehold.co/600x206" />
        </div>
        <div>
          <img src="https://placehold.co/600x206" />
        </div>
      </Carousel>
    </div>
  );
};
