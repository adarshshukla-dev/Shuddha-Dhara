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
    setTimeout(() => setToast(""), 2500);
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
        <div className="bg-[#111] w-full max-w-lg rounded-[2.5rem] p-12 relative border border-stone-800 shadow-2xl">
          <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-stone-800 rounded-full transition"><X className="w-5 h-5 text-stone-500" /></button>
          <h3 className="text-3xl font-black mb-8 text-white tracking-tighter italic uppercase">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#080808] text-stone-300 selection:bg-green-600 pb-20">
      
      {/* --- PREMIUM TOAST --- */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-white text-black px-8 py-4 rounded-full font-black shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom border border-stone-200">
          <CheckCircle2 className="w-5 h-5 text-green-600" /> {toast}
        </div>
      )}

      {/* --- NAVIGATION (Pro Height) --- */}
      <nav className="flex justify-between items-center px-10 py-6 bg-black/40 backdrop-blur-2xl sticky top-0 z-50 border-b border-stone-900/50">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="bg-green-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-green-900/20"><Leaf className="text-white w-5 h-5" /></div>
          <h1 className="text-xl font-black text-white tracking-tighter italic uppercase group-hover:text-green-500 transition-colors">SHUDDHA DHARA</h1>
        </div>
        <div className="hidden lg:flex gap-12 text-[11px] font-black text-stone-500 tracking-[0.25em] uppercase">
          <a href="#how" className="hover:text-green-500 transition">How it Works</a>
          <a href="#impact" className="hover:text-green-500 transition">Our Impact</a>
          <a href="#shop" className="hover:text-green-500 transition">The Store</a>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => setShowCart(true)} className="relative p-3 bg-stone-900/50 rounded-2xl border border-stone-800 transition hover:bg-stone-800">
            <ShoppingCart className="w-5 h-5 text-stone-300" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-[10px] h-5 w-5 flex items-center justify-center rounded-full font-black border-2 border-black animate-bounce">{cartCount}</span>}
          </button>
          <button onClick={() => setShowSignup(true)} className="bg-white text-black px-7 py-3 rounded-2xl text-xs font-bold hover:scale-105 transition shadow-lg active:scale-95">GET STARTED</button>
        </div>
      </nav>

      {/* --- HERO SECTION (Optimized Space) --- */}
      <section className="px-8 py-20 md:py-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-green-950/30 px-4 py-2 rounded-full text-[10px] font-black mb-8 border border-green-900/50 uppercase tracking-widest text-green-500 shadow-inner">
            <Globe className="w-4 h-4" /> Zero-Waste Subscription Model
          </div>
          <h2 className="text-7xl md:text-[90px] font-black text-white leading-[0.82] mb-10 tracking-tighter">
            Ration wahi, <br/> <span className="text-green-500 italic underline decoration-green-900 decoration-4">Kachra nahi.</span>
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-md leading-relaxed font-medium">Monthly staples delivered in reusable glass jars. We manage the cleaning and swapping, you enjoy the purity.</p>
          <div className="flex gap-4">
            <button onClick={() => setShowSignup(true)} className="bg-green-600 text-white px-10 py-5 rounded-3xl font-black flex items-center gap-4 hover:bg-green-500 transition-all text-sm uppercase tracking-widest shadow-xl shadow-green-900/20">
              Start Swapping <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative animate-in zoom-in duration-1000">
          <div className="bg-stone-900 p-5 rounded-[4rem] border border-stone-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition duration-700">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200" alt="Jars" className="rounded-[3rem] w-full shadow-2xl" />
          </div>
          <div className="absolute top-10 -right-6 bg-green-600 p-6 rounded-3xl shadow-2xl rotate-12 animate-pulse hidden md:block">
            <Leaf className="text-white w-8 h-8" />
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION (Big & Bold) --- */}
      <section id="impact" className="py-12 px-8">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[4rem] p-16 border border-stone-800 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-600/10 rounded-full blur-[100px]"></div>
          <div>
            <h2 className="text-5xl font-black text-white italic tracking-tighter mb-4 leading-none">The Impact Bar.</h2>
            <p className="text-stone-500 text-lg font-medium max-w-sm">Watching every gram of plastic we remove from our oceans together.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-l border-stone-800 pl-12">
            <div>
              <p className="text-6xl font-black text-green-500 leading-none mb-2">1.2k+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Kg Plastic Diverted</p>
            </div>
            <div>
              <p className="text-6xl font-black text-white leading-none mb-2">8.4k</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Jars Swapped</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION (Visual Steps) --- */}
      <section id="how" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-6 tracking-tighter italic uppercase">Simple 3-Step Loop</h2>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: ShoppingCart, title: "1. Select Staples", desc: "Choose your grains and spices in glass jars." },
            { icon: Truck, title: "2. Monthly Swap", desc: "We bring fresh jars & take back your empties." },
            { icon: ShieldCheck, title: "3. Lab Cleaned", desc: "Empty jars are sanitized and refilled for reuse." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-stone-900/40 rounded-[3.5rem] border border-stone-800 hover:border-green-600/50 transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-stone-900 rounded-[2rem] flex items-center justify-center mb-8 mx-auto group-hover:bg-green-600 transition shadow-xl border border-stone-800">
                <item.icon className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
              <p className="text-stone-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORE SECTION --- */}
      <section id="shop" className="py-24 px-8 max-w-7xl mx-auto bg-[#0A0A0A] rounded-[5rem] border border-stone-900/50 shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="text-5xl font-black tracking-tighter text-white uppercase italic">Fresh Inventory.</h2>
          <div className="px-6 py-2 bg-stone-900 rounded-full text-[10px] font-black text-stone-400 border border-stone-800 tracking-widest uppercase">Next Delivery: Sunday</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Arhar Dal (Pure)", price: "₹160", weight: "1kg" },
            { name: "Basmati Rice", price: "₹125", weight: "1kg" },
            { name: "Lakadong Turmeric", price: "₹85", weight: "250g" },
            { name: "Kabuli Chana", price: "₹140", weight: "1kg" }
          ].map((prod) => (
            <div key={prod.name} className="bg-stone-900 p-8 rounded-[3.5rem] border border-stone-800 hover:border-green-600 transition-all group">
              <div className="aspect-square bg-stone-950 rounded-[2.5rem] mb-8 flex items-center justify-center border border-stone-800 group-hover:bg-green-950/20">
                <Package className="w-14 h-14 text-stone-800 group-hover:text-green-600 transition-all group-hover:scale-110" />
              </div>
              <h4 className="font-black text-xl mb-1 text-white tracking-tight">{prod.name}</h4>
              <p className="text-xs font-bold text-stone-600 uppercase mb-8 tracking-widest">{prod.weight} Jar</p>
              <div className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-stone-800">
                <span className="text-2xl font-black text-green-500">{prod.price}</span>
                <button onClick={() => addToCart(prod.name)} className="bg-white p-3 rounded-xl text-black hover:bg-green-500 hover:text-white transition active:scale-90 shadow-lg"><ShoppingCart className="w-5 h-5" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 text-center text-stone-600 font-black text-[11px] uppercase tracking-[0.6em] pb-10 border-t border-stone-900 pt-20 max-w-5xl mx-auto">
        © 2026 Shuddha Dhara • Eco-Friendly Subscription • India
      </footer>

      {/* --- MODALS --- */}
      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)} title="Join the Revolution">
        <div className="space-y-6">
          <input type="text" placeholder="Full Name" className="w-full p-5 bg-black rounded-2xl border border-stone-800 outline-none focus:border-green-600 text-white" />
          <input type="email" placeholder="Email Address" className="w-full p-5 bg-black rounded-2xl border border-stone-800 outline-none focus:border-green-600 text-white" />
          <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-500 transition shadow-2xl shadow-green-900/20">CREATE ACCOUNT</button>
          <p className="text-xs text-center text-stone-500 font-bold uppercase tracking-widest">Already a member? <span className="text-white cursor-pointer underline" onClick={() => {setShowSignup(false); setShowLogin(true)}}>Login</span></p>
        </div>
      </Modal>

      <Modal isOpen={showCart} onClose={() => setShowCart(false)} title="Your Jar">
        {cartCount === 0 ? (
          <div className="py-20 text-center opacity-30 italic font-medium">Your jar is empty...</div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between p-8 bg-black rounded-3xl border border-stone-800">
              <span className="font-bold text-stone-500 uppercase text-xs tracking-widest self-center">Selected Jars</span>
              <span className="text-4xl font-black text-green-500">{cartCount}</span>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:scale-105 transition">PROCEED TO CHECKOUT</button>
          </div>
        )}
      </Modal>
    </div>
  );
}
