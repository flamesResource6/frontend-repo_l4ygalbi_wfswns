export default function Footer(){
  return (
    <footer id="contact" className="relative pt-16 pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(250,204,21,0.05),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-white text-lg font-semibold tracking-widest">AURELIA</div>
            <p className="mt-3 text-slate-300/90">Contemporary Swiss watchmaking. Made in small batches with obsessive attention to detail.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Explore</p>
            <ul className="mt-3 space-y-2 text-slate-300/90">
              <li><a href="#collections" className="hover:text-white">Collections</a></li>
              <li><a href="#story" className="hover:text-white">Our Story</a></li>
              <li><a href="#craft" className="hover:text-white">Craft</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Support</p>
            <ul className="mt-3 space-y-2 text-slate-300/90">
              <li>Warranty</li>
              <li>Care & Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Newsletter</p>
            <div className="mt-3 flex gap-2">
              <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" placeholder="Your email" />
              <button className="px-4 py-3 rounded-xl bg-amber-300/90 hover:bg-amber-300 text-slate-900 font-semibold">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm">
          <p>© 2025 Aurelia. All rights reserved.</p>
          <p>Crafted with care in La Chaux-de-Fonds.</p>
        </div>
      </div>
    </footer>
  )
}
