export default function Logo() {
  return (
    <div className="flex items-center">
      <div
        className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] 
    bg-cover bg-[url('/assets/sensolist-logo.svg')]"
      ></div>
      <span className="ml-2 lg:ml-6 lg:text-[32px] text-neutral-2 capitalize">
        sensolist
      </span>
    </div>
  );
}
