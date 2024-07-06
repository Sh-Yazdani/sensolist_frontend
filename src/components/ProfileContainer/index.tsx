"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileMenu from "../ProfileMenu";
import ProfileMobileHeader from "../ProfileMobileHeader";

interface ProfileContainerProps {
  children: React.ReactNode;
}

export default function ProfileContainer({ children }: ProfileContainerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();
  return (
    <div className="flex md:h-[544px] lg:h-[630px]">
      <ProfileMenu
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
        }}
      />
      <div>
        {!isMenuOpen && (
          <ProfileMobileHeader
            onGoBack={() => {
              setIsMenuOpen(true);
              router.push("/profile");
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}