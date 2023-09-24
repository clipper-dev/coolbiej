import React from "react";
import { IoIosArrowForward } from "react-icons/io";
interface Props {
  children: React.ReactNode;
  label: string;
  className?: string;
}
export function Accordion({ children, label, className }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        className="mt-4 w-full flex flex-row items-center justify-between bg-zinc-800 rounded-md px-4 py-2 shadow-sm text-zinc-400 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {/* simple arrow that rotates based on setShowAddQuestion variable */}
        <IoIosArrowForward
          className={
            "inline-block ml-2 transform transition-transform duration-200 " +
            (isOpen ? "-rotate-90" : "rotate-90")
          }
        />
      </button>
      <div
        className={`${isOpen ? "block]" : "hidden"}`}
      >
        {children}
      </div>
    </>
  );
}
