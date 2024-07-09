import ProfileContainer from "@/components/ProfileContainer";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-1 flex-col md:mt-[100px] lg:mt-[120px]">
      <ProfileContainer>{children}</ProfileContainer>
    </div>
  );
}
