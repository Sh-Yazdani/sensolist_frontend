interface TabsProps {
  items: string[];
  currentIndex: number;
  onTabChange: (index: number) => void;
}

export default function Tabs({ items, currentIndex, onTabChange }: TabsProps) {
  return (
    <div className="relative flex items-center border-b-2 border-neutral-3 w-full">
      {items.map((item, i) => (
        <button
          onClick={() => {
            onTabChange(i);
          }}
          key={item}
          style={{
            width: `calc(100% / ${items.length})`,
          }}
          className={`text-center capitalize pb-2 text-lg ${
            i === currentIndex
              ? " font-[600] text-primary-tint-3"
              : " text-neutral-7"
          }`}
        >
          {item}
        </button>
      ))}
      <div
        className="h-[2px] bg-primary-tint-3 absolute bottom-[-2px] transition-all duration-500"
        style={{
          width: `calc(100% / ${items.length})`,
          marginLeft: `calc((100% / ${items.length}) * ${currentIndex})`,
        }}
      ></div>
    </div>
  );
}
