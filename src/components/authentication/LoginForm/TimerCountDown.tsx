import { useEffect, useState } from "react";

export default function TimerCountDown() {
  const [seconds, setSeconds] = useState<number>(120);
  const minutes = Math.floor(seconds / 60);
  const displayTime = `${minutes}:${seconds - minutes * 60}`;
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
