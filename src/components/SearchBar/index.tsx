import { SearchNormal } from "iconsax-react";

export default function SearchBar() {
  return (
    <div className="absolute bg-primary-Shade-2 w-full pb-6 left-0 top-[-16px] pt-4 rounded-b-xl px-4">
      <div className="w-full relative">
        <input
          placeholder="search"
          className="w-full rounded-full bg-white-opacity-100 h-[40px] pl-16
         placeholder:text-sm placeholder:text-neutral-4 placeholder:capitalize
          focus-visible:outline-none text-neutral-2"
        />
        <SearchNormal className="absolute text-neutral-4 top-2 left-8" />
      </div>
    </div>
  );
}
