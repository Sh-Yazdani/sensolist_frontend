import SensolistTag from "@/components/authentication/SensolistTag";
import Image from "next/image";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[100vh] bg-cover">
      {children}
      <SensolistTag />
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <Image
          className=" -z-10"
          layout="fill"
          src="/assets/auth-bg.jpeg"
          alt="bg-image"
        />
      </div>
    </div>
  );
}
