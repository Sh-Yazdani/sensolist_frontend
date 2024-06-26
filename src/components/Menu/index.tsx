"use client";

import { Cpu, Element3, Home2, Profile, Setting4 } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <div
      className=" absolute rounded-t-2xl flex flex-row lg:flex-col
     bg-primary-tint-1 dark:bg-primary-Shade-2 lg:ml-16
     bottom-0 w-full h-[62px] lg:w-[116px] lg:h-full lg:bg-transparent dark:lg:bg-transparent 
     px-9 pt-2 items-center justify-between lg:justify-start lg:gap-8"
    >
      <Link
        href="/profile"
        className="flex flex-col items-center lg:bg-black-opacity-50
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center"
      >
        <Profile
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname === "/profile" ? "Bold" : undefined}
          color={pathname === "/profile" ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
            hidden lg:flex lg:text-neutral-7 dark:text-white ${
              pathname === "/profile" &&
              "flex lg:text-secondary-main dark:lg:text-secondary-main"
            }`}
        >
          profile
        </div>
      </Link>
      <Link
        href="/myThings"
        className="flex flex-col items-center  lg:bg-black-opacity-50
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center"
      >
        <Cpu
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname === "/myThings" ? "Bold" : undefined}
          color={pathname === "/myThings" ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
            hidden lg:flex lg:text-neutral-7 dark:text-white ${
              pathname === "/myThings" &&
              "flex lg:text-secondary-main dark:lg:text-secondary-main"
            }`}
        >
          my things
        </div>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center lg:bg-black-opacity-50
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center"
      >
        <Home2
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname === "/" ? "Bold" : undefined}
          color={pathname === "/" ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
            hidden lg:flex lg:text-neutral-7 dark:text-white ${
              pathname === "/" &&
              "flex lg:text-secondary-main dark:lg:text-secondary-main"
            }`}
        >
          home
        </div>
      </Link>
      <Link
        href="/dashboard"
        className="flex flex-col items-center lg:bg-black-opacity-50
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center"
      >
        <Element3
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname === "/dashboard" ? "Bold" : undefined}
          color={pathname === "/dashboard" ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
            hidden lg:flex lg:text-neutral-7 dark:text-white ${
              pathname === "/dashboard" &&
              "flex lg:text-secondary-main dark:lg:text-secondary-main"
            }`}
        >
          dashboard
        </div>
      </Link>
      <Link
        href="/settings"
        className="flex flex-col items-center lg:bg-black-opacity-50
        w-[74px] lg:w-[100px] lg:h-[100px] rounded-lg lg:justify-center"
      >
        <Setting4
          className="lg:text-neutral-7 lg:size-10 dark:text-white"
          variant={pathname === "/settings" ? "Bold" : undefined}
          color={pathname === "/settings" ? "#E67F3A" : undefined}
        />
        <div
          className={`text-xs capitalize text-secondary-main lg:text-sm
            hidden lg:flex lg:text-neutral-7 dark:text-white ${
              pathname === "/settings" &&
              "flex lg:text-secondary-main dark:lg:text-secondary-main"
            }`}
        >
          settings
        </div>
      </Link>
    </div>
  );
}
