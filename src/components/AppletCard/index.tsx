"use client";

import { IApplet } from "@/types/general";
import { Edit2, Trash } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PinIcon, PinnedIcon } from "../UI/Icons";

interface AppletCardProps {
  applet: IApplet;
  removeApplet: (d: IApplet) => void;
  pinApplet: (d: IApplet) => void;
  unPinApplet: (d: IApplet) => void;
  editApplet: (d: IApplet) => void;
}

export default function AppletCard({
  applet,
  removeApplet,
  pinApplet,
  unPinApplet,
  editApplet,
}: AppletCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const pinHandler = () => {
    pinApplet(applet);
    setIsPopupOpen(false);
  };

  const unPinHandler = () => {
    unPinApplet(applet);
    setIsPopupOpen(false);
  };

  const removeHandler = () => {
    console.log("remove");
    removeApplet(applet);
  };
  const editHandler = () => {
    editApplet(applet);
  };
  return (
    <div
      className={`flex bg-exteremly-light-blue dark:bg-primary 
        w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] xl:w-[calc(25%-20px)] 2xl:w-[calc(20%-20px)]
        max-w-[320px] mx-auto md:mx-[unset]
    items-center p-2 rounded-2xl mb-4 ${applet.pin ? "order-0" : "order-2"}`}
    >
      <Link
        className="flex w-[96%] items-center"
        href={`/applets/${applet.id}`}
      >
        <div className="h-[84px] w-[84px] relative">
          <Image
            alt={applet.name}
            src={applet.image || "/assets/dashboard/img-1.png"}
            fill
          />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <span className=" text-black text-sm mb-4 dark:text-white capitalize truncate w-[140px]">
            {applet.name}
          </span>
          <span className=" text-neutral-7 dark:text-neutral-3 pb-2 text-xs truncate w-[140px]">
            {applet.description}
          </span>
        </div>
      </Link>
      <div className="relative w-6 mb-auto md:w-6">
        <div className="w-full flex flex-col gap-2">
          <button onClick={applet.pin ? unPinHandler : pinHandler}>
            {applet.pin ? (
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
