"use client";

import { RootState } from "@/lib/store";
import { IApplet } from "@/types/general";
import { ArrowCircleRight2, Setting4 } from "iconsax-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import EmptyState from "./EmptyState";
import PinnedAppletCard from "./PinnedAppletCard";

// interface HomePinnedAppletesProps {
//   appletes: IApplet[];
// }

export default function HomePinnedAppletes() {
  const { pinnedApplets } = useSelector(
    (state: RootState) => state.appletSlice
  );
  return (
    <div
      className="flex flex-col w-full rounded-2xl bg-black-opacity-50 dark:bg-white-opacity-50
     p-4 overflow-x-auto h-1/2"
    >
      <div className="flex items-center">
        <Setting4 className=" text-secondary-main size-6 mr-2" />
        <span className=" text-neutral-8 capitalize dark:text-neutral-2 lg:text-lg">
          Pinned Applets
        </span>
      </div>
      <div className="flex mt-4 gap-4 w-fit m-auto h-full min-w-full text-neutral-7 dark:text-neutral-4">
        {pinnedApplets.length ? (
          <>
            {pinnedApplets.map((applet: IApplet, i) => (
              <PinnedAppletCard
                image={applet.image}
                name={applet.name}
                key={i}
              />
            ))}
            <Link
              href="/applets"
              className=" flex flex-col justify-center items-center ml-auto"
            >
              <ArrowCircleRight2 />
              <span className=" capitalize whitespace-nowrap text-sm">
                view all
              </span>
            </Link>
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
