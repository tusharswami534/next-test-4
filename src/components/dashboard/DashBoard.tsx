"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const router = useRouter();
  const [saveFileName, setSaveFileName] = useState("");
  useEffect(() => {
    setSaveFileName(localStorage.getItem("fileName") as any);
  });

  return (
    <div>
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
      </div>
    </div>
  );
};

export default DashBoard;
