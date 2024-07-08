import Image from "next/image";

interface PinnedAppletCardProps {
  image?: string;
  name: string;
}

export default function PinnedAppletCard({
  image,
  name,
}: PinnedAppletCardProps) {
  return (
    <div
      className="w-[240px] md:w-full lg:w-[calc(50%-24px)] aspect-square rounded-xl 
    border border-neutral-3 overflow-hidden"
    >
      <div className=" relative w-full aspect-[4/3]">
        <Image alt="applet image" src={image || "/assets/thing.jpeg"} fill />
      </div>
      <div className="p-4 capitalize">{name}</div>
    </div>
  );
}
