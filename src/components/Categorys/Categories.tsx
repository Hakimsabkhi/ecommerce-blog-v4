// app/(wherever)/categories/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategoriesData, gettitlecategory } from "@/lib/StaticDataHomePage";

export const revalidate = 60;

export default async function Categories() {
  const datatitlecatgoray = await gettitlecategory();
  const titlecatgoray = JSON.parse(datatitlecatgoray);
  const categories = await getCategoriesData();

  return (
    <div className="desktop max-md:w-[95%] flex flex-col gap-10 py-8 mt-4">
      {categories.length > 0 && (
        <div>
          <div className="flex-col flex gap-2 items-center w-full max-lg:text-center mb-6">
            <h3 className="font-bold text-4xl text-HomePageTitles">
              {titlecatgoray.title}
            </h3>
            <p className="text-base text-[#525566]">{titlecatgoray.subtitle}</p>
          </div>
          <div className="gap-4 w-full grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/${category.slug}`}
                className="rounded-full"
              >
                <div className="relative rounded-full w-full h-full group overflow-hidden">
                  <div className="w-full h-full bg-black/60 absolute rounded-full opacity-0 lg:group-hover:opacity-80 duration-500"></div>
                  <p
                    className="cursor-pointer absolute xl:group-hover:top-32 lg:group-hover:top-12 top-1/2 left-1/2 
                      transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-lg 
                      max-2xl:text-base max-xl:text-base rounded-3xl max-xl:px-3 w-[85%] text-center py-1 duration-500"
                  >
                    {category.name}
                  </p>
                  <p
                    className="cursor-pointer absolute top-[80%] xl:group-hover:top-44 lg:group-hover:top-20 left-1/2 
                      transform -translate-x-1/2 -translate-y-1/2 text-white text-lg max-xl:text-xs opacity-0 
                      lg:group-hover:opacity-100 pt-2 duration-500"
                  >
                    {category.numberproduct}
                  </p>

                  <Image
                    className="rounded-full w-full"
                    src={category.imageUrl!}
                    alt={category.name}
                    width={100}
                    height={100}
                    placeholder="blur"
                    blurDataURL={category.imageUrl!}
                    sizes="(max-width: 640px) 15vw, (max-width: 1200px) 15vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
