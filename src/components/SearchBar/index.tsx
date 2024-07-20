import { SearchNormal } from "iconsax-react";

export default function SearchBar() {
  return (
    <div
      className="static md:bg-transparent mr-auto lg:ml-4
       w-full md:pb-0 left-0 top-[-16px] md:pt-0 rounded-b-xl px-0
    md:w-[300px]"
    >
      <div className="w-full relative lg:h-full">
        <input
          placeholder="search"
          className="w-full rounded-full bg-white-opacity-100 h-[40px] pl-10
         placeholder:text-sm placeholder:text-neutral-4 placeholder:capitalize
          focus-visible:outline-none dark:text-neutral-2
           border-2 md:border-neutral-3
           md:placeholder:text-neutral-7
            text-neutral-8
           dark:md:border-0 dark:md:placeholder:text-neutral-6"
        />
        <SearchNormal
          className="absolute text-neutral-4 top-3 left-4 md:text-neutral-7 size-4
        dark:md:text-neutral-6"
        />
      </div>
    </div>
  );
}
