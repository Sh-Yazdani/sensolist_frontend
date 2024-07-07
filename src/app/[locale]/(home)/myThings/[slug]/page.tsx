import ProductDetailsContent from "@/components/ProductDetailsContent";
import ProductDetailsHeader from "@/components/ProductDetailsHeader";
import ProductDetailsGallery from "@/components/ProductDtailsGallery";

const fakeThing = {
  id: "1",
  name: "product’s name",
  model: "product model",
  type: "product type",
  images: [
    "/assets/thing.jpeg",
    "/assets/thing.jpeg",
    "/assets/thing.jpeg",
    "/assets/thing.jpeg",
  ],
  brand: "brand name",
  actions: "product action",
  charactristics: "product characteristics",
  activationDate: "2023 dec 08",
  description:
    "a short description about the sensor it could be a bit longer like this.  ",
};

export default function ProducDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className=" h-full overflow-auto">
      <ProductDetailsHeader />
      <div className="flex flex-col px-4 xl:flex-row">
        {/* <div className="xl:w-1/2 bg-error"> */}
        <ProductDetailsGallery images={fakeThing.images} />
        {/* </div> */}
        <ProductDetailsContent
          name={fakeThing.name}
          brand={fakeThing.brand}
          model={fakeThing.model}
          type={fakeThing.type}
          actions={fakeThing.actions}
          charactristics={fakeThing.charactristics}
          activitionDate={fakeThing.activationDate}
          description={fakeThing.description}
        />
      </div>
    </div>
  );
}
