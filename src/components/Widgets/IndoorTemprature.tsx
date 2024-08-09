"use client";

import { getWidgetData } from "@/ApiCall/widgets";
import { IIndoorEnvironmentData } from "@/types/general";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IndoorTempratureProps {
  data?: IIndoorEnvironmentData;
  name: string;
}

export default function IndoorTemprature({
  data,
  name,
}: IndoorTempratureProps) {
  const [widgetData, setWidgetData] = useState<{ payload: string }[]>();
  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    if (seconds === 10) {
      const getData = async () => {
        if (data?.senderId) {
          const response = await getWidgetData(data?.senderId, ["temperature"]);
          setWidgetData(response.temperature || []);
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
          className="dark:hidden"
          alt="temp"
          width={56}
          height={56}
          src={"/assets/icons/temperature.svg"}
        />
        <Image
          className="hidden dark:flex"
          alt="temp"
          width={56}
          height={56}
          src={"/assets/icons/temperature-dark.svg"}
        />
        <div className="flex flex-col">
          <div className="text-lg font-bold dark:text-neutral-2">
            Temperature
          </div>
          <div className=" text-neutral-7 dark:text-neutral-6">
            Last Update {seconds} seconds ago
          </div>
        </div>
      </div>
      <div className="text-4xl mt-20 mx-auto text-primary-tint-1 dark:text-primary-tint-3">
        {widgetData?.length
          ? widgetData[0].payload + " °C"
          : "There is no data."}
      </div>
    </div>
  );
}
