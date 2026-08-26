export default function Projects() {
    const projects = [
        {
            title: "Instance vs. Amodal Deep Models for Mitochondria Segmentation",
            description:
                "Benchmarked four architectures (Mask2Former, AISFormer, DETR, Nellie) on simulated and real confocal microscopy data with paired visible/amodal ground truth. Best model (Mask2Former) reached test mIoU of 0.786; AISFormer led boundary accuracy (HD95 5.23px).",
            tags: ["PyTorch", "HuggingFace Transformers", "Detectron2", "HPC/PBS"],
        },
    ];

    return (
        <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>

            {projects.map((project) => (
                <div key={project.title} className="mb-10 pb-10 border-b border-gray-200 last:border-0">
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}