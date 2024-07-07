import { SearchNormal } from "iconsax-react";

export default function SearchBar() {
  return (
    <div
      className="absolute md:static bg-primary-Shade-2 md:bg-transparent
       w-full pb-6 md:pb-0 left-0 top-[-16px] pt-4 md:pt-0 rounded-b-xl px-4 md:px-0
    md:w-[300px] md:ml-auto lg:ml-8"
    >
      <div className="w-full relative lg:h-full">
        <input
          placeholder="search"
          className="w-full rounded-full bg-white-opacity-100 h-[40px] pl-10
         placeholder:text-sm placeholder:text-neutral-4 placeholder:capitalize
          focus-visible:outline-none text-neutral-2
           md:border-2 md:border-neutral-3
           md:placeholder:text-neutral-7
           lg:h-full lg:text-neutral-8
           dark:md:border-0 dark:md:placeholder:text-neutral-6"
        />
        <SearchNormal
          className="absolute text-neutral-4 top-3 lg:top-4 left-4 md:text-neutral-7 size-4
        dark:md:text-neutral-6"
        />
      </div>
    </div>
  );
}
