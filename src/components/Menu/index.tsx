"use client";

import {
  Cpu,
  Element3,
  Home2,
  LogoutCurve,
  Profile,
  Setting4,
} from "iconsax-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();

  const router = useRouter();
  console.log("locale", locale);
  return (
    <div
      className=" absolute rounded-t-2xl flex flex-row lg:flex-col
     bg-primary-tint-1 dark:bg-primary-Shade-2 lg:ml-16
     bottom-0 w-full h-[62px] lg:w-[116px] lg:h-full lg:bg-transparent dark:lg:bg-transparent 
     px-9 pt-2 items-center justify-between lg:justify-start lg:gap-8"
    >
      <button
        onClick={() => {
          router.push(`/${locale}/profile`);
        }}
        className={` flex flex-col items-center lg:bg-black-opacity-50 order-1 lg:order-5
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center
        ${
          pathname.includes("/profile")
            ? "dark:lg:bg-white-opacity-200"
            : "dark:lg:bg-white-opacity-30"
        }`}
      >
        <Profile
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname.includes("/profile") ? "Bold" : undefined}
          color={pathname.includes("/profile") ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
             lg:text-neutral-7 dark:text-white ${
               pathname.includes("/profile")
                 ? "flex lg:text-secondary-main dark:lg:text-secondary-main"
                 : "hidden lg:flex"
             }`}
        >
          {t("profile")}
        </div>
      </button>
      <button
        onClick={() => {
          router.push(`/${locale}/myThings`);
        }}
        className={` flex flex-col items-center  lg:bg-black-opacity-50 order-2
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center
        ${
          pathname.includes("/myThings")
            ? "dark:lg:bg-white-opacity-200"
            : "dark:lg:bg-white-opacity-30"
        }`}
      >
        <Cpu
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname.includes("/myThings") ? "Bold" : undefined}
          color={pathname.includes("/myThings") ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
             lg:text-neutral-7 dark:text-white ${
               pathname.includes("/myThings")
                 ? "flex lg:text-secondary-main dark:lg:text-secondary-main"
                 : "hidden lg:flex"
             }`}
        >
          {t("my-things")}
        </div>
      </button>
      <button
        onClick={() => {
          router.push(`/${locale}`);
        }}
        className={` flex flex-col items-center lg:bg-black-opacity-50 order-3 lg:order-1
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center
        ${
          pathname === `/${locale === "en" ? "" : locale}`
            ? "dark:lg:bg-white-opacity-200"
            : "dark:lg:bg-white-opacity-30"
        }`}
      >
        <Home2
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={
            pathname === `/${locale === "en" ? "" : locale}`
              ? "Bold"
              : undefined
          }
          color={
            pathname === `/${locale === "en" ? "" : locale}`
              ? "#E67F3A"
              : undefined
          }
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
             lg:text-neutral-7 dark:text-white ${
               pathname === `/${locale === "en" ? "" : locale}`
                 ? "flex lg:text-secondary-main dark:lg:text-secondary-main"
                 : "hidden lg:flex"
             }`}
        >
          {t("home")}
        </div>
      </button>
      <button
        onClick={() => {
          router.push(`/${locale}/dashboard`);
        }}
        className={` flex flex-col items-center lg:bg-black-opacity-50 order-4 lg:order-3
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center
        ${
          pathname.includes("/dashboard")
            ? "dark:lg:bg-white-opacity-200"
            : "dark:lg:bg-white-opacity-30"
        }`}
      >
        <Element3
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname.includes("/dashboard") ? "Bold" : undefined}
          color={pathname.includes("/dashboard") ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
             lg:text-neutral-7 dark:text-white ${
               pathname.includes("/dashboard")
                 ? "flex lg:text-secondary-main dark:lg:text-secondary-main"
                 : "hidden lg:flex"
             }`}
        >
          {t("dashboard")}
        </div>
      </button>
      <button
        onClick={() => {
          router.push(`/${locale}/settings`);
        }}
        className={` flex flex-col items-center lg:bg-black-opacity-50 order-5 lg:order-3
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center
        ${
          pathname.includes("/settings")
            ? "dark:lg:bg-white-opacity-200"
            : "dark:lg:bg-white-opacity-30"
        }`}
      >
        <Setting4
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname.includes("/settings") ? "Bold" : undefined}
          color={pathname.includes("/settings") ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
            lg:text-neutral-7 dark:text-white ${
              pathname.includes("/settings")
                ? "flex lg:text-secondary-main dark:lg:text-secondary-main"
                : " hidden lg:flex"
            }`}
        >
          {t("applets")}
        </div>
      </button>
      <button className="hidden lg:flex flex-col items-center order-6">
        <LogoutCurve size={40} color="#DF2040" />
        <div className=" capitalize dark:text-neutral-4 text-neutral-7 whitespace-nowrap">
          log out
        </div>
      </button>
    </div>
  );
}
