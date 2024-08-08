import { IWidgetData } from "@/types/general";
import { getSession } from "next-auth/react";

export const getWidgetData = async (
  senderId: string,
  charactristics: string[]
): Promise<IWidgetData> => {
  console.log("sender id", senderId, "temperature", charactristics);
  const session = await getSession();
  try {
    const session = await getSession();
    if (session?.accessToken) {
      const res = await fetch("http://185.110.189.232:3123/api/data", {
        method: "POST",
        body: JSON.stringify({
          sender_id: senderId,
          characteristics: charactristics,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
      const data = await res.json();
      return data;
    } else {
      return {};
    }
  } catch (e) {
    return {};
  }
};
