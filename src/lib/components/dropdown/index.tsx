"use client";
import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";
import { BsTriangleFill } from "react-icons/bs";

interface DropdownProps {
  children: ReactNode;
  label: string;
  openTimeout?: number;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  label,
  openTimeout = 150,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  const onMouseEnter = () => {
    // Clear any existing timer when mouse enters the dropdown area again
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setIsOpen(true);
  };

  const onMouseLeave = () => {
    // Set a timer to close the dropdown after 300ms
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, openTimeout);
    setHoverTimer(timer);
  };

  useEffect(() => {
    // Clear the timer when the component is unmounted
    return () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }
    };
  }, [hoverTimer]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`font-secondary text-lg flex items-center gap-2 ${
          isOpen ? "text-zinc-100 " : "text-zinc-400"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}{" "}
        <BsTriangleFill
          className={`inline-block text-xs transition-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute mt-2 w-fit rounded-md shadow-lg p-4 right-0 bg-zinc-800 transition ease-out duration-200 flex flex-col gap-2 z-50`}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
};


interface DropdownLinkProps {
  label?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}
export function DropdownLink({
  label,
  href,
  className,
  children,
}: DropdownLinkProps) {
  return (
    <Link href={href} className="flex flex-row gap-2 items-center">
      {label && (
        <span
          className={`text-base text-zinc-400 hover:text-purple-500 ${className}`}
        >
          {label}
        </span>
      )}
      {children}
    </Link>
  );
}

export function DropdownBreaker() {
  return <hr className="border-zinc-700 border-2 my-2" />;
}
