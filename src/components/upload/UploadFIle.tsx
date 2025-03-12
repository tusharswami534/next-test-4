"use client";
import { CheckIcon, UploadIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UploadData from "./UploadData";
import UploadingData from "./UploadingData";
import Image from "next/image";
import { UPLOAD_FILE_LIST } from "@/utils/helper";

const UploadFile = () => {
  const router = useRouter();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadCount, setUploadCount] = useState(0);
  const [showImage, setShowImage] = useState("");

  // Handle file input change
  const upLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const fileName = file.name;
      const objectUrl = URL.createObjectURL(file);
      setShowImage(objectUrl);
      localStorage.setItem("fileName", fileName);
      localStorage.setItem("profileImage", objectUrl);
      console.log("File Name:", fileName);
      setFileName(fileName);
      setFileUploaded(true);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const DropFile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const fileName = file.name;
      const objectUrl = URL.createObjectURL(file);
      setFileName(fileName);
      localStorage.setItem("fileName", fileName);
      localStorage.setItem("profileImage", objectUrl);
      setFileUploaded(true);
    } else {
      alert("Please upload a valid image file.");
    }
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
      }, 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, [fileUploaded, uploadCount]);

  return (
    <div className="pt-9 pb-[69px] max-sm:py-10 relative overflow-hidden px-4">
      <Image
        src={"/assets/image/webp/page-layer.webp"}
        width={169}
        height={211}
        alt="page-layer"
        className="top-[55px] absolute max-sm:hidden -left-4"
      />
      <Image
        src={"/assets/image/webp/page-layer.webp"}
        width={169}
        height={211}
        alt="page-layer"
        className="bottom-10 rotate-180 max-sm:hidden absolute -right-4"
      />
      <div className="max-w-[1140px] container mx-auto">
        <h2 className="font-syne font-semibold mb-[34px] max-md:mb-7 max-sm:mb-5 text-center max-lg:text-3xl text-[32px] max-md:text-2xl max-sm:text-xl">
          Upload Images Online
        </h2>
        <div className="max-w-[786px] mx-auto">
          <div className="shadow-[0_16px_42.7px_0_#00000014] rounded-xl bg-white w-full p-4 max-sm:p-2">
            <div
              className="cursor-pointer w-full h-[326px] max-md:h-[300px] max-sm:h-[250px] rounded-lg border border-dashed border-red"
              onDrop={DropFile}
              onDragOver={(e) => e.preventDefault()}
            >
              {fileUploaded === false ? (
                <UploadData
                  customOnChange={upLoadFile}
                  customOnDrop={DropFile}
                  customOnDragOver={(e: React.DragEvent) => e.preventDefault()}
                />
              ) : (
                <UploadingData
                  uploadFileName={
                    fileName.length > 10
                      ? `${fileName.slice(0, 10)}...`
                      : fileName
                  }
                  percentage={uploadCount}
                  countWidth={uploadCount}
                />
              )}
            </div>
          </div>
          <div className="mt-12 max-sm:mt-6 max-md:mt-8 max-lg:mt-10 w-full justify-between max-md:flex-col max-md:justify-center max-md:items-start flex gap-5 items-center">
            <p className="text-sm leading-150 max-w-[340px] max-md:max-w-[unset]">
              Our accelerator allows you to upload, read, and process multiple
              file types (e.g., Python, JAR, ZIP), extracting key data like
              classes, methods, and structure for easy review.
            </p>
            <div className="flex gap-2 flex-col">
              {UPLOAD_FILE_LIST.map((item, index) => (
                <div className="gap-[9px] flex items-center" key={index}>
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
