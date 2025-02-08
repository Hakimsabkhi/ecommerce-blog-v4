import connectToDatabase from "@/lib/db";
import Category from "@/models/Category";
import Product, { IProduct } from "@/models/Product";
import Subcategory from "@/models/Subcategory";
import { cache } from "react";

/**
 * Retrieves products by a given category or subcategory slug.
 * @param categorySlug - The slug identifier for the category.
 * @returns An array of products matching the category criteria.
 */
export async function getProductsByCategory(categorySlug: string): Promise<IProduct[]> {
  if (!categorySlug) {
    console.error("Category slug is required");
    return [];
  }

  await connectToDatabase();

  // Try to find the category first
  const foundCategory = await Category.findOne({
    slug: categorySlug,
    vadmin: "approve",
  })
    .lean()
    .exec();

  let products: IProduct[] = [];

  if (foundCategory) {
    products = await Product.find({
      category: foundCategory._id,
      vadmin: "approve",
    })
      .populate("category", "name slug")
      .populate("brand", "name")
      .populate("boutique", "nom")
      .populate("user", "name email")
      .lean()
      .exec();
  } else {
    // If not found in Category, check in Subcategory
    const foundSubcategory = await Subcategory.findOne({
      slug: categorySlug,
      vadmin: "approve",
    })
      .lean()
      .exec();
    if (foundSubcategory) {
      products = await Product.find({
        subcategory: foundSubcategory._id,
        vadmin: "approve",
      })
        .populate("category", "name slug")
        .populate("brand", "name")
        .populate("boutique", "nom")
        .populate("user", "name email")
        .lean()
        .exec();
    }
  }

  return products;
}

// Cache the function so that repeated calls with the same slug are memoized
export const cachedGetProductsByCategory = cache(getProductsByCategory);
