import { Star, ShieldCheck, Gem } from 'lucide-react'

const items = [
  {
    name: 'Aurelia Phantom',
    price: '$18,500',
    desc: 'Matte ceramic case, stealth black dial, integrated rubber strap.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Aurelia Solstice',
    price: '$22,400',
    desc: '18k rose gold, sunburst champagne dial, alligator leather.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Aurelia Glacier',
    price: '$19,900',
    desc: 'Brushed titanium, icy blue dial, micro-adjust bracelet.',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl text-white font-semibold">Signature Collection</h2>
            <p className="text-slate-300/90 mt-2">Hand-finished and assembled by master watchmakers.</p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-200/90">
            <div className="flex items-center gap-2"><Star className="text-amber-300" size={18}/><span>Superlative Finishing</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-300" size={18}/><span>5-Year Warranty</span></div>
            <div className="flex items-center gap-2"><Gem className="text-sky-300" size={18}/><span>Premium Materials</span></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={it.image} alt={it.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{it.name}</h3>
                  <span className="text-amber-300 font-semibold">{it.price}</span>
                </div>
                <p className="mt-2 text-slate-300/90">{it.desc}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-xl bg-amber-300/90 hover:bg-amber-300 text-slate-900 font-semibold">View</button>
                  <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10">Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
