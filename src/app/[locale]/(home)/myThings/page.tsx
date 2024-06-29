import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";

export default function Page() {
  return (
    <div className=" flex flex-col pt-20 lg:pt-0 px-4">
      <div className="md:relative">
        <SearchBar />
        <SortBy />
        {/* <div>search bars</div> */}
      </div>
      content
    </div>
  );
}
