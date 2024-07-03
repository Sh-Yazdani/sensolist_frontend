"use client";

import { IDashboard } from "@/types/general";
import { Trash } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import DropDownModal from "../UI/DropDownModal";
import { MoreHorizontalIcon, PinIcon } from "../UI/Icons";

interface DashboardCardProps {
  dashboard: IDashboard;
  removeDashboard: (d: IDashboard) => void;
}

export default function DashboardCard({
  dashboard,
  removeDashboard,
}: DashboardCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const pinHandler = () => {
    console.log("pin");
    setIsPopupOpen(false);
  };

  const removeHandler = () => {
    console.log("remove");
    removeDashboard(dashboard);
  };

  return (
    <div
      className="flex bg-exteremly-light-blue dark:bg-primary w-full lg:w-[calc(50%-8px)]
    items-center p-2 rounded-2xl mb-4"
    >
      <div className="h-[84px] w-[84px] relative">
        <Image
          alt={dashboard.name}
          src={dashboard.image || "/assets/dashboard/img-1.png"}
          fill
        />
      </div>
      <div className="flex flex-col h-full justify-between ml-4 flex-1">
        <span className=" text-black text-sm mb-4 dark:text-white capitalize">
          {dashboard.name}
        </span>
        <span className=" text-neutral-7 dark:text-neutral-3 pb-2 text-xs">
          {dashboard.description}
        </span>
      </div>
      <div className="relative w-6 mb-auto md:w-16">
        <div className="w-full hidden md:flex gap-4">
          <button onClick={pinHandler}>
            <PinIcon />
          </button>
          <button onClick={removeHandler}>
            <Trash className=" text-neutral-5" />
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setIsPopupOpen(true);
          }}
        >
          <MoreHorizontalIcon className="dark:text-neutral-5" />
        </button>
        {isPopupOpen && (
          <>
            <DropDownModal
              visible={isPopupOpen}
              onClick={() => setIsPopupOpen(false)}
            />
            <div className="w-[153px] bg-neutral-2 dark:bg-primary-tint-1 absolute right-0 shadow-300 rounded-lg overflow-hidden z-50">
              <button
                onClick={() => {
                  console.log("pin");
                  setIsPopupOpen(false);
                }}
                className="w-full text-neutral-7 dark:text-neutral-3 p-2 flex items-center text-sm border-b border-neutral-5"
              >
                <PinIcon className="pr-2" /> Pin
              </button>
              <button
                onClick={() => {
                  console.log("remove");
                  setIsPopupOpen(false);
                }}
                className="w-full text-neutral-7 dark:text-neutral-3 p-2 flex items-center text-sm"
              >
                <Trash className="pr-2 text-neutral-5" /> Remove
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
