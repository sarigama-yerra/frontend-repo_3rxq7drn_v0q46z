export default function Gallery() {
  const items = [
    { title: 'Orbit Lines', desc: 'Dynamic paths highlighting data flows.' },
    { title: 'City Lights', desc: 'Night-time visualization for population density.' },
    { title: 'Heat Zones', desc: 'Gradient overlays for climate education.' },
    { title: 'Network Nodes', desc: 'Global connectivity and routes.' },
  ]

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Showcase ideas with layers</h2>
          <p className="mt-3 text-gray-600">Blend interactive 3D with annotations and UI to craft compelling narratives.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card) => (
            <div key={card.title} className="rounded-xl border border-gray-200 p-6 bg-white/80 shadow-sm hover:shadow transition-shadow">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-rose-100 to-red-100 border border-rose-200" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
