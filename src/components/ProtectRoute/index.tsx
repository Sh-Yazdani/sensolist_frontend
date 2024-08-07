"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProtectRouteProps {
  children: React.ReactNode;
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const { data: session, status } = useSession();
  console.log("session", session);
  const router = useRouter();
  if (!session) {
    router.push("/authentication/login");
  }
  return <>{children}</>;
}
