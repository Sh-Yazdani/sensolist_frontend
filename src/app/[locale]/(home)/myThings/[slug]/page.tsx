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
  return <div>details : {params.slug}</div>;
}
