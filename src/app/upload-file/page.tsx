"use client";
import UploadFIle from "@/components/upload/UploadFIle";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isLogin") !== "true") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <UploadFIle />
    </>
  );
};

export default page;
