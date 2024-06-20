import VerificationInput from "react-verification-input";

export default function VerificationForm() {
  return (
    <div className="flex justify-center mt-20">
      <VerificationInput
        length={5}
        placeholder=""
        classNames={{
          container: "w-[528px] h-[80px] justify-between",
        }}
      />
    </div>
  );
}
