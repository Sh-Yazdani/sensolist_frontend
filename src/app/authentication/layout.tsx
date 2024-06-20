export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[100vh] bg-[url('/assets/auth-bg.jpeg')] bg-cover">
      {children}
    </div>
  );
}
