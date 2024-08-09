"use client";

import { getWidgetData } from "@/ApiCall/widgets";
import { IOutdoorEnvironmentData } from "@/types/general";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HumidityCardProps {
  data?: IOutdoorEnvironmentData;
  name: string;
}

export default function HumidityCard({ data, name }: HumidityCardProps) {
  const [widgetData, setWidgetData] = useState<{ payload: string }[]>();
  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    if (seconds === 10) {
      const getData = async () => {
        if (data?.senderId) {
          const response = await getWidgetData(data?.senderId, ["humidity"]);
          setWidgetData(response.humidity || []);
        }
      };
      getData();
    } else if (seconds <= 0) {
      setSeconds(10);
      return;
    }

    const interval = setInterval(() => setSeconds(seconds - 1), 1000);

    return () => clearInterval(interval);
  }, [data, seconds]);
  return (
    <div className=" aspect-square flex flex-col">
      <div className=" text-lg capitalize mx-auto dark:text-white">{name}</div>
      <div className="flex w-fit mx-auto mt-10">
        <Image
          className="mr-4"
          alt="temp"
          width={56}
          height={56}
          src={"/assets/icons/humidity.svg"}
        />
        <div className="flex flex-col">
          <div className="text-lg font-bold dark:text-neutral-2">Humidity</div>
          <div className=" text-neutral-7 dark:text-neutral-6">
            Last Update {seconds} seconds ago
          </div>
        </div>
      </div>
      <div className="text-4xl mt-20 mx-auto text-primary-tint-1 dark:text-primary-tint-3">
        {widgetData?.length
          ? widgetData[0].payload + " %"
          : "There is no data."}
      </div>
    </div>
  );
}
