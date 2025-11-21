import { Menu, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-white/60 opacity-30 group-hover:opacity-70 transition" />
              <div className="relative px-3 py-1.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold tracking-widest">
                AURELIA
              </div>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#collections" className="text-slate-200 hover:text-white transition">Collections</a>
            <a href="#story" className="text-slate-200 hover:text-white transition">Our Story</a>
            <a href="#craft" className="text-slate-200 hover:text-white transition">Craft</a>
            <a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 text-slate-200 hover:text-white/90 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition">
              <Search size={18} />
              <span className="hidden lg:inline">Search</span>
            </button>
            <button className="text-slate-200 hover:text-white transition">
              <ShoppingBag />
            </button>
            <button className="md:hidden text-slate-200 hover:text-white" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            <a href="#collections" className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200">Collections</a>
            <a href="#story" className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200">Our Story</a>
            <a href="#craft" className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200">Craft</a>
            <a href="#contact" className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
