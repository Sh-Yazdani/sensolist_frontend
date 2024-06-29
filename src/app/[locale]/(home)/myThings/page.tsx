import SortBy from "@/components/SortBy";

export default function Page() {
  return (
    <div className=" flex flex-col pt-4 lg:pt-0 px-4">
      <div className="flex items-center">
        <SortBy />
        {/* <div>search bars</div> */}
      </div>
      content
    </div>
  );
}
