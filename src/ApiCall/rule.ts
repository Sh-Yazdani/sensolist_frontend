import { IRuleResponse } from "@/types/general";
import { getSession } from "next-auth/react";

export const sendRuleData = async (
  appletId: number,
  sender_id: string,
  sensor: string,
  parameter: string,
  condition: string,
  value: number,
  email: string
): Promise<IRuleResponse> => {
  try {
    const session = await getSession();
    const res = await fetch(
      "https://sensolist-backend.vercel.app/api/v2/rule-chain",
      {
        method: "POST",
        body: JSON.stringify({
          appletId: "66b602db33c99f2150bcdaff",
          sender_id: sender_id,
          sensor: sensor,
          parameter: parameter,
          condition: condition,
          value: value,
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return {};
  }
};
