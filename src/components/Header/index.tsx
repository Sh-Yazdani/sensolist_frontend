import LanguageSwitch from "../LanguageSwitch";
import Notifications from "../Notifications";
import ThemeSwitch from "../ThemeSwitch";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";

export default function Header() {
  return (
    <div
      className="flex items-center w-full rounded-b-2xl
    px-4 md:px-8 lg:px-20 pt-4 pb-6 md:pt-10 lg:pt-14
    bg-primary-Shade-2 md:bg-transparent"
    >
      <Logo />
      <div className="ml-auto flex">
        <ThemeSwitch />
        <LanguageSwitch />
        <Notifications />
        <ProfileButton />
      </div>
    </div>
  );
}
