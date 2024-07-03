import DashboardEmptyState from "@/components/DashboardEmptyState";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { IDashboard } from "@/types/general";

let dashboards: IDashboard[] = [];

export default function Page() {
  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <SearchBar />
        <SortBy />
      </div>
      {dashboards.length ? <div></div> : <DashboardEmptyState />}
    </div>
  );
}
