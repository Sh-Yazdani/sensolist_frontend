"use client";

import { ICreateDashboardInputs, IDashboard } from "@/types/general";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ImagePicker from "./ImagePicker";

export default function DashboardCreateForm({
  onCancel,
  dashboardAdd,
}: {
  dashboardAdd: (d: IDashboard) => void;
  onCancel: () => void;
}) {
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

  const [selectedImage, setSelectedImage] = useState<string>();

  const onSubmit: SubmitHandler<ICreateDashboardInputs> = (data) => {
    console.log("submit", data, selectedImage);
    dashboardAdd({
      name: data.name,
      description: data.description,
      image: selectedImage,
    });
  };
  return (
    <>
      <div className=" text-xl text-center md:text-left capitalize">
        create dashboard
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors.name?.message}
          placeholder="Title of the dashboard"
          label="Dashboard name"
          register={register}
          name="name"
          className="mt-6"
        />
        <Input
          error={errors.description?.message}
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
              onClick={() => {
                setSelectedImage(img);
              }}
              className="relative w-[57px] h-[57px] lg:w-[72px] lg:h-[72px] cursor-pointer 
              bg-neutral-2 rounded-md"
              key={img}
            >
              <Image alt="image" fill src={img} />
            </div>
          ))}
          <ImagePicker
            error={errors.image?.message}
            register={register}
            name="image"
            label="Image"
            setImage={(img: string) => {
              setSelectedImage(img);
            }}
          />
        </div>
        <div className="flex items-center gap-4 mt-6">
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              event.preventDefault();
              onCancel();
            }}
            className="w-[36%]"
            variant="secondary"
          >
            Cancel
          </Button>
          <Button className="w-[64%]" type="submit">
            Create
          </Button>
        </div>
      </form>
    </>
  );
}
