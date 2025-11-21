export default function Craft() {
  const features = [
    { title: 'Hand-finished Movements', desc: 'Perlage, Côtes de Genève, black polishing and anglage made by master artisans.' },
    { title: 'Exotic Materials', desc: 'Grade 5 titanium, 18k gold, ceramics and sapphire crystal for unmatched longevity.' },
    { title: 'Chronometer Certified', desc: 'Every movement is tested and certified for precision and reliability.' },
  ]

  return (
    <section id="craft" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold">The Craft</h2>
          <p className="mt-3 text-slate-300/90">From sketch to assembly, every step is done in-house. Our approach blends traditional horology with new-age materials.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <video className="w-full h-[380px] object-cover" autoPlay muted loop playsInline src="https://videos.pexels.com/video-files/853940/853940-hd_1920_1080_25fps.mp4" />
        </div>
      </div>
    </section>
  )
}
