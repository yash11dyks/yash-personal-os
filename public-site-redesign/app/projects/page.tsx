import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  {
    title: "Mitochondria Segmentation Research",
    meta: "M.Tech Thesis · NIT Jalandhar · 2024–2026",
    tags: ["PyTorch", "Detectron2", "HuggingFace", "HPC / H100 MIG"],
    points: [
      "Benchmarked instance vs. amodal deep learning models (Mask2Former, AISFormer, DETR, Nellie) for mitochondria segmentation on simulated and real confocal microscopy data.",
      "Best model (Mask2Former) reached test mIoU of 0.786; built full training pipelines and a PBS-managed HPC setup on H100 MIG GPUs.",
      "Resulted in three papers — accepted at IC3AI, and two submitted to Elsevier journals (Biomedical Signal Processing and Control, Computer Science Review).",
    ],
  },
  {
    title: "PRIDE-INDIA Multicenter Clinical Dashboard",
    meta: "Technical Assignment · ICMR-funded research consortium",
    tags: ["React", "Vite", "Node/Express", "Prisma", "PostgreSQL"],
    points: [
      "Designed and prototyped a dashboard for collecting clinical and imaging data across a 5-site multicenter research consortium.",
      "Architected a privacy-by-design data model enforcing ICMR guidelines: pseudonymized UUID-based identifiers, zero PII storage, TLS-enforced database connections, and full audit logging.",
      "Scoped integration path for REDCap sync, role-based access control, and imaging-data storage as next steps.",
    ],
  },
  {
    title: "Personal Portfolio & Application Tracker",
    meta: "yash-personal-os · Next.js, Supabase, Vercel",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    points: [
      "Built and deployed this site end-to-end: Next.js 16 frontend, Supabase for authentication (email/password, Google, GitHub OAuth) and database, hosted on Vercel with CI/CD from GitHub.",
      "Includes a private, authenticated dashboard with a job/PhD/project application tracker — deadline alerts, status tracking, and Row-Level-Security-protected data per user.",
    ],
  },
];

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <PageHeader title="Projects" />

      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-stone-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-stone-500">{p.meta}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700 leading-relaxed">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
