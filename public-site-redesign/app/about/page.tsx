import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "About" };

const skills = [
  "Python", "PyTorch", "HuggingFace Transformers", "Detectron2", "TensorFlow",
  "SQL", "Next.js", "React", "Node.js", "Supabase",
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <PageHeader title="About" />

      <p className="text-lg leading-relaxed text-stone-700">
        AI/ML engineer and full-stack developer with a research background in
        deep learning for biomedical image segmentation. M.Tech in Data Science
        &amp; Engineering from NIT Jalandhar (thesis defended August 2026),
        currently open to freelance, research, and full-time opportunities
        across AI/ML, LLM engineering, and web development.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="font-medium">M.Tech, Data Science &amp; Engineering</p>
            <p className="text-sm text-stone-500">NIT Jalandhar · 2024–2026</p>
            <p className="mt-2 text-sm text-stone-600">
              Thesis: &ldquo;Application of Instance vs. Amodal Deep Models for
              Mitochondria Segmentation Using Simulated and Real Confocal
              Microscopy Data&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="font-medium">B.Tech, Computer Science &amp; Engineering</p>
            <p className="text-sm text-stone-500">
              Punjabi University, Patiala · 2019–2023 · First with Distinction
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="font-medium">UGC NET — Assistant Professor &amp; Ph.D. admission</p>
            <p className="text-sm text-stone-500">Qualified June 2026 · 89.53 percentile</p>
            <p className="mt-2 text-sm text-stone-600">
              India&apos;s national qualifying exam for university faculty
              eligibility and government doctoral fellowships.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="font-medium">GATE 2026 — Computer Science &amp; IT</p>
            <p className="text-sm text-stone-500">Qualified</p>
            <p className="mt-2 text-sm text-stone-600">
              India&apos;s national graduate-level qualifying exam for
              engineering admissions and public-sector technical recruitment.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="font-medium">GATE 2024 — Data Science &amp; AI</p>
            <p className="text-sm text-stone-500">Qualified</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-accent-soft px-3 py-1 text-sm text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
