import { ILoginResponse } from "@/types/general";

export const getOtpToken = async (
  phoneNumber: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const res = await fetch("https://sensolist-backend.vercel.app/auth/login", {
      method: "POST",
      body: JSON.stringify({
        phonenumber: "+" + phoneNumber,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return {
      statusCode: 400,
      message: "Login failed",
    };
  }
};
