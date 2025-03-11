"use client";
import { CheckIcon, UploadIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UploadData from "./UploadData";
import UploadingData from "./UploadingData";
import Image from "next/image";

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
      const objectUrl = URL.createObjectURL(file); // Create object URL
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
      const objectUrl = URL.createObjectURL(file); // Create object URL for image
      setFileName(fileName);
      localStorage.setItem("fileName", fileName); // Save file name
      localStorage.setItem("profileImage", objectUrl); // Save object URL
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
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [fileUploaded, uploadCount]);

  return (
    <div className="pt-9 pb-[69px] max-sm:py-10 px-4">
      {showImage && (
        <Image src={showImage} alt="upload-bg" width={100} height={100} />
      )}
      <div className="max-w-[1140px] container mx-auto">
        <h2 className="font-syne font-semibold mb-[34px] max-md:mb-7 max-sm:mb-5 text-center max-lg:text-3xl text-[32px] max-md:text-2xl max-sm:text-xl">
          Upload Images Online
        </h2>
        <div className="max-w-[786px] mx-auto">
          <div className="shadow-[0_16px_42.7px_0_#00000014] rounded-xl bg-white w-full p-4">
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
                  uploadFileName={fileName}
                  percentage={uploadCount}
                  countWidth={uploadCount}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
