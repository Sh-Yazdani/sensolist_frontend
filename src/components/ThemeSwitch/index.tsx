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
    return <div className="w-[112px] h-[40px]"></div>;
  }
  return (
    <div
      className="hidden md:flex w-[80px] h-[32px]  
      shadow rounded-full relative gap-2 justify-around
     dark:bg-white-opacity-100 bg-neutral-3 py-0.5 px-3"
    >
      <button
        className="z-10"
        onClick={() => {
          setTheme("light");
        }}
      >
        <Sun1 className=" size-5" />
      </button>
      <button
        className="z-10"
        onClick={() => {
          setTheme("dark");
        }}
      >
        <Moon
          className={`${resolvedTheme === "light" && " text-black"} size-5`}
        />
      </button>
      <div
        className={`absolute dark:bg-white-opacity-200 bg-primary-tint-3
        rounded-full w-[36px] h-[26px] transition-all
      left-0 ${resolvedTheme === "dark" ? "ml-9" : " ml-1.5"}`}
      ></div>
    </div>
  );
}
