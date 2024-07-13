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
      className="w-[180px] rounded-xl h-fit my-auto
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
      <div className="p-4 capitalize dark:text-neutral-3 text-sm font-medium text-center truncate">
        {name}
      </div>
    </div>
  );
}
