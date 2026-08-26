export default function Experience() {
    return (
        <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Experience</h1>

            <div className="mb-10">
                <h2 className="text-xl font-semibold">Graduate Researcher</h2>
                <p className="text-gray-500 text-sm mb-2">NIT Jalandhar · 2024–2026</p>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                        Benchmarked four architectures (Mask2Former, AISFormer, DETR, Nellie)
                        for mitochondria segmentation on simulated confocal microscopy data.
                        Best model (Mask2Former) reached test mIoU of 0.786.
                    </li>
                    <li>
                        Built full training and evaluation pipelines from scratch using
                        HuggingFace Transformers and Detectron2, and engineered a
                        PBS-managed HPC training setup on H100 MIG GPUs.
                    </li>
                    <li>
                        Ran a systematic literature review of 100+ amodal computer vision
                        papers, producing a hierarchical taxonomy of the field.
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Data Science Engineer Intern</h2>
                <p className="text-gray-500 text-sm mb-2">HopingMinds, Mohali · 2023</p>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                        Six-month internship in applied data science, contributing to
                        model development and data pipeline workflows.
                    </li>
                </ul>
            </div>
        </main>
    );
}