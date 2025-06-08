"use client";

import { useState } from "react";
import type React from "react";
import { toast } from "react-toastify";
import BtnLoader from "@/components/ui/btn-loader";

interface Review {
  _id: string;
  name: string;
  email: string;
  comment: string;
  rating: number;
  sn_link?: string;
  createdAt: string;
}

interface ReviewFormProps {
  dictionary: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      sn_link: string;
      rating: string;
      comment: string;
      submit: string;
      success_msg: string;
      error_msg: string;
    };
  };
  onReviewSubmitted: (review: Review) => void;
}

export default function ReviewForm({
  dictionary,
  onReviewSubmitted,
}: ReviewFormProps) {
  const {
    title,
    name,
    email,
    sn_link,
    rating,
    comment,
    submit,
    success_msg,
    error_msg,
  } = dictionary.form;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sn_link: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating: number) => {
    setFormData((prev) => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const createdReview = await res.json();
        onReviewSubmitted?.(createdReview);
        setFormData({
          name: "",
          email: "",
          sn_link: "",
          rating: 5,
          comment: "",
        });
        toast.success(`${success_msg}`);
      } else {
        toast.error(`${error_msg}`);
      }
    } catch (err) {
      toast.error(`${error_msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-heading text-2xl mb-3 text-center">{title}</h3>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="block text-zinc-700 mb-2">
            {name}*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="block text-zinc-700 mb-2">
            {email}*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          />
        </div>

        {/* Social Network Link */}
        <div className="mb-3">
          <label htmlFor="sn_link" className="block text-zinc-700 mb-2">
            {sn_link}
          </label>
          <input
            type="url"
            id="sn_link"
            name="sn_link"
            value={formData.sn_link}
            onChange={handleChange}
            placeholder="https://instagram.com/yourprofile"
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
          />
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="block text-zinc-700 mb-2">{rating}*</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingChange(star)}
                className="focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 ${star <= formData.rating ? "text-yellow-500" : "text-zinc-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div className="mb-3">
          <label htmlFor="comment" className="block text-zinc-700 mb-2">
            {comment}*
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#B7BBAC] hover:bg-[#999D8F] text-white rounded-md transition-colors duration-200"
        >
          {loading ? <BtnLoader /> : submit}
        </button>
      </form>
    </div>
  );
}
