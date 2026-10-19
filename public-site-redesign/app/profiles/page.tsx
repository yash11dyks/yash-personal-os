import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Contact" };

const links = [
  { label: "Email", value: "yashgood59@gmail.com", url: "mailto:yashgood59@gmail.com", external: false },
  { label: "GitHub", value: "github.com/yash11dyks", url: "https://github.com/yash11dyks", external: true },
  { label: "LinkedIn", value: "linkedin.com/in/yash-kumar-200311212", url: "https://linkedin.com/in/yash-kumar-200311212", external: true },
  { label: "Kaggle", value: "kaggle.com/yashgood", url: "https://www.kaggle.com/yashgood", external: true },
  { label: "Codolio", value: "codolio.com/profile/Sd0CVmbL", url: "https://codolio.com/profile/Sd0CVmbL", external: true },
];

export default function Profiles() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <PageHeader
        title="Contact & profiles"
        subtitle="Rajpura, Punjab, India · Open to freelance, research and full-time roles"
      />

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
      >
        Download resume (PDF)
      </a>

      <div className="mt-8 space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-stone-200 bg-white px-5 py-4 hover:border-accent"
          >
            <span className="font-medium">{link.label}</span>
            <span className="break-all text-sm text-stone-500">{link.value}</span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-sm text-stone-500">Phone available on request.</p>
    </main>
  );
}
