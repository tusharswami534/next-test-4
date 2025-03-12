import { PlusIcon, UploadIcon } from "@/utils/icons";
import React from "react";

const UploadData = ({
  customOnChange,
  customOnDrop,
  customOnDragOver,
}: any) => {
  return (
    <div className="w-full h-full !cursor-pointer">
      <input onChange={customOnChange} type="file" id="file" hidden />
      <label htmlFor="file">
        <div
          onDrop={customOnDrop}
          onDragOver={customOnDragOver}
          className="w-full h-full cursor-pointer rounded-lg flex flex-col justify-center items-center"
        >
          <UploadIcon />
          <div className="flex flex-col text-center gap-1 my-4">
            <p className="leading-150 max-md:text-sm">
              Paste or drag and drop files here{" "}
            </p>
            <p className="leading-150 text-center max-md:text-xs text-sm text-black/40">
              WAR, ZIP or EAR, file size no more than 10MB{" "}
            </p>
          </div>
          <div className="size-8 bg-red rounded-sm flex justify-center items-center">
            <PlusIcon />
          </div>
        </div>
      </label>
    </div>
  );
};

export default UploadData;
