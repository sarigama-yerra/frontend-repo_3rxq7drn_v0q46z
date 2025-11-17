import { Cpu, Layers, Globe2, Share2 } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: 'Interactive Globe',
    desc: 'Spin, pan, and explore a responsive red-earth model right in the browser.',
  },
  {
    icon: Cpu,
    title: 'Fast & Lightweight',
    desc: 'Powered by WebGL and modern rendering for smooth performance on most devices.',
  },
  {
    icon: Layers,
    title: 'Scene Layers',
    desc: 'Combine 3D with text, images, and overlays to tell richer stories.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    desc: 'Share live links of your interactive scenes with a single click.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for modern 3D on the web</h2>
          <p className="mt-3 text-gray-600">A focused set of tools that make interactive, educational, and corporate visualizations effortless.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
