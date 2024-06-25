import Header from "@/components/Header";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-[100vh] dark:bg-dark-background-color">
      <Header />
      {children}
    </div>
  );
}
