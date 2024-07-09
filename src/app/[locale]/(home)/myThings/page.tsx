import FilterComponent from "@/components/Filter";
import MyThingCard from "@/components/MyThingCard";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { IThings } from "@/types/general";

const fakeThings: IThings[] = [
  {
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
  },
  {
    id: "2",
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
  },
  {
    id: "3",
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
  },
  {
    id: "4",
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
  },
  {
    id: "5",
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
  },
  {
    id: "6",
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
  },
];

export default function Page() {
  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4 md:mt-[100px] lg:mt-[120px]">
      <div className="md:relative flex flex-row-reverse justify-end">
        <SearchBar />
        <FilterComponent />
        <SortBy />
      </div>
      <div className="mt-4 flex flex-col md:flex-row flex-wrap lg:mr-[252px]">
        {fakeThings.map((thing) => (
          <MyThingCard key={thing.id} thing={thing} />
        ))}
      </div>
    </div>
  );
}
