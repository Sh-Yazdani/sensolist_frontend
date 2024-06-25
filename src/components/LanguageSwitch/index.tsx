"use client";

import { ArrowDown2, Global } from "iconsax-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function LanguageSwitch() {
  const { locale } = useParams<{ locale: string }>();
  console.log(locale);
  const locales = [
    { value: "en", title: "English", flag: "/assets/flags/english.svg" },
    { value: "fr", title: "French", flag: "/assets/flags/french.svg" },
    { value: "ru", title: "Russian", flag: "/assets/flags/russian.svg" },
    { value: "es", title: "Spanish", flag: "/assets/flags/spanish.svg" },
  ];
  return (
    <div
      className=" relative flex items-center h-[40px] w-[89px] lg:h-[56px] lg:w-[115px] rounded-full md:ml-4
       dark:text-white md:text-primary-tint-3
   bg-primary-tint-3 dark:bg-white-opacity-100 md:bg-neutral-3 px-3"
    >
      <Global className="w-6 h-6 lg:w-8 lg:h-8" />
      <span className="mx-1 uppercase text-sm lg:text-base">{locale}</span>
      <ArrowDown2 />
      <div
        className=" absolute w-[126px] lg:w-[216px] lg:rounded-lg rounded p-2 lg:py-4
       bg-neutral-2 dark:bg-primary-Shade-1
       top-[50px] lg:top-[66px] right-0"
      >
        {locales.map((loc, i) => (
          <div
            className={`py-1 px-2 lg:py-3 lg:px-4 lg:text-xl flex items-center 
            text-neutral-7 dark:text-neutral-2 ${
              i !== 0 && "border-t border-neutral-4 dark:border-primary-tint-1"
            }`}
            key={loc.value}
          >
            <div className="w-5 h-4 lg:w-7 lg:h-5 relative mr-4 lg:mr-2">
              <Image src={loc.flag} alt="flag" layout="fill" />
            </div>
            {loc.title}
          </div>
        ))}
      </div>
    </div>
  );
}
