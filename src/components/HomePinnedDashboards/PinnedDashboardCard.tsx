import Image from "next/image";

interface PinnedDashboardCardProps {
  image?: string;
  name: string;
}

export default function PinnedDashboardCard({
  image,
  name,
}: PinnedDashboardCardProps) {
  return (
    <div
      className="w-[240px] md:w-full lg:w-[calc(50%-24px)] aspect-square rounded-xl 
    border border-neutral-3 dark:border-neutral-7 overflow-hidden bg-neutral-2 dark:bg-primary"
    >
      <div className=" relative w-full aspect-[4/3]">
        <Image alt="dashboard image" src={image || "/assets/thing.jpeg"} fill />
      </div>
      <div className="p-4 capitalize dark:text-neutral-3">{name}</div>
    </div>
  );
}
