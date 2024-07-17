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
      className="w-[calc(25%-16px)] rounded-xl h-full my-auto
     overflow-hidden bg-neutral-2 dark:bg-white-opacity-100 bg-black-opacity-100"
    >
      <div
        className=" relative w-full aspect-[4/3]"
        style={{
          backgroundImage: `url(${image || "/assets/thing.jpeg"})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className=" px-2 pt-2 capitalize dark:text-neutral-3 text-sm font-medium text-center">
        {name}
      </div>
    </div>
  );
}
