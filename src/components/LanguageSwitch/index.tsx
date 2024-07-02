"use client";

import { ArrowDown2, Global } from "iconsax-react";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "../../../i18nConfig";
import DropDownModal from "../UI/DropDownModal";

export default function LanguageSwitch() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const router = useRouter();
  // console.log(pathname);
  const locales = [
    { value: "en", title: t("english"), flag: "/assets/flags/english.svg" },
    { value: "fr", title: t("french"), flag: "/assets/flags/french.svg" },
    { value: "ru", title: t("russian"), flag: "/assets/flags/russian.svg" },
    { value: "es", title: t("spanish"), flag: "/assets/flags/spanish.svg" },
  ];
  return (
    <button
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      className="relative flex items-center h-[40px] w-[89px] rounded-full md:ml-4
       dark:text-white md:text-primary-tint-3
   bg-primary-tint-3 dark:bg-white-opacity-100 md:bg-neutral-3 px-3"
    >
      <Global className="w-6 h-6 lg:w-8 lg:h-8" />
      <span className="mx-1 uppercase text-sm lg:text-base">{locale}</span>
      <ArrowDown2 />
      {/* {isOpen && ( */}
      <>
        <DropDownModal
          visible={isOpen}
          onClick={() => {
            () => {
              setIsOpen(false);
            };
          }}
        />
        <div
          className={` absolute w-[200px] lg:rounded-lg rounded z-50
       bg-neutral-2 dark:bg-primary-Shade-1
       top-[50px] right-0 transition-all duration-500
        ${
          isOpen
            ? "visible opacity-100 p-2"
            : " invisible h-0 opacity-0 lg:visible lg:opacity-100"
        }`}
        >
          {locales.map((loc, i) => (
            <button
              onClick={() => {
                if (locale === i18nConfig.defaultLocale) {
                  router.push("/" + loc.value + pathname);
                } else {
                  const newPath = pathname.replace(
                    `/${locale}`,
                    `/${loc.value}`
                  );
                  router.push(newPath);
                }
                // router.replace(`/${loc.value}${pathname}`);
              }}
              className={`py-1 px-2 flex items-center w-full
            text-neutral-7 dark:text-neutral-2 ${
              i !== 0 && "border-t border-neutral-4 dark:border-primary-tint-1"
            } ${isOpen ? " visible" : " invisible h-0 p-0 hidden"}`}
              key={loc.value}
            >
              <div className="w-5 h-4 relative mr-4 lg:mr-2">
                <Image src={loc.flag} alt="flag" layout="fill" />
              </div>
              {loc.title}
            </button>
          ))}
        </div>
      </>
    </button>
  );
}
