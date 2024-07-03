import { ICreateDashboardInputs } from "@/types/general";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../UI/Input";

export default function DashboardCreateForm() {
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
      </form>
    </>
  );
}
