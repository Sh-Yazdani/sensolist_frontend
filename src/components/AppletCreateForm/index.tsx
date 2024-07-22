"use client";

import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { IApplet, ICreateAppletInputs, ISelectOption } from "@/types/general";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ImagePicker from "../DashboardCreateForm/ImagePicker";
import Button from "../UI/Button";
import Input from "../UI/Input";
import MultiSelect from "../UI/MultiSelect";

export default function AppletCreateForm({
  onCancel,
  appletAdd,
  applets,
  initialValues,
  edit,
}: {
  appletAdd: (d: IApplet) => void;
  onCancel: () => void;
  applets: IApplet[];
  initialValues?: IApplet | null;
  edit?: IApplet | null;
}) {
  const imagesForSelect = [
    "/assets/dashboard/img-1.png",
    "/assets/dashboard/img-2.png",
    "/assets/dashboard/img-3.png",
    "/assets/dashboard/img-4.png",
    "/assets/dashboard/img-5.png",
    "/assets/dashboard/img-6.png",
  ];

  const usersList: ISelectOption[] = [
    {
      title: "User 1",
      value: "user1",
    },
    {
      title: "User 2",
      value: "user2",
    },
    {
      title: "User 3",
      value: "user3",
    },
    {
      title: "User 4",
      value: "user4",
    },
  ];
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateAppletInputs>({
    defaultValues: {
      name: initialValues?.name,
      description: initialValues?.description,
    },
  });
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(initialValues?.image);

  const [selectedUsers, setSelectedUsers] = useState<ISelectOption[]>([]);

  const onSubmit: SubmitHandler<ICreateAppletInputs> = (data) => {
    console.log("submit", data, selectedImage);
    appletAdd({
      id: edit
        ? edit.id
        : applets?.length
        ? applets[applets.length - 1].id + 1
        : 0,
      name: data.name,
      description: data.description,
      image: selectedImage,
    });
    reset();
    dispatch(createAlert({ message: "applet added.", type: "success" }));
    onCancel();
  };
  return (
    <>
      <div className=" text-xl text-center md:text-left capitalize">
        create applet
      </div>
      <form className="flex flex-col h-auto" onSubmit={handleSubmit(onSubmit)}>
        <Input
          required
          initialValue={initialValues?.name || ""}
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
          required
          initialValue={initialValues?.description}
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

        <MultiSelect
          options={usersList}
          selectedValues={selectedUsers}
          setSelectedValues={setSelectedUsers}
          label="Assign User"
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
            {edit ? "edit" : "Create"}
          </Button>
        </div>
      </form>
    </>
  );
}
