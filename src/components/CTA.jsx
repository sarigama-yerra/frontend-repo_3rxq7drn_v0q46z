export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Bring your 3D story to life</h2>
        <p className="mt-3 text-gray-600">We help teams craft interactive experiences for education, environment, and corporate storytelling.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Your name" className="col-span-1 sm:col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <input type="email" placeholder="Email" className="col-span-1 sm:col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <button className="col-span-1 sm:col-span-1 rounded-md bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 py-3 shadow hover:opacity-95 transition-opacity">
            Request Demo
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">By clicking Request Demo, you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  )
}
