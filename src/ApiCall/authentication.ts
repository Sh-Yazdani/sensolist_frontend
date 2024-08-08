import { ILoginResponse, IOtpResponse } from "@/types/general";

export const getOtpToken = async (
  phoneNumber: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const res = await fetch(
      "https://sensolist-backend.vercel.app/api/v2/auth/login",
      {
        method: "POST",
        body: JSON.stringify({
          phonenumber: "+" + phoneNumber,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return {
      statusCode: 400,
      message: "Login failed",
    };
  }
};

export const sendOtpToken = async (
  code: string,
  token: string
): Promise<IOtpResponse> => {
  try {
    const res = await fetch(
      "https://sensolist-backend.vercel.app/api/v2/auth/otp",
      {
        method: "POST",
        body: JSON.stringify({
          otp: code,
          token: token,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return {
      statusCode: 400,
      message: "Login failed",
    };
  }
};
