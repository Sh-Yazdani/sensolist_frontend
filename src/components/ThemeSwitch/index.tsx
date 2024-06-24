"use client";

import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div className="w-[112px] lg:h-[56px] h-[40px]"></div>;
  }
  return (
    <div
      className="flex w-[112px] shadow rounded-full relative gap-2 justify-around
     dark:bg-white-opacity-100 bg-neutral-3 py-1 lg:py-2.5 px-3"
    >
      <button
        className="z-10"
        onClick={() => {
          setTheme("light");
        }}
      >
        <Sun1 />
      </button>
      <button
        className="z-10"
        onClick={() => {
          setTheme("dark");
        }}
      >
        <Moon className={`${resolvedTheme === "light" && " text-black"}`} />
      </button>
      <div
        className={`absolute dark:bg-white-opacity-200 bg-primary-tint-3
        rounded-full w-[56px] h-[24px] lg:h-[36px] lg:top-1 transition-all
      left-0 ${resolvedTheme === "dark" ? "ml-12" : " ml-1"}`}
      ></div>
    </div>
  );
}
