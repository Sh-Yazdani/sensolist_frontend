"use client";

import { IDashboard } from "@/types/general";
import { Edit2, Trash } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PinIcon, PinnedIcon } from "../UI/Icons";

interface DashboardCardProps {
  dashboard: IDashboard;
  removeDashboard: (d: IDashboard) => void;
  pinDashboard: (d: IDashboard) => void;
  unPinDashboard: (d: IDashboard) => void;
  editDashboard: (d: IDashboard) => void;
}

export default function DashboardCard({
  dashboard,
  removeDashboard,
  pinDashboard,
  unPinDashboard,
  editDashboard,
}: DashboardCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const pinHandler = () => {
    pinDashboard(dashboard);
    setIsPopupOpen(false);
  };

  const unPinHandler = () => {
    unPinDashboard(dashboard);
    setIsPopupOpen(false);
  };

  const removeHandler = () => {
    console.log("remove");
    removeDashboard(dashboard);
  };

  const editHandler = () => {
    editDashboard(dashboard);
  };

  return (
    <div
      className={`flex bg-exteremly-light-blue dark:bg-primary 
        w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] xl:w-[calc(25%-20px)] 2xl:w-[calc(20%-20px)]
       max-w-[320px] mx-auto md:mx-[unset]
    items-center p-4 rounded-2xl mb-4 ${dashboard.pin ? "order-0" : "order-2"}`}
    >
      <Link
        className="flex w-[96%] items-center"
        href={`/dashboard/${dashboard.id}`}
      >
        <div className="h-[84px] w-[84px] relative">
          <Image
            alt={dashboard.name}
            src={dashboard.image || "/assets/dashboard/img-1.png"}
            fill
          />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <span className=" text-black text-sm mb-4 dark:text-white capitalize truncate w-full">
            {dashboard.name}
          </span>
          <span className=" text-neutral-7 dark:text-neutral-3 pb-2 text-xs truncate w-full">
            {dashboard.description}
          </span>
        </div>
      </Link>
      <div className="relative w-6 mb-auto md:w-6">
        <div className="w-full flex gap-2 z-20 flex-col">
          <button onClick={dashboard.pin ? unPinHandler : pinHandler}>
            {dashboard.pin ? (
              <PinnedIcon className="size-4" />
            ) : (
              <PinIcon className="size-4" />
            )}
          </button>
          <button onClick={editHandler}>
            <Edit2 className=" text-neutral-5 size-4" />
          </button>
          <button onClick={removeHandler}>
            <Trash className=" text-neutral-5 size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
