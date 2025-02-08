import React from "react";
import ProductFilterClient from "@/components/Products/ProductPage/ProductFilterClient";
import { cachedGetProductsByCategory } from "@/lib/StaticCategoryProduct";

interface ProductsPageProps {
  params: {
    slugCategory?: string;
  };
}

// Revalidate the page every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { slugCategory = "" } = params;
  try {
    const products = await cachedGetProductsByCategory(slugCategory);

    // Transform each product to match the expected ProductData type.
    const formattedProducts = products.map((product) => ({
      ...product,
      // Convert _id to string
      _id: String(product._id),
      // Ensure description is always a string (default to empty if undefined)
      description: product.description ?? "",
      // Transform the brand to always be an object with _id and name.
      brand:
        product.brand && typeof product.brand === "object"
          ? { _id: String(product.brand._id), name: product.brand.name || "" }
          : { _id: "", name: "" },
      // Transform the category to match the expected shape { name: string; slug: string; }
      category:
        product.category && typeof product.category === "object"
          ? { name: product.category.name || "", slug: product.category.slug || "" }
          : { name: "", slug: "" },
    }));

    return <ProductFilterClient products={formattedProducts} />;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return (
      <div className="text-red-500 text-center">Error: {errorMessage}</div>
    );
  }
}
