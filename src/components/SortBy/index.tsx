"use client";

import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";

export default function SortBy() {
  const values: string[] = ["newest", "oldest", "name"];
  const [value, setValue] = useState<string>(values[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center relative">
      <span className="hidden lg:flex text-xl mr-2 text-neutral-7 dark:text-neutral-3">
        Sort By:
      </span>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className=" lg:text-xl text-neutral-7 rounded-full p-2 lg:px-4 lg:py-3
      border-2 border-neutral-3 dark:border-none
      dark:bg-white-opacity-100 dark:text-neutral-3 flex gap-2"
      >
        <span className=" capitalize">{value}</span>
        <ArrowDown2 />
      </button>
      {isOpen && (
        <div className=" absolute shadow rounded-lg bg-neutral-2 dark:bg-primary w-[153px] lg:w-[200px] overflow-hidden left-0 top-12 lg:top-16">
          {values.map((val: string, i: number) => (
            <div
              key={val}
              className={`py-2 lg:py-4 capitalize text-center text-neutral-7 dark:text-neutral-3 ${
                i !== values.length - 1 &&
                "border-b border-neutral-4 dark:border-neutral-7"
              }`}
            >
              {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
