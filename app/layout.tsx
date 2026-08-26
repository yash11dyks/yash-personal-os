import type { Metadata } from "next";
import Link from "next/link";
import AuthStatus from "@/components/AuthStatus";
import "./globals.css";
export const metadata: Metadata = {
  title: "Yash Kumar",
  description: "AI/ML Engineer & Full-Stack Developer",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-center items-center gap-8 py-6 border-b border-gray-200">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
          <Link href="/experience" className="hover:text-gray-500">Experience</Link>
          <Link href="/projects" className="hover:text-gray-500">Projects</Link>
          <Link href="/publications" className="hover:text-gray-500">Publications</Link>
          <Link href="/profiles" className="hover:text-gray-500">Contact</Link>
          <AuthStatus />
        </nav>
        {children}
      </body>
    </html>
  );
}
