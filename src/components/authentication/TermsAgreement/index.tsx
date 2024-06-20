import { Dispatch, SetStateAction } from "react";

interface TermsAgreementProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export default function TermsAgreement({
  isChecked,
  setIsChecked,
}: TermsAgreementProps) {
  return (
    <label className="checkbox-container flex items-center mt-[33px] md:mt-11">
      {/* <label> */}
      <input
        className={isChecked ? "checked" : ""}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev: boolean) => !prev)}
      />
      <span className="checkmark"></span>I agree to{" "}
      <span className=" underline ml-2"> terms and policies.</span>
      {/* </label> */}
    </label>
  );
}
