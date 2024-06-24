import SensolistTag from "@/components/authentication/SensolistTag";
import Notification from "@/components/Notification";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className=" h-[100vh] flex justify-end overflow-y-auto
      pt-20 md:pt-[120px] lg:pt-40
       px-4 md:px-[72px] lg:pr-[120px]
       bg-[url('/assets/auth-bg.jpeg')] bg-cover bg-center"
    >
      <Notification />
      <div
        className="max-w-[800px] lg:w-[45%] lg:min-w-[560px] flex w-full h-fit
        border border-white-opacity-900 rounded-3xl
      bg-gradient-opacity backdrop-blur-xl
      px-4 py-8 md:px-20 lg:py-10 flex-col z-20"
      >
        {children}
      </div>
      <SensolistTag />
      {/* <div
        className="absolute top-0 bottom-0 right-0 left-0 h-full
      bg-[url('/assets/auth-bg.jpeg')] bg-cover bg-center -z-10"
      ></div> */}
    </div>
  );
}
