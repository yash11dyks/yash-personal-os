export default function Publications() {
    const papers = [
        {
            title: "Application of Instance vs. Amodal Deep Models for Mitochondria Segmentation Using Simulated and Real Confocal Microscopy Data",
            status: "In preparation — Biomedical Signal Processing and Control (Elsevier)",
        },
        {
            title: "Amodal Computer Vision: A Systematic Review of the Techniques and Applications Over a Decade",
            status: "Submitted — Computer Science Review (Elsevier)",
        },
        {
            title: "From Visual Plausibility to Physical Grounding: A Review of Modern Amodal Perception",
            status: "Submitted — IC3AI (IEEE)",
        },
    ];

    return (
        <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Publications</h1>

            <div className="flex flex-col gap-6">
                {papers.map((paper) => (
                    <div key={paper.title}>
                        <p className="text-gray-900 font-medium">{paper.title}</p>
                        <p className="text-gray-500 text-sm mt-1">{paper.status}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}