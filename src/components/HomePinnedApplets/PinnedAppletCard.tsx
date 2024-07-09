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
    border border-neutral-3 dark:border-neutral-7 overflow-hidden bg-neutral-2 dark:bg-primary"
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
      <div className="p-4 capitalize dark:text-neutral-3 text-sm">{name}</div>
    </div>
  );
}
