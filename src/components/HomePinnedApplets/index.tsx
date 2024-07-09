import { IApplet } from "@/types/general";
import { Setting4 } from "iconsax-react";
import PinnedAppletCard from "./PinnedAppletCard";

interface HomePinnedAppletesProps {
  appletes: IApplet[];
}

export default function HomePinnedAppletes({
  appletes,
}: HomePinnedAppletesProps) {
  return (
    <div className="flex flex-col w-full rounded-2xl border border-neutral-4 dark:border-primary-tint-2 p-4 overflow-x-auto md:w-[calc(50%-8px)] lg:w-[calc(50%-20px)]">
      <div className="flex items-center">
        <Setting4 className=" text-secondary-main size-6 mr-2" />
        <span className=" text-neutral-8 capitalize dark:text-neutral-2 lg:text-lg">
          Pinned Applets
        </span>
      </div>
      <div className="flex mt-4 lg:mt-10 gap-4 w-fit md:flex-col md:w-full lg:flex-row lg:flex-wrap lg:gap-12">
        {appletes.map((applet: IApplet, i) => (
          <PinnedAppletCard image={applet.image} name={applet.name} key={i} />
        ))}
      </div>
    </div>
  );
}
