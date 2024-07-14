"use client";

import { Close } from "@mui/icons-material";
import { HambergerMenu } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileMenu() {
  const pathname = usePathname();
  return (
    <Link
      href={pathname.includes("profile") ? "/" : "/profile"}
      className="md:hidden mr-2"
    >
      {pathname.includes("profile") ? <Close /> : <HambergerMenu />}
    </Link>
  );
}
