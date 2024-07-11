"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLink = ({
  link,
}: {
  link: { src: string; title: string; icon: ReactNode };
}) => {
  const pathname = usePathname()
  return (
    <Link
      className={`px-2 py-1 text-[10px] sm:text-base text-medium ${pathname === link.src ? 'bg-cyan-500' : ''}  rounded-md hover:border-cyan-500  border border-transparent  hover:text-white text-white flex items-center gap-1`}
      href={link.src}
    >
      {link.icon}
      {link.title}
    </Link>
  );
};

export default NavLink;
