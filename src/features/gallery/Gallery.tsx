export function Gallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif italic text-mist mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-square bg-white/5 rounded-xl border border-white/10" />
        <div className="aspect-square bg-white/5 rounded-xl border border-white/10" />
        <div className="aspect-square bg-white/5 rounded-xl border border-white/10" />
      </div>
    </section>
  );
}
