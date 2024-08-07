import { fakeThings } from "@/constants/fakeThings";
import { ArrowCircleRight2, Cpu } from "iconsax-react";
import Link from "next/link";
import MyThings from "./MyThingsCard";

export default function HomeMyThings() {
  return (
    <div
      className="flex flex-col w-full rounded-2xl bg-black-opacity-50 dark:bg-white-opacity-50
   p-4 overflow-x-auto h-1/2"
    >
      <div className="flex items-center">
        <Cpu className=" text-secondary-main size-6 mr-2" />
        <span className=" text-neutral-8 capitalize dark:text-neutral-2 lg:text-lg">
          My things
        </span>
      </div>
      <div className="flex mt-4 gap-4 w-fit m-auto h-3/4 min-w-full text-neutral-7 dark:text-neutral-4">
        {fakeThings.length ? (
          <>
            {fakeThings.map((thing, i) => (
              <MyThings
                key={thing.id}
                name={thing.name}
                image={thing.images[0]}
              />
            ))}

            <Link
              href="/myThings"
              className=" flex flex-col justify-center items-center ml-auto"
            >
              <ArrowCircleRight2 />
              <span className=" capitalize whitespace-nowrap text-sm">
                view all
              </span>
            </Link>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
