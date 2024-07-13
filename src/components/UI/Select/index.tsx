"use client";

import { ISelectOption } from "@/types/general";
import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";
import DropDownModal from "../DropDownModal";

interface SelectProps {
  options: ISelectOption[];
  className?: string;
}

export default function Select({ options, className }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<ISelectOption>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="flex items-center border border-neutral-6 rounded-xl w-full py-2 px-4 justify-between"
      >
        <span className=" whitespace-nowrap">{selectedValue.title}</span>
        <ArrowDown2 className="ml-2 size-4" />
      </button>
      {isOpen && (
        <>
          <div className=" absolute w-full bg-neutral-2 dark:bg-neutral-8 z-50 top-10 rounded-xl border border-neutral-4 dark:text-white">
            {options.map((option, i) => (
              <button
                onClick={() => {
                  setSelectedValue(option);
                  setIsOpen(false);
                }}
                key={option.value}
                className={`${
                  i !== options.length - 1 && "border-b"
                }  border-b-neutral-4 p-2 w-full`}
              >
                {option.title}
              </button>
            ))}
          </div>
          <DropDownModal
            visible={isOpen}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </>
      )}
    </div>
  );
}