export default function Projects() {
    return (
        <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>

            <div className="space-y-12">
                <div>
                    <h2 className="text-xl font-semibold mb-1">Mitochondria Segmentation Research</h2>
                    <p className="text-gray-500 text-sm mb-3">M.Tech Thesis · NIT Jalandhar · 2024–2026</p>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                        <li>
                            Benchmarked instance vs. amodal deep learning models (Mask2Former,
                            AISFormer, DETR, Nellie) for mitochondria segmentation on simulated
                            and real confocal microscopy data.
                        </li>
                        <li>
                            Best model (Mask2Former) reached test mIoU of 0.786; built full
                            training pipelines and a PBS-managed HPC setup on H100 MIG GPUs.
                        </li>
                        <li>
                            Resulted in three papers — accepted at IC3AI, and two submitted to
                            Elsevier journals (Biomedical Signal Processing and Control, Computer
                            Science Review).
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-1">PRIDE-INDIA Multicenter Clinical Dashboard</h2>
                    <p className="text-gray-500 text-sm mb-3">Technical Assignment · ICMR-funded research consortium</p>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                        <li>
                            Designed and prototyped a dashboard for collecting clinical and
                            imaging data across a 5-site multicenter research consortium, built
                            with React/Vite, Node/Express, Prisma, and PostgreSQL.
                        </li>
                        <li>
                            Architected a privacy-by-design data model enforcing ICMR guidelines:
                            pseudonymized UUID-based identifiers, zero PII storage, TLS-enforced
                            database connections, and full audit logging.
                        </li>
                        <li>
                            Scoped integration path for REDCap sync, role-based access control,
                            and imaging-data storage as next steps.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-1">Personal Portfolio & Application Tracker</h2>
                    <p className="text-gray-500 text-sm mb-3">yash-personal-os · Next.js, Supabase, Vercel</p>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                        <li>
                            Built and deployed this site end-to-end: Next.js 16 (Node.js) frontend,
                            Supabase for authentication (email/password, Google, GitHub OAuth)
                            and database, hosted on Vercel with CI/CD from GitHub.
                        </li>
                        <li>
                            Includes a private, authenticated dashboard with a job/PhD/project
                            application tracker — deadline alerts, status tracking, and
                            Row-Level-Security-protected data per user.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}