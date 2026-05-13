export function Skills() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif italic text-mist mb-12">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma'].map(skill => (
          <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-mist-dim">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
