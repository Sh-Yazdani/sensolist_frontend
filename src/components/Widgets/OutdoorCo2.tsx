"use client";

import { getWidgetData } from "@/ApiCall/widgets";
import { IOutdoorEnvironmentData } from "@/types/general";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OutdoorCo2Props {
  data?: IOutdoorEnvironmentData;
  name: string;
}

export default function OutdoorCo2({ data, name }: OutdoorCo2Props) {
  const [widgetData, setWidgetData] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await getWidgetData(
        data?.senderId || "",
        data?.charactristic || []
      );
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" aspect-square flex flex-col">
      <div className=" text-lg capitalize mx-auto dark:text-white">{name}</div>
      <div className="flex w-fit mx-auto mt-10">
        <Image
          className="mr-4"
          alt="temp"
          width={56}
          height={56}
          src={"/assets/icons/co2.svg"}
        />
        <div className="flex flex-col">
          <div className="text-lg font-bold dark:text-neutral-2">CO2 level</div>
          <div className=" text-neutral-7 dark:text-neutral-6">
            Last Update 1d ago
          </div>
        </div>
      </div>
      <div className="text-4xl mt-20 mx-auto text-primary-tint-1 dark:text-primary-tint-3">
        450 ppm
      </div>
    </div>
  );
}
