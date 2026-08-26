export default function Profiles() {
  const links = [
    { label: "GitHub", url: "https://github.com/yash11dyks" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yash-kumar-200311212" },
    { label: "Kaggle", url: "https://www.kaggle.com/yashgood" },
    { label: "Email", url: "mailto:yashgood59@gmail.com" },
  ];

  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact & profiles</h1>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500 underline">
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
}