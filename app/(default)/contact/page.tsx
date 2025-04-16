// app/contact/page.tsx
"use client";

import { useState } from "react";
import PageTransition from "@/components/page-transition";
import CTAButton from "@/components/CTA-button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

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
          body: new URLSearchParams(data).toString(),
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-4 bg-slate-100 text-center min-h-screen">
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
            {error && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
            <div className="text-center">
              <CTAButton
                type="submit"
                text={submitting ? "Submitting..." : "Submit"}
                disabled={submitting}
              />
            </div>
          </form>
        )}

        {/* Google Map Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <p className="text-gray-600 mb-6">Meet us at our office in Secunderabad, Hyderabad</p>
          <div className="w-full max-w-5xl mx-auto aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.277627364696!2d78.5082633!3d17.4464212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bdf81786025%3A0xe069601482f8891!2sAseiro%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1743678632918!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
