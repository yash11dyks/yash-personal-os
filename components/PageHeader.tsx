export default function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <header className="mb-10">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-2 text-stone-600">{subtitle}</p>}
    </header>
  )
}
