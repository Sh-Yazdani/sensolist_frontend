"use client";

import { ArrowDown2 } from "iconsax-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import DropDownModal from "../UI/DropDownModal";

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
      <span
        className="hidden lg:flex mr-2 
      text-neutral-7 dark:text-neutral-3 whitespace-nowrap"
      >
        Sort By:
      </span>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className=" text-neutral-7 rounded-full py-2 px-4 lg:py-[11px] text-sm
      border-2 border-neutral-3 dark:border-none
      dark:bg-white-opacity-100 dark:text-neutral-3 flex gap-2 min-w-[100px] lg:min-w-[120px]"
      >
        <span className=" capitalize m-auto">{value}</span>
        <ArrowDown2 className="ml-auto size-5" />
      </button>
      {/* {isOpen && ( */}
      <>
        <DropDownModal
          visible={isOpen}
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div
          className={` absolute shadow rounded-lg bg-neutral-2 dark:bg-primary 
        w-[130px] lg:w-[150px] overflow-hidden right-0 top-12 lg:top-12 flex flex-col z-30
        transition-all duration-500
           ${isOpen ? "visible opacity-100" : " invisible h-0 opacity-0"}`}
        >
          {values.map((val: string, i: number) => (
            <button
              onClick={() => {
                setValue(val);
                setIsOpen(false);
              }}
              key={val}
              className={`py-2 lg:py-2 capitalize text-sm text-center text-neutral-7 dark:text-neutral-3
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
      </>
      {/* )} */}
    </div>
  );
}
