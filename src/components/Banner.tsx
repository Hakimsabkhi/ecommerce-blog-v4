// app/banner/page.tsx
import React from "react";
import Image from "next/image";
import { getWebsiteinfoData } from "@/lib/StaticDataHomePage";

export const revalidate = 60;

export default async function Banner() {
  const companyData = await getWebsiteinfoData();

  return (

      <Image
      className="h-[200px] max-md:h-[100px]"
      width={1920}
      height={200}
  style={{ objectFit: "cover" }}
  alt="banner"
  src={companyData?.imageUrl || "/fallback-image.jpg"}
  placeholder="blur"
  blurDataURL={companyData?.imageUrl}
  sizes="(max-width: 640px) 60vw, (max-width: 1200px) 50vw"
  priority
  quality={75}
/>

  );
}
