"use client";

import { ArrowDown2, ArrowUp2, Filter } from "iconsax-react";
import { useState } from "react";
import Checkbox from "../Checkbox";
import DropDownModal from "../UI/DropDownModal";

export default function FilterComponent() {
  const filterOptions: {
    title: string;
    options: { value: string; title: string }[];
  }[] = [
    {
      title: "brand",
      options: [
        { title: "option 1", value: "option1" },
        { title: "option 2", value: "option2" },
        { title: "option 3", value: "option3" },
      ],
    },
    {
      title: "type",
      options: [
        { title: "option 1", value: "option1" },
        { title: "option 2", value: "option2" },
        { title: "option 3", value: "option3" },
      ],
    },
    {
      title: "actions",
      options: [
        { title: "option 1", value: "option1" },
        { title: "option 2", value: "option2" },
        { title: "option 3", value: "option3" },
      ],
    },
    {
      title: "charactristics",
      options: [
        { title: "option 1", value: "option1" },
        { title: "option 2", value: "option2" },
        { title: "option 3", value: "option3" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visibleOptions, setVisibleOptions] = useState<{
    title: string;
    options: { value: string; title: string }[];
  } | null>();
  const [selectedOptions, setSelectedOptions] = useState<
    { filterTitle: string; option: string }[]
  >([]);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex lg:hidden items-center gap-2 mx-2 relative h-[36px]
  border-2 border-neutral-3 rounded-xl lg:rounded-full p-2 text-neutral-7 min-w-[36px] justify-center
  dark:border-0 dark:bg-white-opacity-100 dark:text-neutral-3 text-sm"
      >
        <Filter className="size-4" />
        <span className=" capitalize hidden lg:flex">Filters</span>
      </button>
      <DropDownModal
        visible={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div
        className={`flex-col absolute rounded-t-2xl shadow-300 max-w-[400px]
        w-[96%] bg-white mt-12 md:mt-12 px-4 lg:right-0 top-2
         lg:w-[264px] lg:h-fit lg:rounded-xl lg:dark:shadow-white-opacity-200 lg:shadow lg:mt-0
         dark:bg-black flex transition-all duration-500
         left-0 right-0 mx-auto md:left-[unset] md:right-[unset] md:mx-0
        ${
          isOpen
            ? "visible opacity-100 z-30"
            : " invisible h-0 opacity-0 lg:visible lg:opacity-100"
        }`}
      >
        <div
          className="h-2 rounded-full mt-4 mx-auto w-[120px] md:w-[180px] 
        bg-neutral-6 lg:hidden dark:bg-neutral-8"
        ></div>
        <div className="hidden lg:flex pt-6 justify-between items-center">
          <div className="flex gap-2 items-center text-lg text-black dark:text-white">
            <Filter className=" size-5" />
            <span>Filters</span>
          </div>
          <button
            onClick={() => {
              setSelectedOptions([]);
            }}
            className=" capitalize text-neutral-6 text-sm"
          >
            remove all
          </button>
        </div>
        <div className="w-full my-8 flex flex-col">
          {filterOptions.map((filterOption, i) => {
            return (
              <div key={filterOption.title} className="w-full flex flex-col">
                <button
                  onClick={() => {
                    setVisibleOptions(
                      filterOption.title === visibleOptions?.title
                        ? null
                        : filterOption
                    );
                  }}
                  className={`py-4 md: lg:4 capitalize flex items-center justify-between 
                     text-neutral-8 dark:text-neutral-2 text-sm
                    ${
                      visibleOptions?.title !== filterOption.title
                        ? i !== filterOptions.length - 1 &&
                          "border-b border-neutral-6 dark:border-neutral-7"
                        : ""
                    }`}
                  key={filterOption.title}
                >
                  <span>{filterOption.title}</span>
                  {visibleOptions?.title === filterOption.title ? (
                    <ArrowUp2 className=" size-4" />
                  ) : (
                    <ArrowDown2 className=" size-4" />
                  )}
                </button>
                <div
                  className={`flex flex-col transition-all
                    ${
                      visibleOptions?.title === filterOption.title
                        ? " mt-0 visible"
                        : " invisible h-0 m-0"
                    }`}
                >
                  {filterOption.options.map((option, i) => (
                    <div
                      key={option.value}
                      className={` capitalize pb-2 flex py-3 dark:text-neutral-3
                        ${
                          visibleOptions
                            ? i !== visibleOptions?.options.length - 1 &&
                              " border-b border-neutral-5 dark:border-neutral-8"
                            : ""
                        }`}
                    >
                      <Checkbox
                        isChecked={
                          selectedOptions.filter(
                            (selected) =>
                              selected.filterTitle === filterOption.title &&
                              selected.option === option.value
                          ).length
                            ? true
                            : false
                        }
                        onChange={(checked: boolean) => {
                          if (checked) {
                            setSelectedOptions((prev) => [
                              ...prev.filter(
                                (prevOption) =>
                                  prevOption.option !== option.value
                              ),
                            ]);
                          } else {
                            setSelectedOptions((prev) => [
                              ...prev,
                              {
                                filterTitle: filterOption.title,
                                option: option.value,
                              },
                            ]);
                          }
                        }}
                        title={option.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
