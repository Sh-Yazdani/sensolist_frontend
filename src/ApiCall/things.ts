import { IThingsResponse } from "@/types/general";
import { getSession } from "next-auth/react";

export const getAllThings = async (): Promise<IThingsResponse> => {
  try {
    const session = await getSession();
    if (session?.accessToken) {
      const headers = {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-type": "application/json",
      };
      const res = await fetch(
        "https://sensolist-backend.vercel.app/things/all",
        { headers }
      );
      const data = await res.json();
      return data;
    } else {
      return {
        statusCode: 400,
        message: "Not Authenticated",
      };
    }
  } catch (e) {
    return {
      statusCode: 400,
      message: "Fetch thins failed",
    };
  }
};
