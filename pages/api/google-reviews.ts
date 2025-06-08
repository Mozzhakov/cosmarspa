import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = "ChIJ8zLvFTQ3R4YRxlGhKqq0kPs";

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const raw = await response.text(); // 👈
    console.log("RAW RESPONSE:", raw);

    const data = JSON.parse(raw);

    // const response = await fetch(url);
    // console.log(response);
    // const data = await response.json();

    if (data.status === "OK") {
      const reviews = data.result.reviews || [];
      res.status(200).json(reviews);
    } else {
      res
        .status(500)
        .json({ message: "Failed to fetch reviews", error: data.status });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching reviews", error: err });
  }
}
