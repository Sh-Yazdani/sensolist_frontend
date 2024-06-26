export default function Footer() {
  return (
    <div className="flex flex-col w-full h-[70px] md:h-[88px] lg:h-[116px] dark:text-neutral-5 text-natural-8">
      <div
        className="w-full h-[4px] bg-gradient-to-r to-[#C2CBD4] from-[#3F76AA]
        dark:to-[#192F44] dark:from-[#11406C]
      "
      ></div>
      <div className="m-auto text-sm md:text-base lg:text-xl">
        {" "}
        © 2024 sensolist.com ,all rights reserved
      </div>
    </div>
  );
}
