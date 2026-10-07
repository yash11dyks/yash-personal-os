import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-4xl font-bold">Yash Kumar</h1>
      <p className="mt-2 text-lg text-gray-600 text-center max-w-xl">
        AI/ML Engineer & Full-Stack Developer — open to build, research, or ship
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {["M.Tech, NIT Jalandhar", "UGC NET Qualified", "GATE 2026 CS/IT"].map((item) => (
          <span key={item} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            {item}
          </span>
        ))}
      </div>

      <p className="mt-8 text-gray-700 text-center max-w-xl">
        I work on deep learning for biomedical image segmentation, and build
        full-stack web applications end to end. Currently open to freelance,
        research, and full-time roles across AI/ML and web development.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Link href="/about" className="underline hover:text-gray-500">About</Link>
        <Link href="/experience" className="underline hover:text-gray-500">Experience</Link>
        <Link href="/projects" className="underline hover:text-gray-500">Projects</Link>
        <Link href="/publications" className="underline hover:text-gray-500">Publications</Link>
        <Link href="/profiles" className="underline hover:text-gray-500">Contact</Link>
      </div>
    </main>
  );
}