import { useEffect, useState } from "react";

export default function TimerCountDown() {
  const [seconds, setSeconds] = useState<number>(120);
  const minutes = Math.floor(seconds / 60);
  const displayTime = `${("0" + minutes).slice(-2)}:${(
    "0" +
    (seconds - minutes * 60)
  ).slice(-2)}`;
  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds(seconds - 1), 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <div className="mt-10">
      {seconds !== 0 ? (
        displayTime
      ) : (
        <span className=" underline">Resend OTP</span>
      )}
    </div>
  );
}
