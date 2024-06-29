import { Filter } from "iconsax-react";

export default function FilterComponent() {
  return (
    <button
      className="flex items-center gap-2 ml-4
  border-2 border-neutral-3 rounded-full p-2 text-neutral-7
  dark:border-0 dark:bg-white-opacity-100 dark:text-neutral-3"
    >
      <Filter />
      <span className=" capitalize ">Filters</span>
    </button>
  );
}
