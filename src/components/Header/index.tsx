import ThemeSwitch from "../ThemeSwitch";
import Logo from "./Logo";

export default function Header() {
  return (
    <div
      className="flex w-full rounded-b-2xl
    px-4 md:px-8 lg:px-20 pt-4 pb-6 md:pt-10 lg:pt-14
    bg-primary-Shade-2 md:bg-transparent"
    >
      <Logo />
      <ThemeSwitch />
    </div>
  );
}
