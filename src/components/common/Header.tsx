"use client";
import { DownArrow } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const homePage = usePathname() === "/";
  const dashboardPage = usePathname() === "/dashboard";
  return (
    <div className={`py-[19.9px] px-4 ${dashboardPage && "bg-light-white"}`}>
      <div className="max-w-[1140px] container mx-auto justify-between flex">
        <div className="flex gap-2.5 items-center">
          <Link href={"/"}>
            <Image
              src={"/assets/image/webp/page-logo.webp"}
              width={144.39}
              height={33.62}
              alt="page-logo"
            />
          </Link>
          <div className="h-[19px] w-[1.5px] bg-black"></div>
          <p className="font-syne font-medium max-md:text-base">
            TMM Accelerator
          </p>
        </div>
        <div className="flex cursor-pointer items-center gap-[7px]">
          <Image
            src={
              !homePage
                ? "/assets/image/webp/admin-image.webp"
                : "/assets/image/webp/anymous-profile.webp"
            }
            width={40}
            height={40}
            alt="admin"
            className=" pointer-events-none"
          />
          {!homePage ? (
            <div className="flex flex-col max-sm:hidden gap-[1px]">
              <p className="font-syne font-medium leading-[100%]">Jhon doe</p>
              <p className="text-sm text-black/70">Admin</p>
            </div>
          ) : (
            <p className="font-syne font-medium">Login</p>
          )}
          {!homePage && <DownArrow iconClass="max-sm:hidden" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
