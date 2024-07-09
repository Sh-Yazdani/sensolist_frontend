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
    <div className=" h-full overflow-auto md:overflow-visible">
      <ProductDetailsHeader />
      <div
        className="flex flex-col px-4 lg:flex-row md:w-fit md:mx-auto
       shadow lg:p-8 md:rounded-2xl bg-neutral-2 dark:bg-primary-tint-1"
      >
        <div className=" text-lg lg:hidden mt-4 capitalize dark:text-white">
          {fakeThing.name}
        </div>
        <div className="lg:hidden text-xs text-neutral-7 dark:text-neutral-4 flex mt-2">
          <span className="mr-2">Activated in:</span>
          <span>{fakeThing.activationDate}</span>
        </div>
        <ProductDetailsGallery images={fakeThing.images} />
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
