import DashboardWidgets from "@/components/Widgets";

// async function getData() {
//   const headers = {
//     Authorization:
//       "Bearer ",
//   };
//   const res = await fetch(
//     "http://185.110.189.232:3123/api/data?sender=sns0000001",
//     { headers }
//   );

//   console.log("get data response", res.json());

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export default async function Page({ params }: { params: { slug: string } }) {
  // const data = await getData();
  console.log("page data", params);
  return (
    <div className=" flex flex-col flex-1 md:px-4">
      <DashboardWidgets dashboardId={params.slug} />
    </div>
  );
}
