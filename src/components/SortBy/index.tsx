"use client";

import { ArrowDown2 } from "iconsax-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function SortBy() {
  const values: string[] = ["newest", "oldest", "name"];
  const [value, setValue] = useState<string>(values[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    if (!value) setValue(sortParam ? sortParam : values[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("sort", value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="flex items-center relative">
      <span className="hidden lg:flex text-xl mr-2 text-neutral-7 dark:text-neutral-3 whitespace-nowrap">
        Sort By:
      </span>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className=" lg:text-xl text-neutral-7 rounded-full p-2 lg:px-4 lg:py-3
      border-2 border-neutral-3 dark:border-none
      dark:bg-white-opacity-100 dark:text-neutral-3 flex gap-2 min-w-[100px] lg:min-w-[140px]"
      >
        <span className=" capitalize">{value}</span>
        <ArrowDown2 className="ml-auto" />
      </button>
      {isOpen && (
        <div className=" absolute shadow rounded-lg bg-neutral-2 dark:bg-primary w-[153px] lg:w-[200px] overflow-hidden left-0 top-12 lg:top-16 flex flex-col z-20">
          {values.map((val: string, i: number) => (
            <button
              onClick={() => {
                setValue(val);
                setIsOpen(false);
              }}
              key={val}
              className={`py-2 lg:py-4 capitalize text-center text-neutral-7 dark:text-neutral-3
                hover:bg-neutral-3 dark:hover:text-neutral-7
                 ${
                   i !== values.length - 1 &&
                   "border-b border-neutral-4 dark:border-neutral-7"
                 }`}
            >
              {val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
