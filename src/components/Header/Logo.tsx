export default function Logo() {
  return (
    <div className="flex items-center">
      <div
        className="lg:w-[48px] lg:h-[48px] w-[40px] h-[40px] 
    bg-cover bg-[url('/assets/sensolist-logo.svg')]"
      ></div>
      <span
        className="hidden md:flex ml-2 lg:ml-6 lg:text-[24px] 
      text-primary dark:text-neutral-2 capitalize"
      >
        sensolist
      </span>
    </div>
  );
}
