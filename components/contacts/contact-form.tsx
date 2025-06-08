"use client";

import type React from "react";

import { useState } from "react";
import { toast } from "react-toastify";
import BtnLoader from "@/components/ui/btn-loader";

interface ContactFormProps {
  dictionary: {
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      success_msg: string;
      error_msg: string;
    };
  };
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  const {
    title,
    name,
    email,
    subject,
    message,
    submit,
    success_msg,
    error_msg,
  } = dictionary.form;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      const res = await fetch("/api/contact", {
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
          subject: "",
          message: "",
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
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-heading text-2xl mb-6">{title}</h3>

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

        <div className="mb-4">
          <label htmlFor="subject" className="block text-zinc-700 mb-2">
            {subject}*
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7BBAC]"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-zinc-700 mb-2">
            {message}*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
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
