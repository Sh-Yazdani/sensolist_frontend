import { IThings } from "@/types/general";
import Image from "next/image";

interface MyThingCardProps {
  thing: IThings;
}

export default function MyThingCard({ thing }: MyThingCardProps) {
  return (
    <div className="w-[calc(50%-8px)] shadow-300 rounded-2xl overflow-hidden flex flex-col mb-4">
      <div className="w-full aspect-[3/2] relative">
        <Image
          src={thing.images[0] || "/assets"}
          layout="fill"
          alt={thing.name}
        />
      </div>
      <div className="flex flex-col p-2">
        <div className=" text-neutral-8 text-sm capitalize text-start font-medium">
          {thing.name}
        </div>
        <div className="mt-[18px] text-neutral-7 text-xs">{thing.model}</div>
        <div className="mt-1 text-neutral-7 text-xs">{thing.type}</div>
      </div>
    </div>
  );
}
