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
    <div className=" flex flex-col gap-8">
      <div className="text-lg text-black font-medium capitalize">{name}</div>
      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          brand:
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{brand}</div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          model:
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{model}</div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          type:
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{type}</div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          actions
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{actions}</div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          characteristics:
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{charactristics}</div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          activation date:
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{activitionDate}</div>
      </div>

      <div className="flex items-baseline w-full">
        <div className="w-1/2 whitespace-nowrap pr-2 font-bold text-black capitalize">
          description:
        </div>
        <div className="w-1/2 capitalize text-neutral-8">{description}</div>
      </div>
    </div>
  );
}
