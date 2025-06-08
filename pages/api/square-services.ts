import { SquareClient, SquareEnvironment } from "square";
import type { NextApiRequest, NextApiResponse } from "next";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment:
    process.env.SQUARE_ENVIRONMENT === "production"
      ? SquareEnvironment.Production
      : SquareEnvironment.Sandbox,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  try {
    const categoryResponse = await client.catalog.list({ types: 'CATEGORY' });
    const categoryMap = new Map<string, string>();

    categoryResponse.data?.forEach((cat: any) => {
      categoryMap.set(cat.id, cat.categoryData?.name || "Unknown");
    });
    console.log(categoryMap)
    const response = await client.catalog.list({ types: 'ITEM' });
    const items = response.data as any[];
    console.log(items[0].itemData.categories[0])
    const services = items.map((item) => {
      const variation = item.itemData?.variations?.[0];
      const variationData = variation?.itemVariationData;
      const categoryId = item.itemData?.categories?.[0]?.id;

      return {
        id: item.id,
        name: item.itemData?.name || "Unnamed",
        price: Number(variationData?.priceMoney?.amount ?? 0) / 100,
        currency: variationData?.priceMoney?.currency || "USD",
        duration: Number(variationData?.serviceDuration ?? 0) / 60000,
        category: categoryMap.get(String(categoryId)) || null
      };
    });

    res.status(200).json(services);
  } catch (err: any) {
    console.error("Ошибка получения услуг:", err);
    res.status(500).json({ message: "Ошибка получения данных из Square" });
  }
}
