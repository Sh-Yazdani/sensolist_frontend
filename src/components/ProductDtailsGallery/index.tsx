"use client";

import "keen-slider/keen-slider.min.css";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsGalleryProps {
  images: string[];
}

export default function ProductDetailsGallery({
  images,
}: ProductDetailsGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: { origin: "center", perView: 1, spacing: 10 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );
  return (
    <div className="w-[60%] flex">
      <div className="w-[25%] h-full xl:flex flex-col gap-2 pr-4 hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-[21%] aspect-[6/5] rounded-lg overflow-hidden"
          >
            <Image src={img} alt="img" layout="fill" />
          </div>
        ))}
      </div>
      <div className="w-full xl:w-[75%] mx-auto">
        <div className="relative mx-auto max-w-[440px] xl:max-w-none">
          <div ref={sliderRef} className="keen-slider mx-auto xl:aspect-square">
            {images.map((img, i) => (
              <div key={i} className="keen-slider__slide">
                <div className=" w-full aspect-square relative rounded-lg overflow-hidden">
                  <Image src={img} alt="img" layout="fill" />
                </div>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots xl:hidden">
              {images.map((_img, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    // set to auto first to allow for new layout measurements
    slider.container.style.height = "auto";
    // apply the full offsetHeight to the slider
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("updated", updateHeight);
  slider.on("slideChanged", updateHeight);
};
