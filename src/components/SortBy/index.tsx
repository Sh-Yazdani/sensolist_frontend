"use client";

import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";

export default function SortBy() {
  const values: string[] = ["newest", "oldest", "name"];
  const [value, setValue] = useState<string>(values[0]);
  return (
    <div className="flex items-center">
      <span className="hidden lg:flex text-xl mr-2 text-neutral-7 dark:text-neutral-3">
        Sort By:
      </span>
      <button
        className=" lg:text-xl text-neutral-7 rounded-full p-2 lg:px-4 lg:py-3
      border-2 border-neutral-3 dark:border-none
      dark:bg-white-opacity-100 dark:text-neutral-3 flex gap-2"
      >
        <span className=" capitalize">{value}</span>
        <ArrowDown2 />
      </button>
    </div>
  );
}
