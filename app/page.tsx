import Link from "next/link";

const credentials = ["M.Tech, NIT Jalandhar", "UGC NET Qualified", "GATE 2026 CS/IT"];

const highlights = [
  { value: "0.786", label: "Test mIoU", note: "Mask2Former on mitochondria segmentation" },
  { value: "100+", label: "Papers reviewed", note: "Systematic review of amodal computer vision" },
  { value: "3", label: "Papers", note: "From thesis and review work (IC3AI, Elsevier)" },
];

const focus = [
  {
    title: "Research",
    text: "Deep learning for biomedical image segmentation: benchmarking instance and amodal models on confocal microscopy data, with full training pipelines on HPC GPUs.",
    href: "/projects",
    cta: "See research project",
  },
  {
    title: "Engineering",
    text: "Full-stack web applications built end to end with Next.js, Node.js and PostgreSQL, including privacy-minded data models for clinical research.",
    href: "/projects",
    cta: "See projects",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-6 py-14 sm:py-24">
      <section>
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Open to freelance, research and full-time roles
        </p>

        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight">
          Yash Kumar
        </h1>
        <p className="mt-3 text-xl sm:text-2xl text-stone-600">
          AI/ML Engineer &amp; Full-Stack Developer
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
          I work on deep learning for biomedical image segmentation, and build
          full-stack web applications end to end.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
          >
            View projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-stone-300 bg-white px-5 py-2.5 font-medium text-stone-800 hover:border-stone-400"
          >
            Download resume
          </a>
          <Link
            href="/profiles"
            className="rounded-lg px-5 py-2.5 font-medium text-accent hover:underline underline-offset-4"
          >
            Get in touch →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {credentials.map((item) => (
            <span
              key={item}
              className="rounded-full bg-stone-200/70 px-3 py-1 text-sm text-stone-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3" aria-label="Highlights">
        {highlights.map((h) => (
          <div key={h.label} className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-3xl font-bold text-accent">{h.value}</p>
            <p className="mt-1 font-medium">{h.label}</p>
            <p className="mt-1 text-sm text-stone-500">{h.note}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="What I work on">
        {focus.map((f) => (
          <div key={f.title} className="rounded-xl border border-stone-200 bg-white p-6">
            <h2 className="text-lg font-semibold">{f.title}</h2>
            <p className="mt-2 text-stone-700 leading-relaxed">{f.text}</p>
            <Link
              href={f.href}
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              {f.cta} →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
