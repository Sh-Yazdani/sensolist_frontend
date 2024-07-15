"use client";

import { IApplet } from "@/types/general";
import { Edit2, Trash } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDownModal from "../UI/DropDownModal";
import { MoreHorizontalIcon, PinIcon, PinnedIcon } from "../UI/Icons";

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
        max-w-[420px] mx-auto md:mx-[unset]
    items-center p-2 rounded-2xl mb-4 ${applet.pin ? "order-0" : "order-2"}`}
    >
      <Link className="flex flex-1 items-center" href={`/applets/${applet.id}`}>
        <div className="h-[84px] w-[84px] relative">
          <Image
            alt={applet.name}
            src={applet.image || "/assets/dashboard/img-1.png"}
            fill
          />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-1">
          <span className=" text-black text-sm mb-4 dark:text-white capitalize">
            {applet.name}
          </span>
          <span className=" text-neutral-7 dark:text-neutral-3 pb-2 text-xs">
            {applet.description}
          </span>
        </div>
      </Link>
      <div className="relative w-6 mb-auto md:w-6">
        <div className="w-full hidden md:flex flex-col gap-2">
          <button onClick={applet.pin ? unPinHandler : pinHandler}>
            {applet.pin ? <PinnedIcon /> : <PinIcon />}
          </button>
          <button onClick={editHandler}>
            <Edit2 className=" text-neutral-5" />
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
                onClick={applet.pin ? unPinHandler : pinHandler}
                className="w-full text-neutral-7 dark:text-neutral-3 p-2 flex items-center text-sm border-b border-neutral-5"
              >
                {applet.pin ? (
                  <>
                    <PinnedIcon /> Pinned
                  </>
                ) : (
                  <>
                    <PinIcon /> Pin
                  </>
                )}
              </button>
              <button
                onClick={removeHandler}
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
