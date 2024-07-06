"use client";

import { IProfileMenuItem } from "@/types/general";
import {
  ArrowRight2,
  Edit2,
  Key,
  LogoutCurve,
  Notification,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
  useEffect(() => {
    console.log("useeffect");
  }, []);
  const menuItems: IProfileMenuItem[] = [
    {
      name: "edit",
      title: "edit profile",
      link: "/",
      icon: <Edit2 className=" text-neutral-7" />,
    },
    {
      name: "changePassword",
      title: "change password",
      link: "/changePassword",
      icon: <Key className=" text-neutral-7" />,
    },
    {
      name: "notifications",
      title: "notification center",
      link: "/notifications",
      icon: <Notification className=" text-neutral-7" />,
    },
  ];
  return (
    <div
      className={` p-4 flex flex-col flex-1 absolute bg-white md:ml-6 
    w-full h-[calc(100%-62px)] z-20 transition-all ${
      !isOpen && "translate-x-full md:translate-x-0"
    } md:static md:max-w-[232px] lg:[256px] md:rounded-l-2xl shadow-300 md:h-full`}
    >
      <div className="hidden md:flex text-xl lg:text-[1.37rem]">Profile</div>
      <div className="flex items-center md:hidden">
        <div className="w-[56px] h-[56px] relative rounded-full overflow-hidden">
          <Image alt="profile" src="/assets/profile.jpeg" fill />
        </div>
        <div className="ml-4 text-lg font-medium">Yas Izadi</div>
      </div>
      <div className="mt-6 md:mt-10">
        {menuItems.map((item, i) => (
          <Link
            onClick={onClose}
            href={`/profile${item.link}`}
            key={item.name}
            className={`flex items-center w-full ${i !== 0 && "mt-10"}`}
          >
            {item.icon}
            <span className=" text-neutral-7 ml-2 capitalize">
              {item.title}
            </span>
            <ArrowRight2 className=" text-neutral-6 ml-auto md:hidden" />
          </Link>
        ))}
      </div>
      <div className="mt-auto flex items-center md:hidden">
        <LogoutCurve className=" text-error mr-2" />
        <span className=" text-neutral-7">Log Out</span>
      </div>
    </div>
  );
}
