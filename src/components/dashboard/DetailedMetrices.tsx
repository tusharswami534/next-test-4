import { DETAILED_METRICES_LIST } from "@/utils/helper";
import { DetailedArrow } from "@/utils/icons";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const DetailedMetrices = () => {
  const params = useSearchParams();
  const card = params.get("card") || "default-value";
  const router = useRouter();
  console.log(card, router);

  return (
    <div className="bg-light-white">
      <p className="font-semibold text-2xl max-md:text-xl leading-100 mt-[31px] pb-6">
        Detailed metrices
      </p>
      <div className="w-full max-md:flex-col flex gap-6">
        <div className="max-w-[558px] max-md:max-w-[unset] flex flex-col gap-4 w-full">
          {DETAILED_METRICES_LIST.map((item, index) => (
            <button
              key={index}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                router.push(
                  `/dashboard?card=${item.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`,
                  { scroll: false }
                );
              }}
              className={`w-full bg-white flex rounded-lg cursor-pointer border border-solid items-center text-sm justify-between py-3 px-4 ${
                card === item.title.toLowerCase().replaceAll(" ", "-")
                  ? "border-red"
                  : "border-transparent"
              }`}
            >
              <span className="flex items-center gap-4">
                <span className="bg-light-blue justify-center font-semibold font-syne text-2xl max-md:text-xl max-sm:text-lg items-center flex size-10 rounded-full">
                  {item.number}
                </span>
                {item.title}
              </span>
              <DetailedArrow />
            </button>
          ))}
        </div>
        <div className="max-w-[558px] relative max-md:max-w-[unset] w-full rounded-lg max-md:py-5 flex justify-center items-center bg-white">
          <p className="font-medium text-xl max-md:text-lg max-sm:text-base font-syne bottom-3 left-5 absolute">
            11 Starter processes
          </p>
          <Image
            src={"/assets/image/webp/color-circle-img.webp"}
            width={497}
            height={315.08}
            alt="color-image"
            className="pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedMetrices;
