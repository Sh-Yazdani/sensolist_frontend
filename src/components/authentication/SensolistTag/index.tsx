import Image from "next/image";

export default function SensolistTag() {
  return (
    <div
      className="absolute bg-gradient-opacity w-[383px] rounded-2xl p-4 
  border border-white-opacity-900 items-center
  bottom-[160px] left-[120px] backdrop-blur-xl z-10
  hidden lg:flex"
    >
      <Image
        width={56}
        height={56}
        src="/assets/sensolist-logo.png"
        alt="sensolist-logo"
      />
      <div className="flex flex-col ml-6">
        <span className=" uppercase text-2xl font-medium">Sensolist</span>
        <span className=" whitespace-nowrap">
          Your IOT AI-boosted R&D Sandbox
        </span>
      </div>
    </div>
  );
}
