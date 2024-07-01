import Alert from "@/components/Alert";
import SensolistTag from "@/components/authentication/SensolistTag";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className=" h-[100vh] flex overflow-y-auto flex-col
       bg-[url('/assets/auth-bg.jpeg')] bg-cover bg-center px-4"
    >
      <Alert />
      <div
        className=" flex w-full h-fit flex-col z-20
        max-w-[480px]
        mt-10 mx-auto lg:ml-auto lg:mr-24
        py-4 px-2 md:py-8 md:px-6 lg:px-8
        border border-white-opacity-900 rounded-3xl
      bg-gradient-opacity backdrop-blur-xl
      "
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
