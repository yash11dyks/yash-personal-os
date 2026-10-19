import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Publications" };

const papers = [
  {
    title:
      "Application of Instance vs. Amodal Deep Models for Mitochondria Segmentation Using Simulated and Real Confocal Microscopy Data",
    status: "In preparation",
    venue: "Biomedical Signal Processing and Control (Elsevier)",
  },
  {
    title:
      "Amodal Computer Vision: A Systematic Review of the Techniques and Applications Over a Decade",
    status: "Submitted",
    venue: "Computer Science Review (Elsevier)",
  },
  {
    title:
      "From Visual Plausibility to Physical Grounding: A Review of Modern Amodal Perception",
    status: "Submitted",
    venue: "IC3AI (IEEE)",
  },
];

export default function Publications() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <PageHeader title="Publications" />

      <div className="space-y-4">
        {papers.map((paper) => (
          <article
            key={paper.title}
            className="rounded-xl border border-stone-200 bg-white p-5"
          >
            <p className="font-medium leading-snug">{paper.title}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 font-medium text-amber-800">
                {paper.status}
              </span>
              <span className="text-stone-500">{paper.venue}</span>
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
