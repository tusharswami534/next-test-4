"use client";
import { UPLOAD_FILE_LIST } from "@/utils/helper";
import { CheckIcon, PlusIcon, UploadIcon, UplodingIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UploadFIle = () => {
  const router = useRouter();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadCount, setUploadCount] = useState(0);

  const upLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0].name ?? "";
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
                <div className="w-full h-full !cursor-pointer">
                  <input onChange={upLoadFile} type="file" id="file" hidden />
                  <label htmlFor="file">
                    <div className="w-full h-full rounded-lg flex flex-col justify-center items-center">
                      <UploadIcon />
                      <div className="flex flex-col text-center gap-1 my-4">
                        <p className="leading-150">
                          Paste or drag and drop files here{" "}
                        </p>
                        <p className="leading-150 text-center text-sm text-black/40">
                          WAR, ZIP or EAR, file size no more than 10MB{" "}
                        </p>
                      </div>
                      <div className="size-8 bg-red rounded-sm flex justify-center items-center">
                        <PlusIcon />
                      </div>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="flex gap-3 max-w-[370px] w-full p-4 mx-auto">
                    <UplodingIcon />
                    <div className="flex w-full gap-2 flex-col">
                      <div className="flex max-w-[306px] w-full justify-between">
                        <p className="leading-125">
                          Uploading{" "}
                          <span className="font-bold">{fileName}</span>
                        </p>
                        <p>{uploadCount}%</p>
                      </div>
                      <div className="bg-sky-blue h-[3px] rounded-sm w-full">
                        <div
                          className="bg-red w-0 transition-all duration-300 h-full"
                          style={{ width: `${uploadCount}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
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
