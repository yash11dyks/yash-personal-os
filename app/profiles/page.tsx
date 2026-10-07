export default function Profiles() {
  const links = [
    { label: "Website", url: "https://yash-personal-os.vercel.app" },
    { label: "GitHub", url: "https://github.com/yash11dyks" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yash-kumar-200311212" },
    { label: "Kaggle", url: "https://www.kaggle.com/yashgood" },
    { label: "Codolio", url: "https://codolio.com/profile/Sd0CVmbL" },
    { label: "Email", url: "mailto:yashgood59@gmail.com" },
    { label: "Download Resume (PDF)", url: "/resume.pdf" },
  ];

  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Contact & profiles</h1>
      <p className="text-gray-500 mb-8">Rajpura, Punjab, India</p>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500 underline">
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-gray-400 text-sm mt-8">Phone available on request.</p>
    </main>
  );
}