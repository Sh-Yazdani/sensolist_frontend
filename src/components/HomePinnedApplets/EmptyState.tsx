import { ArrowRight } from "iconsax-react";
import Button from "../UI/Button";
import { SimplificationIcon } from "../UI/Icons";

export default function EmptyState() {
  return (
    <div className=" h-fit flex flex-col items-center m-auto mt-[100px]">
      <SimplificationIcon className="w-[56px] h-[47px] md:w-[80px] md:h-[67px] lg:w-[112px] lg:h-[94px]" />
      <div
        className="w-[180px] text-neutral-5 text-xs text-center mt-4 
  md:text-base md:w-[330px] md:mt-6 lg:w-[370px] dark:text-neutral-6"
      >
        You haven’t pinned any applet yet!
      </div>
      <Button href={"/applets"} className="w-[200px] mt-4 md:w-[240px] md:mt-6">
        Go to Appletss <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
}
