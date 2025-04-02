// app/components/ContactForm.tsx
"use client";

import { useState } from "react";

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

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbz8-S3po1m2kWM1pQn6ZI6XmewyQVRCy-TFlYFmPgkhb_ZdPyS19EwoehEO5t-wxg3_/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      if (result.result === "success") {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="max-w-2xl mx-auto text-left space-y-6 bg-white p-8 rounded-xl shadow"
      onSubmit={handleSubmit}
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
