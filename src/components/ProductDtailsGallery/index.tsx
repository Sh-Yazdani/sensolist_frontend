"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsGalleryProps {
  images: string[];
}

export default function ProductDetailsGallery({
  images,
}: ProductDetailsGalleryProps) {
  const [currenSlide, setCurrentSlide] = useState(0);
  return (
    <div className="lg:w-fit w-full flex mx-auto lg:mx-[unset]">
      <div className="w-full aspect-square lg:min-w-[480px] max-w-[576px] mx-auto md:mx-0 mt-6 mb-9 flex">
        <div className="w-[160px] h-full hidden md:flex flex-col justify-between mr-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={` relative w-full h-[24%] border rounded-xl overflow-hidden 
               ${
                 currenSlide === i
                   ? "border-secondary-main"
                   : "border-primary-tint-2"
               }`}
            >
              <Image alt="img" src={img} layout="fill" />
            </div>
          ))}
        </div>
        <Carousel
          onSlideChange={(index) => {
            setCurrentSlide(index);
          }}
          className="border rounded-xl overflow-hidden border-primary-tint-2"
        >
          {images.map((img, i) => (
            <div key={i} className=" relative w-full h-full">
              <Image alt="img" src={img} layout="fill" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
