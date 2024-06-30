interface ProductDetailsContentProps {
  name: string;
  brand: string;
  model: string;
  type: string;
  actions: string;
  charactristics: string;
  activitionDate: string;
  description: string;
}

export default function ProductDetailsContent({
  name,
  brand,
  model,
  type,
  actions,
  charactristics,
  activitionDate,
  description,
}: ProductDetailsContentProps) {
  return (
    <div className=" flex flex-col gap-8 xl:pl-10">
      <div className="text-lg text-black font-medium capitalize dark:text-white">
        {name}
      </div>
      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          brand:
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {brand}
        </div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          model:
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {model}
        </div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          type:
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {type}
        </div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          actions
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {actions}
        </div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          characteristics:
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {charactristics}
        </div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          activation date:
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {activitionDate}
        </div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize dark:text-white">
          description:
        </div>
        <div className="w-1/2 capitalize text-neutral-8 dark:text-neutral-3">
          {description}
        </div>
      </div>
    </div>
  );
}
