"use client";
import { UPLOAD_FILE_LIST } from "@/utils/helper";
import { CheckIcon, PlusIcon, UploadIcon, UplodingIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UploadData from "./UploadData";
import UploadingData from "./UploadingData";

const UploadFIle = () => {
  const router = useRouter();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadCount, setUploadCount] = useState(0);

  //   on Change
  const upLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0].name ?? "";
    // storage data
    setFileName(fileName);
    localStorage.setItem("fileName", fileName);
    setFileUploaded(true);
  };
  // on Drop
  const DropFile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const fileName = e.dataTransfer.files?.[0].name ?? "";
    // storage data
    setFileName(fileName);
    localStorage.setItem("fileName", fileName);
    setFileUploaded(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (fileUploaded && uploadCount < 100) {
      interval = setInterval(() => {
        setUploadCount((prevCount) => {
          if (prevCount >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevCount + 1;
        });
      }, 30);
    }

    if (uploadCount === 100) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [fileUploaded, uploadCount]);

  return (
    <div className="pt-9 pb-[69px] px-4">
      <div className="max-w-[1140px] container mx-auto">
        <h2 className="font-syne font-semibold mb-[34px] text-center max-lg:text-3xl text-[32px] max-md:text-2xl max-sm:text-xl">
          Read & process your files online
        </h2>
        <div className="max-w-[786px] mx-auto">
          <div className="shadow-[0_16px_42.7px_0_#00000014] rounded-xl bg-white w-full p-4">
            <div className="cursor-pointer w-full h-[326px] rounded-lg border border-dashed border-red">
              {fileUploaded === false ? (
                <UploadData
                  customOnChange={upLoadFile}
                  customOnDrop={DropFile}
                  customOnDragOver={(e: React.DragEvent) => e.preventDefault()}
                />
              ) : (
                <UploadingData
                  uploadFileName={fileName}
                  percentage={uploadCount}
                  countWidth={uploadCount}
                />
              )}
            </div>
          </div>
          <div className="flex justify-between mt-12 items-center">
            <p className="max-w-[335px] text-sm leading-150">
              Our accelerator allows you to upload, read, and process multiple
              file types (e.g., Python, JAR, ZIP), extracting key data like
              classes, methods, and structure for easy review.
            </p>
            <div className="flex flex-col gap-2">
              {UPLOAD_FILE_LIST.map((item, index) => (
                <div key={index} className="flex gap-[9px] items-center">
                  <CheckIcon />
                  <p className="text-sm leading-150">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFIle;
