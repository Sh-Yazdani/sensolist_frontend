import { AddSquare } from "iconsax-react";
import Button from "../UI/Button";
import { SimplificationIcon } from "../UI/Icons";

export default function DashboardEmptyState() {
  return (
    <div className=" h-full mt-[200px] flex flex-col items-center">
      <SimplificationIcon className="w-[56px] h-[47px]" />
      <div className="w-[180px] text-neutral-5 text-xs text-center mt-4">
        You haven’t created any dashboard yet!
      </div>
      <Button className="w-[200px] mt-4">
        <AddSquare className="mr-2" />
        Create Dashboard
      </Button>
    </div>
  );
}
