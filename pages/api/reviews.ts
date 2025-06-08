import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  sn_link: String,
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

// Обязательно проверка, чтобы модель не переопределялась при hot-reload
const Reviews = mongoose.models.Review || mongoose.model("Review", ReviewSchema);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  try {
    console.log("🔍 API reviews handler работает");
    await dbConnect();

    if (req.method === "GET") {
      const reviews = await Reviews.find().sort({ createdAt: -1 });
      return res.status(200).json(reviews);
    }

    if (req.method === "POST") {
      const newReview = await Reviews.create(req.body);
      return res.status(201).json(newReview);
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("❌ API error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
