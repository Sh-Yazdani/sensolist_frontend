import { Profile } from "iconsax-react";

export default function ProfileButton() {
  return (
    <button
      className="relative hidden md:flex w-[40px] h-[40px] rounded-full
    dark:bg-white-opacity-100 shadow bg-neutral-3"
    >
      <Profile className="m-auto size-6 dark:text-white text-primary-tint-3" />
    </button>
  );
}
