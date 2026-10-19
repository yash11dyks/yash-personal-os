import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Experience" };

const roles = [
  {
    title: "Graduate Researcher",
    meta: "NIT Jalandhar · 2024–2026",
    points: [
      "Benchmarked four architectures (Mask2Former, AISFormer, DETR, Nellie) for mitochondria segmentation on simulated confocal microscopy data. Best model (Mask2Former) reached test mIoU of 0.786.",
      "Built full training and evaluation pipelines from scratch using HuggingFace Transformers and Detectron2, and engineered a PBS-managed HPC training setup on H100 MIG GPUs.",
      "Ran a systematic literature review of 100+ amodal computer vision papers, producing a hierarchical taxonomy of the field.",
    ],
  },
  {
    title: "Teaching",
    meta: "REVA University, Bengaluru",
    points: ["Subjects: Principles of AI; Data Visualization Techniques."],
  },
  {
    title: "Data Science Engineer Intern",
    meta: "HopingMinds, Mohali · 2023",
    points: [
      "Six-month internship in applied data science, contributing to model development and data pipeline workflows.",
    ],
  },
  {
    title: "Python Developer Intern",
    meta: "Vedanta, Rajpura · 2021",
    points: [
      "Four-month internship working with Python, NumPy, and Pandas for data processing, and Tkinter for building desktop GUI applications.",
    ],
  },
];

export default function Experience() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <PageHeader title="Experience" />

      <ol className="space-y-10 border-l-2 border-stone-200 pl-6 sm:pl-8">
        {roles.map((role) => (
          <li key={role.title} className="relative">
            <span
              className="absolute -left-[33px] sm:-left-[41px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-stone-50"
              aria-hidden="true"
            />
            <h2 className="text-xl font-semibold">{role.title}</h2>
            <p className="mb-3 text-sm text-stone-500">{role.meta}</p>
            <ul className="list-disc space-y-2 pl-5 text-stone-700 leading-relaxed">
              {role.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </main>
  );
}
