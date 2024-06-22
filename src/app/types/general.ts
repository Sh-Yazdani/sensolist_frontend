export type LoginStepsType = "details" | "verification";

export type ForgetPasswordStepsType = "phoneNumber" | "verification" | "reset";

export interface LoginInputs {
  phoneNumber: string;
  password: string;
}
