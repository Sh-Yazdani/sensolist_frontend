import FilterComponent from "@/components/Filter";
import MyThingCard from "@/components/MyThingCard";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { IThings } from "@/types/general";

export const fakeThings: IThings[] = [
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
const backendUrl = process.env.BACKEND_URL;

async function getData() {
  console.log("res", `${backendUrl}/things?sort=0`);
  // const res = await fetch(`${backendUrl}/things?sort=0`);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log("data things", data);
  return (
    <div className=" flex flex-col">
      <div className="md:relative flex lg:flex-row-reverse justify-end items-center lg:items-baseline md:pr-8 px-4 md:pl-0">
        <SearchBar />
        <div className="lg:hidden">
          <FilterComponent />
        </div>
        <SortBy />
      </div>
      <div className="flex ">
        <div className="mt-4 flex flex-col md:flex-row flex-wrap flex-1">
          {fakeThings.map((thing) => (
            <MyThingCard key={thing.id} thing={thing} />
          ))}
        </div>
        <div className="hidden lg:flex">
          <FilterComponent />
        </div>
      </div>
    </div>
  );
}
