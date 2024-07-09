"use client";

import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { IApplet, ICreateAppletInputs } from "@/types/general";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ImagePicker from "../DashboardCreateForm/ImagePicker";
import Button from "../UI/Button";
import Input from "../UI/Input";

export default function AppletCreateForm({
  onCancel,
  appletAdd,
}: {
  appletAdd: (d: IApplet) => void;
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
    reset,
    formState: { errors },
  } = useForm<ICreateAppletInputs>();
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState<string>();

  const onSubmit: SubmitHandler<ICreateAppletInputs> = (data) => {
    console.log("submit", data, selectedImage);
    appletAdd({
      name: data.name,
      description: data.description,
      image: selectedImage,
    });
    dispatch(createAlert({ message: "applet added.", type: "success" }));
    reset();
    onCancel();
  };
  return (
    <>
      <div className=" text-xl text-center md:text-left capitalize">
        create applet
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={
            errors.name?.type === "required" ? "This field is required" : ""
          }
          placeholder="Title of the applet"
          label="Applet name"
          register={register}
          name="name"
          className="mt-6"
        />
        <Input
          error={
            errors.description?.type === "required"
              ? "This field is required"
              : ""
          }
          placeholder="Description of the applet"
          label="Description"
          register={register}
          name="description"
          className="mt-6"
        />
        <div className="mt-6">Choose an image:</div>
        <div className="relative flex flex-wrap gap-4 mt-3">
          {imagesForSelect.map((img) => (
            <div
              onClick={() => {
                setSelectedImage(img);
              }}
              className={`relative w-[57px] h-[57px] cursor-pointer 
              bg-neutral-2 rounded-md ${
                selectedImage === img && "border-2 border-secondary-main"
              }`}
              key={img}
            >
              <Image alt="image" fill src={img} />
            </div>
          ))}
          <ImagePicker
            selectedImage={selectedImage}
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
              reset();
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
