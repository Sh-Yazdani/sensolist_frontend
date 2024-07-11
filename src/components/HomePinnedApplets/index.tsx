"use client";

import { RootState } from "@/lib/store";
import { IApplet } from "@/types/general";
import { Setting4 } from "iconsax-react";
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
     p-4 overflow-x-auto md:w-[calc(50%-8px)] lg:w-[calc(50%-20px)]"
    >
      <div className="flex items-center">
        <Setting4 className=" text-secondary-main size-6 mr-2" />
        <span className=" text-neutral-8 capitalize dark:text-neutral-2 lg:text-lg">
          Pinned Applets
        </span>
      </div>
      <div className="flex mt-4 lg:mt-10 gap-4 w-fit md:flex-col md:w-full lg:flex-row lg:flex-wrap m-auto">
        {pinnedApplets.length ? (
          pinnedApplets.map((applet: IApplet, i) => (
            <PinnedAppletCard image={applet.image} name={applet.name} key={i} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
