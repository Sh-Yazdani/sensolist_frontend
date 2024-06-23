import { Warning2 } from "iconsax-react";
import { Dispatch, SetStateAction } from "react";

interface TermsAgreementProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  error?: string;
}

export default function TermsAgreement({
  isChecked,
  setIsChecked,
  error,
}: TermsAgreementProps) {
  return (
    <label className="relative checkbox-container flex items-center mt-[33px] md:mt-11 text-sm lg:text-xl">
      <input
        className={isChecked ? "checked" : ""}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev: boolean) => !prev)}
      />
      <span className="checkmark"></span>I agree to{" "}
      <span className=" underline ml-2"> terms and policies.</span>
      {error && (
        <div
          className="rounded bg-error text-sm text-white py-1 px-2 flex items-center
        absolute bottom-[-2.25rem] left-0"
        >
          <Warning2 /> {error}
        </div>
      )}
    </label>
  );
}
