import LanguageSwitch from "../LanguageSwitch";
import Notifications from "../Notifications";
import ThemeSwitch from "../ThemeSwitch";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";

export default function Header() {
  return (
    <div
      className="flex items-center w-full rounded-b-2xl
    p-4 md:pt-10
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
