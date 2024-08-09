import { IWidgetData } from "@/types/general";
import { getSession } from "next-auth/react";

export const getWidgetData = async (
  senderId: string,
  charactristics: string[]
): Promise<IWidgetData> => {
  console.log("sender id", senderId, "temperature", charactristics);
  try {
    const session = await getSession();
    const res = await fetch("https://www.sensolisttech.com:3123/api/data", {
      method: "POST",
      body: JSON.stringify({
        sender_id: senderId,
        characteristics: charactristics,
        page: 1,
        limit: 10,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    const data = await res.json();
    return data;
    // } else {
    //   return {};
    // }
  } catch (e) {
    return {};
  }
};
