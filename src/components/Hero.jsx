import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center" id="overview">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 py-28">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 px-3 py-1 text-xs text-red-600 shadow-sm">
            <Sparkles size={14} /> Interactive 3D Experience
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Render, Explore, and Share 3D Objects on the Web
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            A modern platform for education, environmental insights, and corporate storytelling. Click and drag the red globe to explore a futuristic, interactive earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-500 to-rose-600 px-6 py-3 text-white font-semibold shadow hover:opacity-95 transition-opacity">
              See Features
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-800 bg-white hover:bg-gray-50">
              View Gallery
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
