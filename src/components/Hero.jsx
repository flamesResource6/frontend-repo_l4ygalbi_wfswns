import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute -bottom-40 -left-40 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.15),transparent_60%)]" />
      </div>

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm bg-slate-900/30 rounded-3xl p-6 sm:p-8 border border-white/10">
          <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-300/90">
            Swiss Precision
            <span className="inline-block h-1 w-1 rounded-full bg-amber-300" />
            Limited 2025 Release
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Time, Perfected.
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            Discover Aurelia — an exclusive collection of luxury timepieces blending haute horlogerie with modern minimalism. Crafted in small batches, engineered to last generations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#collections" className="px-5 py-3 rounded-xl bg-amber-300/90 hover:bg-amber-300 text-slate-900 font-semibold border border-amber-200/70 transition">
              Explore Collection
            </a>
            <a href="#craft" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition">
              The Craft
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/90">
            <div>
              <p className="font-semibold text-white">COSC Certified</p>
              <p className="text-slate-300/80">Chronometer accuracy</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="font-semibold text-white">Sapphire Crystal</p>
              <p className="text-slate-300/80">Scratch resistant</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="font-semibold text-white">5-Year Warranty</p>
              <p className="text-slate-300/80">Premium care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
