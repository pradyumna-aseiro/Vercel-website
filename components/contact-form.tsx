"use client";

import { useState } from "react";
import CTAButton from "@/components/CTA-button";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      requirement: (form.elements.namedItem("requirement") as HTMLTextAreaElement).value,
      call_time: (form.elements.namedItem("call_time") as HTMLInputElement).value,
    };

    const formData = new URLSearchParams(data).toString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz8-S3po1m2kWM1pQn6ZI6XmewyQVRCy-TFlYFmPgkhb_ZdPyS19EwoehEO5t-wxg3_/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        toast.success("Thank you! Your message has been submitted.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Submission failed. Please try again later.");
      console.error("Form error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto text-left space-y-6 bg-white p-8 rounded-xl shadow"
    >
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input type="text" name="name" required className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input type="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Phone</label>
        <input type="tel" name="phone" required className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Company Name</label>
        <input type="text" name="company" className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Your Requirement</label>
        <textarea name="requirement" rows={4} required className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Preferred Call Time</label>
        <input type="text" name="call_time" className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div className="text-center">
        <CTAButton
          type="submit"
          text={submitting ? "Submitting..." : "Submit"}
          disabled={submitting}
        />
      </div>
    </form>
  );
}
