"use client";

import { CloseCircle } from "iconsax-react";
import { useState } from "react";
import Backdrop from "../Backdrop";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

export default function Modal({ children, onClose, open }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  setTimeout(() => {
    setIsOpen(open ? true : false);
  }, 100);

  const closeHandler = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
    setTimeout(() => {
      onClose();
    }, 100);
  };
  return (
    <>
      {isOpen && <Backdrop onClick={onClose} />}
      <div
        className={` bg-white z-30 fixed w-[calc(100%-2rem)] mx-auto flex flex-col
           text-black dark:text-white dark:bg-black shadow-300 shadow-white-150
           rounded-t-3xl pt-4 px-4 pb-8 top-10
           md:w-[480px] md:rounded-2xl md:py-10 md:px-6 md:top-20 md:left-0 md:right-0 md:mx-auto
           lg:w-[800px]
         transition-[opacity] duration-500 ease-linear ${
           isOpen ? " opacity-100 z-40" : "opacity-0 -z-10"
         }`}
      >
        <div className="flex md:hidden w-[120px] h-2 bg-neutral-6 rounded-full mx-auto mb-6"></div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 hidden md:flex text-neutral-5"
        >
          <CloseCircle />
        </button>
        {children}
      </div>
    </>
  );
}
