"use client";

import { toggleMenu } from "@/lib/features/profile/profileSlice";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ProfileMenu from "../ProfileMenu";
import ProfileMobileHeader from "../ProfileMobileHeader";

interface ProfileContainerProps {
  children: React.ReactNode;
}

export default function ProfileContainer({ children }: ProfileContainerProps) {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state: RootState) => state.profileSlice);
  const router = useRouter();
  return (
    <div className="flex md:h-[544px] lg:h-[630px]">
      <ProfileMenu
        isOpen={menuOpen}
        onClose={() => {
          dispatch(toggleMenu({ menuOpen: false }));
        }}
      />
      <div className="flex-1 md:mr-[52px] lg:mr-10 rounded-r-2xl shadow-md-right-300 shadow-md-right-white-150 ">
        {!menuOpen && (
          <ProfileMobileHeader
            onGoBack={() => {
              dispatch(toggleMenu({ menuOpen: true }));
              router.push("/profile");
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
