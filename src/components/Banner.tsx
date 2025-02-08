// app/banner/page.tsx
import React from "react";
import Image from "next/image";
import { getWebsiteinfoData } from "@/lib/StaticDataHomePage";

export const revalidate = 60;

export default async function Banner() {
  const companyData = await getWebsiteinfoData();

  return (
    <div className="relative w-auto h-[300px] max-md:h-[100px]">
      <Image
        fill
        style={{ objectFit: "cover" }}
        alt="banner"
        src={companyData?.imageUrl || "/fallback-image.jpg"}
        placeholder="blur"
        blurDataURL={companyData?.imageUrl}
        sizes="(max-width: 640px) 10vw, (max-width: 1200px) 10vw (max-width: 1920px) 100vw"
        quality={75}
      />
    </div>
  );
}
