import { DETAILED_METRICES_LIST } from "@/utils/helper";
import { DetailedArrow } from "@/utils/icons";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const DetailedMetrices = () => {
  const params = useSearchParams();
  const card = params.get("card");
  const router = useRouter();

  return (
    <div className="bg-light-white">
      <p className="font-semibold text-2xl leading-100 mt-[31px] pb-6">
        Detailed metrices
      </p>
      <div className="w-full flex gap-6">
        <div className="max-w-[558px] flex flex-col gap-4 w-full">
          {DETAILED_METRICES_LIST.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                router.push(
                  `/dashboard?card=${item.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`
                )
              }
              className={`w-full bg-white flex rounded-lg cursor-pointer border border-solid items-center text-sm justify-between py-3 px-4 ${
                card === item.title.toLowerCase().replaceAll(" ", "-")
                  ? "border-red"
                  : "border-transparent"
              }`}
            >
              <span className="flex items-center gap-4">
                <span className="bg-light-blue justify-center font-semibold text-2xl items-center flex size-10 rounded-full">
                  {item.number}
                </span>
                {item.title}
              </span>
              <DetailedArrow />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedMetrices;
