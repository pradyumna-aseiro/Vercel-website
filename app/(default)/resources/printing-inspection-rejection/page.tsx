// app/resources/printing-inspection-rejection/page.tsx

import Image from "next/image";
import PageTransition from "@/components/page-transition";

export default function PrintingInspectionRejectionPage() {
  return (
    <PageTransition>
      <main className="pt-36 pb-20 px-6 bg-white">
        <section className="max-w-5xl mx-auto text-left">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Printing, Inspection, and Rejection System</h1>
          <p className="text-gray-700 text-lg mb-10">
            A fully automated solution for real-time inspection of printed bottles and intelligent rejection of defective items, using Hikrobot cameras, Vision Master software, and Renu PLC control.
          </p>

          <div className="relative w-full h-80 mb-12">
            <Image src="/resources/printing-inspection-rejection-banner.png" alt="Printing Inspection Rejection" layout="fill" objectFit="cover" className="rounded-xl" />
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
              <p className="text-gray-700">
                Our system captures printed data, compares it with master data entered via a web portal, and rejects faulty prints in real-time using pneumatic cylinders controlled by PLC.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
              <p className="text-gray-700">
                Manual inspection led to human errors, slow production, and undetected misprints. The customer needed a fast, reliable, and error-free system for printing validation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Solution Architecture</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Web platform for operator data input (Batch No, MFG Date, Expiry Date).</li>
                <li>Data simultaneously sent to printer and vision system.</li>
                <li>Hikrobot industrial camera captures printed text on moving bottles.</li>
                <li>Vision Master software compares captured image with master data.</li>
                <li>Correct prints continue; incorrect prints trigger PLC signal for rejection.</li>
                <li>Guided pneumatic cylinder ejects faulty bottles automatically.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Flowchart</h2>
              <div className="relative w-full h-96">
                <Image src="/resources/printing-inspection-rejection-flowchart.png" alt="Printing Inspection Flowchart" layout="fill" objectFit="contain" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Project Results</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Inspection time reduced by 80% compared to manual checking.</li>
                <li>Zero human errors in identifying wrong prints.</li>
                <li>Increased production line efficiency and reliability.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Demo Video</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <video controls className="w-full h-full object-cover">
                  <source src="/resources/printing-inspection-rejection-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        </section>
      </main>
    </PageTransition>
  );
}
