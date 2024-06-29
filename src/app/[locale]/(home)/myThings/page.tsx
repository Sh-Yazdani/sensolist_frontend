import FilterComponent from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";

export default function Page() {
  return (
    <div className=" flex flex-col pt-20 lg:pt-0 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <SearchBar />
        <FilterComponent />
        <SortBy />
      </div>
      content
    </div>
  );
}
