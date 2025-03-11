"use client";
import { ComplexityIocn, NoMachinesIcon, NoParsIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DetailedMetrices from "./DetailedMetrices";

const DashBoard = () => {
  const router = useRouter();
  const [saveFileName, setSaveFileName] = useState("");
  useEffect(() => {
    setSaveFileName(localStorage.getItem("fileName") as any);
  });

  return (
    <div className="bg-light-white">
      <div className="container max-w-[1140px] mx-auto">
        <div className="w-full flex items-center justify-between">
          <p className="font-semibold text-2xl max-lg:text-xl max-md:text-xl">
            {saveFileName}
          </p>
          <button
            onClick={() => router.push("/upload-file")}
            className="uppercase rounded-md py-4 px-6 cursor-pointer border-gray border border-solid"
          >
            Upload more files
          </button>
        </div>
        <div className="w-full flex mt-6 gap-6">
          <div className="max-w-[558px] w-full bg-white rounded-lg py-[19px] px-4 items-center flex justify-between">
            <div className="gap-4 flex items-center">
              <div className="size-[60px] flex justify-center items-center bg-light-blue rounded-full">
                <ComplexityIocn />
              </div>
              <p className="font-medium font-sync text-xl leading-100">
                Complexity of the code
              </p>
            </div>
            <button className="py-2 px-4 text-red border border-solid border-red bg-light-blue rounded-[49px] text-sm font-semibold">
              HIGH
            </button>
          </div>
          <div className="max-w-[267px] w-full bg-white rounded-lg py-[19px] px-4 items-center flex justify-between">
            <div className="gap-4 flex items-center">
              <div className="size-[60px] flex justify-center items-center bg-light-blue rounded-full">
                <NoMachinesIcon />
              </div>
              <div className="flex flex-col">
                <p className="text-[28px] font-medium leading-100">-</p>
                <p className="text-sm leading-100">No of Machines</p>
              </div>
            </div>
          </div>
          <div className="max-w-[267px] w-full bg-white rounded-lg py-[19px] px-4 items-center flex justify-between">
            <div className="gap-4 flex items-center">
              <div className="size-[60px] flex justify-center items-center bg-light-blue rounded-full">
                <NoParsIcon />
              </div>
              <div className="flex flex-col">
                <p className="text-[28px] font-medium leading-100">-</p>
                <p className="text-sm leading-100">No of Pars</p>
              </div>
            </div>
          </div>
        </div>
        <DetailedMetrices />
      </div>
    </div>
  );
};

export default DashBoard;
