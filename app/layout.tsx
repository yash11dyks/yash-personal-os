import type { Metadata } from "next";
import Link from "next/link";
import AuthStatus from "@/components/AuthStatus";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yash Kumar — AI/ML Engineer & Full-Stack Developer",
    template: "%s · Yash Kumar",
  },
  description:
    "AI/ML engineer and full-stack developer. M.Tech (NIT Jalandhar), deep learning for biomedical image segmentation. Open to freelance, research and full-time roles.",
  openGraph: {
    title: "Yash Kumar — AI/ML Engineer & Full-Stack Developer",
    description:
      "Deep learning for biomedical image segmentation, and full-stack web applications built end to end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
          <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 text-sm sm:px-6">
            <Link href="/" className="text-base font-bold tracking-tight">
              Yash Kumar
            </Link>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <NavLinks />
              <AuthStatus />
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-stone-200">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-5 py-6 text-sm text-stone-500 sm:px-6">
            <p>© {new Date().getFullYear()} Yash Kumar</p>
            <p>
              <a
                href="mailto:yashgood59@gmail.com"
                className="hover:text-stone-900 underline underline-offset-4"
              >
                yashgood59@gmail.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
