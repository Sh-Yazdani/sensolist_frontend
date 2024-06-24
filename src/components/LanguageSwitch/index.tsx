import { Global } from "iconsax-react";

export default function LanguageSwitch() {
  return (
    <div
      className=" flex items-center h-[40px] w-[89px] lg:h-[56px] lg:w-[115px] rounded-full md:ml-4
   bg-primary-tint-3 dark:bg-white-opacity-100 md:bg-neutral-3 px-3"
    >
      <Global className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white md:text-primary-tint-3" />
    </div>
  );
}
