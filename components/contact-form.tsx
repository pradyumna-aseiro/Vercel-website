"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;

    // Collect data
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      requirement: (form.elements.namedItem("requirement") as HTMLTextAreaElement).value,
      call_time: (form.elements.namedItem("call_time") as HTMLInputElement).value,
    };

    // Convert to URL encoded format
    const formData = new URLSearchParams(data).toString();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz8-S3po1m2kWM1pQn6ZI6XmewyQVRCy-TFlYFmPgkhb_ZdPyS19EwoehEO5t-wxg3_/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        alert("Thank you! Your message has been submitted.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Please try again later.");
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
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

