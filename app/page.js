"use client";

import React, { useState } from 'react';
import { Leaf, ShoppingCart, Truck, ShieldCheck, Package, ArrowRight, X, Globe, Star, CheckCircle2 } from 'lucide-react';

export default function ShuddhaDharaSite() {
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    setToast(`${product} added to jar!`);
    setTimeout(() => setToast(""), 2000);
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
        <div className="bg-stone-900 w-full max-w-md rounded-[2rem] p-8 relative border border-stone-800 shadow-2xl">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-stone-800 rounded-full transition"><X className="w-5 h-5 text-stone-500" /></button>
          <h3 className="text-2xl font-black mb-6 text-white tracking-tighter uppercase italic">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-stone-300 selection:bg-green-600 pb-10">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bg-stone-900 text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 border border-stone-700 animate-in slide-in-from-bottom">
          <div className="bg-green-500 h-2 w-2 rounded-full animate-pulse" /> {toast}
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-6 py-3 bg-black/60 backdrop-blur-xl sticky top-0 z-50 border-b border-stone-900">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="bg-green-600 p-1.5 rounded-lg"><Leaf className="text-white w-4 h-4" /></div>
          <h1 className="text-lg font-black text-white tracking-tighter italic uppercase">SHUDDHA DHARA</h1>
        </div>
        <div className="hidden lg:flex gap-8 text-[9px] font-black text-stone-500 tracking-[0.2em] uppercase">
          <a href="#how" className="hover:text-green-500 transition">Process</a>
          <a href="#impact" className="hover:text-green-500 transition">Impact</a>
          <a href="#shop" className="hover:text-green-500 transition">Store</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setShowCart(true)} className="relative p-2 bg-stone-900 rounded-xl border border-stone-800 transition hover:bg-stone-800">
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-[9px] h-4 w-4 flex items-center justify-center rounded-full font-bold border border-black">{cartCount}</span>}
          </button>
          <button onClick={() => setShowSignup(true)} className="bg-white text-black px-5 py-2 rounded-xl text-[11px] font-bold hover:bg-green-500 hover:text-white transition uppercase tracking-wider">Join Now</button>
        </div>
      </nav>

      {/* --- HERO SECTION (Compact) --- */}
      <section className="px-6 py-12 md:py-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="animate-in fade-in slide-in-from-left">
          <div className="inline-flex items-center gap-2 bg-stone-900/80 px-3 py-1 rounded-full text-[9px] font-black mb-6 border border-stone-800 uppercase tracking-widest text-green-500">
            <Globe className="w-3 h-3" /> India's First Zero-Waste Subscription
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] mb-6 tracking-tighter">
            Pure Food. <br/> <span className="text-green-500 italic">Zero Trash.</span>
          </h2>
          <p className="text-lg text-stone-400 mb-8 max-w-sm leading-snug font-medium">Subscription-based groceries in reusable glass jars. We deliver, we swap, we sterilize.</p>
          <button onClick={() => setShowSignup(true)} className="bg-green-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-green-700 transition-all text-sm uppercase group border-b-4 border-green-800 active:border-b-0 active:translate-y-1">
            Start Your Loop <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition" />
          </button>
        </div>
        <div className="relative group lg:ml-auto w-full">
          <div className="bg-stone-900 p-3 rounded-[3rem] border border-stone-800 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition duration-500">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000" alt="Jars" className="rounded-[2.5rem] w-full" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
            <Star className="text-orange-500 fill-orange-500 w-5 h-5" />
            <p className="text-black text-[10px] font-black uppercase tracking-tighter">100% Organic</p>
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION (Tightened) --- */}
      <section id="impact" className="py-8 px-6">
        <div className="max-w-6xl mx-auto bg-stone-900 rounded-[3rem] p-10 border border-stone-800 grid md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-[80px]"></div>
          <div>
            <h2 className="text-4xl font-black text-white italic tracking-tighter mb-2">The Difference.</h2>
            <p className="text-stone-500 text-sm font-medium">Track our collective effort against plastic waste.</p>
          </div>
          <div className="flex justify-between md:border-l border-stone-800 md:pl-12">
            <div>
              <p className="text-5xl font-black text-green-500 leading-none">1.2k+</p>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-600 mt-2">Kg Plastic Saved</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white leading-none">8.4k</p>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-600 mt-2">Jars Swapped</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION (How it works - Compact) --- */}
      <section id="how" className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 tracking-tighter text-white uppercase italic">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShoppingCart, title: "Order", desc: "Select monthly ration in glass jars." },
            { icon: Truck, title: "Swap", desc: "We deliver & take empty jars back." },
            { icon: ShieldCheck, title: "Clean", desc: "Jars are sterilized at 180°C." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-stone-900/30 rounded-[2.5rem] border border-stone-800 hover:border-green-600 transition group">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-600 transition">
                <item.icon className="w-6 h-6 text-green-500 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
              <p className="text-xs text-stone-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORE SECTION (Full Content) --- */}
      <section id="shop" className="py-16 px-6 max-w-6xl mx-auto bg-stone-900/20 rounded-[4rem] border border-stone-900/50">
        <div className="flex justify-between items-end mb-10 px-4">
          <h2 className="text-4xl font-black tracking-tighter text-white">The Staples.</h2>
          <div className="flex gap-2">
             <div className="h-2 w-8 bg-green-600 rounded-full"></div>
             <div className="h-2 w-2 bg-stone-800 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            { name: "Arhar Dal", price: "₹160", weight: "1kg" },
            { name: "Basmati Rice", price: "₹125", weight: "1kg" },
            { name: "Turmeric", price: "₹85", weight: "250g" },
            { name: "Kabuli Chana", price: "₹140", weight: "1kg" }
          ].map((prod) => (
            <div key={prod.name} className="bg-stone-900 p-5 rounded-[2rem] border border-stone-800 hover:border-green-600/50 transition-all group">
              <div className="aspect-square bg-stone-950 rounded-2xl mb-4 flex items-center justify-center border border-stone-800 group-hover:bg-green-950/20 transition-colors">
                <Package className="w-10 h-10 text-stone-800 group-hover:text-green-600 transition-colors" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-white">{prod.name}</h4>
              <p className="text-[10px] font-bold text-stone-600 uppercase mb-4 tracking-widest">{prod.weight} Jar</p>
              <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-stone-800/50">
                <span className="text-xl font-black text-green-500">{prod.price}</span>
                <button onClick={() => addToCart(prod.name)} className="bg-white p-2 rounded-lg text-black hover:bg-green-500 hover:text-white transition active:scale-90 shadow-lg shadow-white/5"><ShoppingCart className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-16 text-center text-stone-700 font-black text-[9px] uppercase tracking-[0.5em] pb-8">
        © 2026 Shuddha Dhara • Better for Earth • Better for You
      </footer>

      {/* --- MODALS --- */}
      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)} title="Join Shuddha Loop">
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-black rounded-xl border border-stone-800 outline-none focus:border-green-600 text-sm" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-black rounded-xl border border-stone-800 outline-none focus:border-green-600 text-sm" />
          <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-green-900/20">Get Started</button>
          <p className="text-[10px] text-center text-stone-500 font-bold uppercase tracking-widest mt-4">Already a member? <span className="text-white cursor-pointer" onClick={() => {setShowSignup(false); setShowLogin(true)}}>Login</span></p>
        </div>
      </Modal>

      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Welcome Back">
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-4 bg-black rounded-xl border border-stone-800 outline-none focus:border-green-600 text-sm" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-black rounded-xl border border-stone-800 outline-none focus:border-green-600 text-sm" />
          <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-sm shadow-xl shadow-stone-800/10">Login</button>
        </div>
      </Modal>

      <Modal isOpen={showCart} onClose={() => setShowCart(false)} title="My Shopping Jar">
        <div className="py-10 text-center">
          {cartCount === 0 ? (
            <>
              <Package className="w-12 h-12 text-stone-800 mx-auto mb-4" />
              <p className="text-stone-600 text-xs italic font-medium tracking-tight">Your jar is currently empty...</p>
            </>
          ) : (
            <div className="space-y-6 text-left">
              <div className="flex justify-between items-center p-4 bg-black rounded-xl border border-stone-800">
                <span className="text-xs font-bold uppercase text-stone-400">Items in Jar</span>
                <span className="text-2xl font-black text-green-500">{cartCount}</span>
              </div>
              <button className="w-full bg-white text-black py-4 rounded-xl font-black text-sm uppercase">Checkout & Swap</button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
