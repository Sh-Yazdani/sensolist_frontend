import ProfileNotificationsContainer from "@/components/ProfileNotificationsContainer";
import { INotification } from "@/types/general";

export default function Page() {
  const notifications: INotification[] = [];
  return (
    <div className="p-4 h-full min-h-[calc(100vh-140px)] md:min-h-full flex flex-col">
      <ProfileNotificationsContainer notifications={notifications} />
    </div>
  );
}
