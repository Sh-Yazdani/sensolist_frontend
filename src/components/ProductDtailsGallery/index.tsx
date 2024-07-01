"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

interface ProductDetailsGalleryProps {
  images: string[];
}

export default function ProductDetailsGallery({
  images,
}: ProductDetailsGalleryProps) {
  return (
    <div className="xl:w-[50%] w-full flex mx-auto">
      <div className="w-full aspect-square max-w-[576px] mx-auto mt-6 mb-9 flex">
        <div className="w-[120px] h-full hidden lg:flex flex-col justify-between mr-4">
          {images.map((img, i) => (
            <div
              key={i}
              className=" relative w-full h-[24%] rounded-lg overflow-hidden"
            >
              <Image alt="img" src={img} layout="fill" />
            </div>
          ))}
        </div>
        <Carousel>
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
