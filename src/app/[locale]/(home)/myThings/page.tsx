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
  },
];

export default function Page() {
  return (
    <div className=" flex flex-col pt-20 lg:pt-0 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <SearchBar />
        <FilterComponent />
        <SortBy />
      </div>
      <div className="mt-4 flex flex-wrap justify-between xl:mr-[360px]">
        {fakeThings.map((thing) => (
          <MyThingCard key={thing.id} thing={thing} />
        ))}
      </div>
    </div>
  );
}
