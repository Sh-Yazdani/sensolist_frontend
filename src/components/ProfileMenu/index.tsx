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
import { usePathname } from "next/navigation";

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
  const pathname = usePathname();
  const menuItems: IProfileMenuItem[] = [
    {
      name: "edit",
      title: "edit profile",
      link: "",
      icon: (
        <Edit2 className=" text-neutral-7 dark:text-neutral-4  dark:md:text-white" />
      ),
    },
    {
      name: "changePassword",
      title: "change password",
      link: "/changePassword",
      icon: (
        <Key className=" text-neutral-7 dark:text-neutral-4  dark:md:text-white" />
      ),
    },
    {
      name: "notifications",
      title: "notification center",
      link: "/notifications",
      icon: (
        <Notification className=" text-neutral-7 dark:text-neutral-4  dark:md:text-white" />
      ),
    },
  ];
  return (
    <div
      className={` p-4 flex flex-col flex-1 absolute bg-neutral-2 dark:bg-primary-Shade-2 
         md:bg-transparent md:ml-6 
    h-[calc(100%-62px)] z-20 transition-all ${
      !isOpen
        ? "translate-x-full invisible w-0 md:translate-x-0 md:visible"
        : "w-full"
    } md:static md:max-w-[232px] lg:[256px] md:rounded-l-2xl shadow-md-300 shadow-md-white-150 md:h-full`}
    >
      <div className="hidden md:flex text-xl lg:text-[1.37rem] dark:text-white">
        Profile
      </div>
      <div className="flex items-center md:hidden dark:text-white">
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
            className={`flex items-center w-full md:p-2 md:rounded-lg dark:text-neutral-4 ${
              i !== 0 && "mt-10"
            }
               ${
                 pathname === `/profile${item.link}`
                   ? "md:bg-grey md:text-neutral-8 dark:md:bg-primary-tint-1 dark:md:text-white"
                   : "md:text-neutral-7"
               }`}
          >
            {item.icon}
            <span className="ml-2 capitalize">{item.title}</span>
            <ArrowRight2
              className={` ml-auto md:hidden ${
                pathname === `/profile${item.link}`
                  ? " md:text-neutral-8"
                  : "md:text-neutral-7"
              }`}
            />
          </Link>
        ))}
      </div>
      <Link
        href={"/authentication/login"}
        className="mt-auto flex items-center md:hidden"
      >
        <LogoutCurve className=" text-error mr-2" />
        <span className=" text-neutral-7 dark:text-neutral-4 ">Log Out</span>
      </Link>
    </div>
  );
}
