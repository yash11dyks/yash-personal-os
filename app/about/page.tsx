export default function About() {
    return (
        <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">About</h1>

            <p className="text-gray-700 mb-6">
                AI/ML engineer and full-stack developer with a research background in
                deep learning for biomedical image segmentation. M.Tech in Data Science
                & Engineering from NIT Jalandhar, currently open to freelance, research,
                and full-time opportunities across AI/ML, LLM engineering, and web
                development.
            </p>

            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <ul className="text-gray-700 mb-6 space-y-1">
                <li>M.Tech, Data Science & Engineering — NIT Jalandhar (2024–2026)</li>
                <li>B.Tech, Computer Science & Engineering — Punjabi University, Patiala (2019–2023), First with Distinction</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Qualifications</h2>
            <ul className="text-gray-700 mb-6 space-y-1">
                <li>
                    GATE 2026 — Qualified, CS/IT{" "}
                    <span className="text-gray-500 text-sm">
                        (GATE: India's national, highly competitive graduate-level qualifying exam for engineering admissions and public-sector technical recruitment)
                    </span>
                </li>
                <li>GATE 2024 — Qualified, Data Science & AI</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "HuggingFace Transformers", "Detectron2", "TensorFlow", "SQL", "Next.js", "React", "Supabase"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {skill}
                    </span>
                ))}
            </div>
        </main>
    );
}