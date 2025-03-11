import { UplodingIcon } from "@/utils/icons";
import React from "react";
interface uploadingData {
  percentage: number;
  uploadFileName: string;
  countWidth: number;
}

const UploadingData = ({
  percentage,
  uploadFileName,
  countWidth,
}: uploadingData) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex gap-3 max-w-[370px] w-full p-4 mx-auto">
        <UplodingIcon />
        <div className="flex w-full gap-2 flex-col">
          <div className="flex max-w-[306px] w-full justify-between">
            <p className="leading-125">
              Uploading <span className="font-bold">{uploadFileName}</span>
            </p>
            <p>{percentage}%</p>
          </div>
          <div className="bg-sky-blue h-[3px] rounded-sm w-full">
            <div
              className="bg-red w-0 transition-all duration-300 h-full"
              style={{ width: `${countWidth}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadingData;
