"use client";

import { getThing } from "@/ApiCall/things";
import ProductDetailsContent from "@/components/ProductDetailsContent";
import ProductDetailsHeader from "@/components/ProductDetailsHeader";
import ProductDetailsGallery from "@/components/ProductDtailsGallery";
import { IThing } from "@/types/general";
import { useEffect, useState } from "react";

const fakeThing = {
  id: "1",
  name: "product’s name",
  model: "product model",
  type: "product type",
  images: [
    "/assets/thing?.jpeg",
    "/assets/thing?.jpeg",
    "/assets/thing?.jpeg",
    "/assets/thing?.jpeg",
  ],
  brand: "brand name",
  actions: "product action",
  charactristics: "product characteristics",
  activationDate: "2023 dec 08",
  description:
    "a short description about the sensor it could be a bit longer like this.  ",
};

// async function getData(id: string) {
//   const thingResponse = await getThing(id);
//   console.log("get thing response", thingResponse);
// }

export default function ProducDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const staticImages = [
    "/assets/things/1.jpg",
    "/assets/things/2.jpg",
    "/assets/things/3.jpg",
    "/assets/things/4.jpg",
  ];
  const [thing, setThing] = useState<IThing>();
  useEffect(() => {
    const getData = async () => {
      const res = await getThing(params.slug);
      console.log("get data, res", res);
      setThing(res.thing);
    };
    getData();
  }, [params.slug]);
  // await getData(params.slug);
  return (
    <div className=" h-full overflow-auto md:overflow-visible ">
      <ProductDetailsHeader />
      <div
        className="flex flex-col px-4 lg:flex-row md:w-fit md:mx-auto
       shadow lg:p-8 md:rounded-2xl bg-neutral-2 dark:bg-transparent md:dark:bg-primary-tint-1"
      >
        <div className=" text-lg lg:hidden mt-4 capitalize dark:text-white">
          {thing?.name}
        </div>
        {/* <div className="lg:hidden text-xs text-neutral-7 dark:text-neutral-4 flex mt-2">
          <span className="mr-2">Activated in:</span>
          <span>{thing?.activationDate}</span>
        </div> */}
        <ProductDetailsGallery images={staticImages} />
        <ProductDetailsContent
          name={thing?.name || ""}
          brand={thing?.brand || ""}
          model={thing?.model || ""}
          type={thing?.type || ""}
          actions={thing?.actions.map((act) => `${act} `).toString() || ""}
          charactristics={thing?.characteristics.toString() || ""}
          // activitionDate={thing?.activationDate}
          description={thing?.description || ""}
        />
      </div>
    </div>
  );
}
