"use client";
import { ComplexityIocn, NoMachinesIcon, NoParsIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import DetailedMetrices from "./DetailedMetrices";

const DashBoard = () => {
  const router = useRouter();
  const [saveFileName, setSaveFileName] = useState("");
  useEffect(() => {
    setSaveFileName(localStorage.getItem("fileName") as string);
  });

  return (
    <>
      <Suspense>
        <div className="bg-light-white pt-6  pb-[46px] max-sm:pb-12 px-4">
          <div className="container max-w-[1140px] mx-auto">
            <div className="w-full flex max-md:flex-col max-md:gap-2 items-center justify-between">
              <p className="font-semibold font-syne text-2xl max-lg:text-xl max-md:text-xl">
                {saveFileName.length > 10
                  ? `${saveFileName.slice(0, 10)}...`
                  : saveFileName}
              </p>
              <button
                onClick={() => {
                  router.push("/upload-file");
                  localStorage.removeItem("fileName");
                  localStorage.removeItem("profileImage");
                }}
                className="uppercase font-syne text-sm font-medium hover:scale-95 transition-all duration-300 rounded-md py-[13.5px] max-md:py-3 max-md:px-5 max-sm:py-2 max-sm:px-4 max-sm:text-sm px-[22.2px] cursor-pointer border-gray border border-solid"
              >
                Upload more files
              </button>
            </div>
            <div className="w-full max-lg:flex-wrap flex mt-6 gap-6 max-sm:gap-4">
              <div className="max-w-[558px] max-lg:max-w-[unset] w-full bg-white rounded-lg py-[19px] max-sm:px-2 max-sm:py-3 px-4 items-center flex justify-between">
                <div className="gap-4 max-sm:gap-2 flex items-center">
                  <div className="size-[60px] max-sm:size-10 flex justify-center items-center bg-light-blue rounded-full">
                    <ComplexityIocn iconClass="max-sm:w-[65%]" />
                  </div>
                  <p className="font-medium font-sync text-xl max-lg:text-lg max-md:text-base max-sm:text-sm leading-100">
                    Complexity of the code
                  </p>
                </div>
                <button className="py-2 px-4 cursor-pointer hover:scale-95 transition-all duration-300 text-red border border-solid border-red bg-light-blue rounded-[49px] text-sm font-semibold">
                  HIGH
                </button>
              </div>
              <div className="max-w-[558px] max-lg:max-w-[unset] w-full max-sm:gap-4 flex gap-6">
                <div className="max-w-[267px] max-lg:max-w-[558px] w-full bg-white rounded-lg py-[19px] px-4 max-sm:px-2 max-sm:py-3 items-center flex justify-between">
                  <div className="gap-4 max-sm:gap-2 flex items-center">
                    <div className="size-[60px] max-sm:size-10 flex justify-center items-center bg-light-blue rounded-full">
                      <NoMachinesIcon iconClass="max-sm:w-[65%]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[28px] max-sm:text-2xl font-medium leading-100">
                        -
                      </p>
                      <p className="text-sm max-sm:text-xs leading-100">
                        No of Machines
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[267px] max-lg:max-w-[558px] w-full bg-white rounded-lg py-[19px] px-4 max-sm:px-2 max-sm:py-3 items-center flex justify-between">
                  <div className="gap-4 max-sm:gap-2 flex items-center">
                    <div className="size-[60px] max-sm:size-10 flex justify-center items-center bg-light-blue rounded-full">
                      <NoParsIcon iconClass="max-sm:w-[65%]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[28px] max-sm:text-2xl font-medium leading-100">
                        -
                      </p>
                      <p className="text-sm max-sm:text-xs leading-100">
                        No of Pars
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DetailedMetrices />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default DashBoard;
