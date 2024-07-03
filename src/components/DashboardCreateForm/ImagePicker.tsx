"use client";

import { GalleryAdd } from "iconsax-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface ImagePickerProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
}

export default function ImagePicker({
  label,
  name,
  register,
}: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<any>();
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (e: { target: HTMLInputElement }) => {
    const file = e.target.files?.length && e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        className="hidden"
        ref={imageInput}
        onChange={handleImageChange}
        {...register}
      />
      <div className="flex flex-col">
        <button
          onClick={handlePickClick}
          className="relative w-[56px] h-[56px] lg:w-[72px] lg:h-[72px]"
        >
          {pickedImage ? (
            <div className="relative w-[57px] h-[57px] bg-neutral-2 rounded-md">
              <Image alt="picked image" src={pickedImage} fill />
            </div>
          ) : (
            <GalleryAdd className=" text-neutral-6" size={56} />
          )}
        </button>
        <span className=" text-neutral-6 text-sm">Browse</span>
      </div>
    </>
  );
}
