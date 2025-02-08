import React from "react";
import Image from "next/image";

interface ChairsbannerProps {
  category?: {
    slug: string;
    name: string;
    bannerUrl?: string;
  };
}

const Chairsbanner: React.FC<ChairsbannerProps> = ({ category }) => {
  return (
    <div className="relative">
      <div className="max-2xl:pl-40 max-sm:pl-2 text-xl md:text-4xl lg:text-7xl  text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 absolute font-bold">
        {category?.name}
      </div>
      <Image
        src={category?.bannerUrl || "default"}
        className="h-[300px] max-md:h-[100px]"
        width={1900}
        height={300}
        style={{ objectFit: "cover" }}
        alt="banner"
        placeholder="blur"
        blurDataURL={category?.bannerUrl}
        sizes="(max-width: 640px) 60vw, (max-width: 1200px) 50vw"
        priority
        quality={75}
      />
    </div>
  );
};
export default Chairsbanner;
