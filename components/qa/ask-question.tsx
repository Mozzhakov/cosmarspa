"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import BtnLoader from "@/components/ui/btn-loader";

interface AskQuestionProps {
  dictionary: {
    form: {
      title: string;
      name: string;
      email: string;
      question: string;
      submit: string;
      success_msg: string;
      error_msg: string;
    };
  };
}

export default function AskQuestion({ dictionary }: AskQuestionProps) {
  const { title, name, email, question, submit, success_msg, error_msg } =
    dictionary.form;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/qa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          question: "",
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
      <h3 className="font-heading text-2xl mb-6 text-center">{title}</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-zinc-700 mb-2">
            {name}*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-zinc-700 mb-2">
            {email}*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="question" className="block text-zinc-700 mb-2">
            {question}*
          </label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-[#B7BBAC] hover:bg-[#999D8F] text-white rounded-md transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? <BtnLoader /> : submit}
        </button>
      </form>
    </div>
  );
}
