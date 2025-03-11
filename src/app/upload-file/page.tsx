"use client";
import Header from "@/components/common/Header";
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
      <Header />
      <UploadFIle />
    </>
  );
};

export default page;
