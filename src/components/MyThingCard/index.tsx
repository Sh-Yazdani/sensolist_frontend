import { _IThings } from "@/types/general";
import Image from "next/image";
import Link from "next/link";

interface MyThingCardProps {
  thing: _IThings;
}

export default function MyThingCard({ thing }: MyThingCardProps) {
  return (
    <Link
      href={`/myThings/${thing.id}`}
      className="w-full md:w-[calc(50%-24px)] mx-auto md:mx-[unset] md:mr-4 lg:w-[calc(33%-24px)] xl:w-[calc(25%-24px)] 2xl:w-[calc(20%-24px)] 
      max-w-[280px] md:max-w-[unset]
       dark:shadow-white-opacity-200 shadow dark:bg-primary-Shade-2 rounded-2xl 
      overflow-hidden flex flex-col mb-4 
      hover:border-2 hover:border-secondary-main hover:animate-pulse"
    >
      <div className="w-full aspect-[3/2] relative">
        <Image
          src={thing.images[0] || "/assets"}
          layout="fill"
          alt={thing.name}
        />
      </div>
      <div className="flex flex-col p-5">
        <div className=" text-neutral-8 text-sm capitalize text-start font-medium dark:text-neutral-3">
          {thing.name}
        </div>
        <div className="mt-[18px] text-neutral-7 text-xs dark:text-neutral-5">
          {thing.model}
        </div>
        <div className="mt-1 text-neutral-7 text-xs dark:text-neutral-5">
          {thing.type}
        </div>
      </div>
    </Link>
  );
}
