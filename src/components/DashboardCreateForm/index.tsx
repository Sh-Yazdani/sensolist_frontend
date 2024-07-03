import { ICreateDashboardInputs } from "@/types/general";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../UI/Input";
import ImagePicker from "./ImagePicker";

export default function DashboardCreateForm() {
  const imagesForSelect = [
    "/assets/dashboard/img-1.png",
    "/assets/dashboard/img-2.png",
    "/assets/dashboard/img-3.png",
    "/assets/dashboard/img-4.png",
    "/assets/dashboard/img-5.png",
    "/assets/dashboard/img-6.png",
  ];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateDashboardInputs>();

  const onSubmit: SubmitHandler<ICreateDashboardInputs> = (data) => {
    console.log("submit");
  };
  return (
    <>
      <div className=" text-xl text-center md:text-left capitalize">
        create dashboard
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Title of the dashboard"
          label="Dashboard name"
          register={register}
          name="name"
          className="mt-6"
        />
        <Input
          placeholder="Description of the dashboard"
          label="Description"
          register={register}
          name="description"
          className="mt-6"
        />
        <div className="mt-6">Choose an image:</div>
        <div className=" flex flex-wrap gap-4 mt-3">
          {imagesForSelect.map((img) => (
            <div
              className="relative w-[57px] h-[57px] lg:w-[72px] lg:h-[72px] 
              bg-neutral-2 rounded-md"
              key={img}
            >
              <Image alt="image" fill src={img} />
            </div>
          ))}
          <ImagePicker register={register} name="image" label="Image" />
        </div>
      </form>
    </>
  );
}
