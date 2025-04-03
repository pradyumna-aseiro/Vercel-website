// app/contact/page.tsx
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz8-S3po1m2kWM1pQn6ZI6XmewyQVRCy-TFlYFmPgkhb_ZdPyS19EwoehEO5t-wxg3_/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data as any).toString(),
        }
      );

      const result = await res.json();
      if (result.result === "success") {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-100 text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Describe your requirement and schedule a call with our expert.
      </p>

      {submitted ? (
        <div className="text-green-600 font-medium">Thank you! We'll be in touch soon.</div>
      ) : (
        <form
          className="max-w-2xl mx-auto text-left space-y-6 bg-white p-8 rounded-xl shadow"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="company"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Your Requirement</label>
            <textarea
              name="requirement"
              rows={4}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Preferred Call Time</label>
            <input
              type="text"
              name="call_time"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          {error && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
