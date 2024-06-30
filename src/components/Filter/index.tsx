"use client";

import { ArrowDown2, Filter } from "iconsax-react";
import { useState } from "react";
import Checkbox from "../Checkbox";

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
        className="flex xl:hidden items-center gap-2 ml-4
  border-2 border-neutral-3 rounded-full p-2 text-neutral-7
  dark:border-0 dark:bg-white-opacity-100 dark:text-neutral-3"
      >
        <Filter />
        <span className=" capitalize ">Filters</span>
      </button>
      {/* {isOpen && ( */}
      <div
        className={`flex-col absolute rounded-t-2xl shadow-300 max-w-[800px]
        w-[96%] mr-[2%] right-0 z-10 bg-white mt-12 md:mt-16 px-4
         xl:max-w-[320px] xl:h-[650px] xl:!shadow-none xl:rounded-xl xl:border xl:border-primary-tint-3 xl:mt-0
         dark:bg-black
        ${isOpen ? "flex " : "hidden xl:flex"}`}
      >
        <div className="h-2 rounded-full mt-4 mx-auto w-[120px] md:w-[180px] bg-neutral-6 xl:hidden dark:bg-neutral-8"></div>
        <div className="hidden xl:flex pt-6 justify-between items-center">
          <div className="flex gap-2 items-center text-[24px] text-black dark:text-white">
            <Filter className=" size-6" />
            <span>Filters</span>
          </div>
          <button
            onClick={() => {
              setSelectedOptions([]);
            }}
            className=" capitalize text-neutral-6"
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
                  className={`py-4 md: xl:py-8 text-xl capitalize flex items-center justify-between 
                     text-neutral-8 dark:text-neutral-2
                    ${
                      visibleOptions?.title !== filterOption.title
                        ? i !== filterOptions.length - 1 &&
                          "border-b border-neutral-6 dark:border-neutral-7"
                        : ""
                    }`}
                  key={filterOption.title}
                >
                  <span>{filterOption.title}</span>
                  <ArrowDown2 />
                </button>
                <div
                  className={`flex flex-col transition-all
                    ${
                      visibleOptions?.title === filterOption.title
                        ? " mt-6 visible"
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
      {/* )} */}
    </>
  );
}
