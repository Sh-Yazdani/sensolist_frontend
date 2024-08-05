import DashboardWidgets from "@/components/Widgets";

// async function getData() {
//   const headers = {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidXNlcklkIjoiNjZhZjVmZjdmODk1Yzk3NTc5YzdlZTcyIiwicGhvbmVudW1iZXIiOiIrMTkxMzk2MzM1ODkiLCJzeXN0ZW1Sb2xlIjoiQWRtaW4ifSwiaWF0IjoxNzIyNzg3MDEzLCJleHAiOjE3MjI3ODc5MTN9.RLKAV6D7Nw51z139mg9tOagHOwGsUjyPbga8JCvgtqA",
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
  // console.log("page data", data);
  return (
    <div className=" flex flex-col flex-1 md:px-4">
      <DashboardWidgets dashboardId={Number(params.slug)} />
    </div>
  );
}
