"use client";

import React, { useState, useEffect } from 'react';
import { Leaf, Recycle, ShoppingCart, Truck, ShieldCheck, ChevronRight, Package, ArrowRight, Star, CheckCircle2, X, BarChart3, Globe } from 'lucide-react';

export default function ShuddhaDharaSite() {
  // --- States for Interactions ---
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    setToast(`${product} added to jar!`);
    setTimeout(() => setToast(""), 3000);
  };

  // --- Modal Component ---
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-950/70 backdrop-blur-xl animate-in fade-in duration-300">
        <div className="bg-stone-900 w-full max-w-md rounded-[3rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative border border-stone-800">
          <button onClick={onClose} className="absolute top-8 right-8 p-2.5 hover:bg-stone-800 rounded-full transition">
            <X className="w-5 h-5 text-stone-600" />
          </button>
          <h3 className="text-3xl font-black mb-10 tracking-tighter text-white">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-stone-200 selection:bg-green-600 selection:text-white pb-10">
      
      {/* --- TOAST NOTIFICATION --- */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-stone-900/70 backdrop-blur-lg text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-500 border border-stone-800">
          <div className="bg-green-500 h-2 w-2 rounded-full animate-pulse" /> {toast}
        </div>
      )}

      {/* --- NAVIGATION BAR --- */}
      <nav className="flex justify-between items-center px-8 py-6 bg-[#050505]/80 backdrop-blur-2xl sticky top-0 z-50 border-b border-stone-900">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="bg-green-600 p-2.5 rounded-xl shadow-lg shadow-green-950/20 group-hover:scale-110 transition-transform">
            <Leaf className="text-white w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tighter italic">SHUDDHA DHARA</h1>
        </div>
        
        <div className="hidden lg:flex gap-14 text-[10px] font-black text-stone-500 tracking-[0.3em] uppercase">
          <a href="#how" className="hover:text-green-500 transition-colors">The Loop</a>
          <a href="#impact" className="hover:text-green-500 transition-colors">Our Impact</a>
          <a href="#shop" className="hover:text-green-500 transition-colors">Order Staples</a>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={() => setShowCart(true)} className="relative p-3 bg-stone-900 hover:bg-stone-800 rounded-2xl transition border border-stone-800">
            <ShoppingCart className="w-5 h-5 text-stone-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#050505] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setShowSignup(true)} className="bg-white text-stone-950 px-8 py-4 rounded-2xl text-[13px] font-bold hover:opacity-80 transition shadow-xl shadow-stone-950/10">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="px-6 py-28 md:py-48 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 bg-stone-900/50 backdrop-blur text-stone-400 px-5 py-2.5 rounded-full text-[10px] font-black mb-12 border border-stone-800 uppercase tracking-[0.2em]">
            <Globe className="w-3 h-3 text-green-500" /> India's First Zero-Waste Subscription
          </div>
          <h2 className="text-7xl md:text-[110px] font-black text-white leading-[0.8] mb-12 tracking-tighter">
            Pure Grains. <br/> <span className="text-green-500 italic">Zero Trash.</span>
          </h2>
          <p className="text-xl text-stone-400 mb-16 max-w-md leading-relaxed font-medium">
            Sustainable groceries delivered in reusable glass jars. We deliver, we swap, we sterilize. A true circular loop.
          </p>
          <button onClick={() => setShowSignup(true)} className="bg-green-600 text-white px-12 py-6 rounded-[2.5rem] font-black flex items-center justify-center gap-4 hover:bg-green-700 hover:shadow-2xl hover:shadow-green-950 transition-all group text-lg border-2 border-green-500">
            Start Your Eco-Journey <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
          </button>
        </div>
        <div className="relative group">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-700/10 rounded-full blur-[150px] opacity-60 animate-pulse"></div>
          <div className="bg-stone-900 p-6 rounded-[4rem] shadow-2xl border-2 border-stone-800 transform rotate-3 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200" 
              alt="Reusable Jars" 
              className="rounded-[3.5rem] w-full"
            />
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[5rem] p-16 md:p-28 text-white relative overflow-hidden border border-stone-800">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-black mb-6 tracking-tighter leading-none italic">Making Real Impact.</h2>
              <p className="text-stone-400 text-xl leading-relaxed max-w-sm font-medium">
                Every jar you swap divert plastic from Indian landfills. Trace your contribution live. 
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 border-l-2 border-stone-800 pl-12">
              <div>
                <p className="text-7xl font-black text-green-500 mb-3 leading-none">1.2k+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Kgs Plastic Diverted</p>
              </div>
              <div>
                <p className="text-7xl font-black text-white mb-3 leading-none">8.4k</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Jars Sterilized & Swapped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Upgraded) --- */}
      <section id="how" className="py-36 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-white">The Shuddha Loop.</h2>
          <p className="text-stone-500 text-xl font-medium max-w-lg mx-auto">A seamless loop designed for convenience and the planet's health.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: ShoppingCart, title: "1. Select Jars", desc: "Select monthly grains, pulses, and spices in reusable glass jars." },
            { icon: Truck, title: "2. Doorstep Swap", desc: "Our rider brings fresh jars and picks up your empty, washed ones." },
            { icon: ShieldCheck, title: "3. Hygiene Sterilization", desc: "Returned jars undergo certified 180°C sterilization before reuse." }
          ].map((item, idx) => (
            <div key={idx} className="group p-12 rounded-[3rem] bg-stone-950 border border-stone-900 hover:border-green-600 hover:bg-stone-900 transition-all duration-500 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-green-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-24 h-24 bg-stone-900 rounded-[2rem] flex items-center justify-center mb-10 mx-auto group-hover:bg-green-600 group-hover:scale-110 transition-all duration-500 border border-stone-800">
                <item.icon className="w-10 h-10 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black mb-5 tracking-tight text-white">{item.title}</h3>
              <p className="text-stone-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORE SECTION --- */}
      <section id="shop" className="py-36 px-6 bg-stone-900 rounded-[6rem] mx-4 overflow-hidden relative border border-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-24 tracking-tighter text-center text-white underline decoration-green-600 decoration-8 underline-offset-8">Farmer Sourced Staples.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Arhar Dal (Premium)", price: "₹160", weight: "1kg" },
              { name: "Basmati Long Grain", price: "₹125", weight: "1kg" },
              { name: "Lakadong Turmeric", price: "₹85", weight: "250g" },
              { name: "Kabuli Chana", price: "₹140", weight: "1kg" }
            ].map((prod) => (
              <div key={prod.name} className="bg-stone-950 p-10 rounded-[4rem] border border-stone-800 hover:border-green-600 hover:shadow-[0_40px_80px_-20px_rgba(34,197,94,0.1)] transition-all group relative">
                <div className="h-60 bg-stone-900 rounded-[3rem] mb-10 flex items-center justify-center group-hover:bg-green-950 transition-colors overflow-hidden border border-stone-800">
                  <Package className="w-20 h-20 text-stone-700 group-hover:text-green-400 transition-all group-hover:scale-110" />
                </div>
                <h4 className="font-black text-2xl mb-1.5 tracking-tight text-white">{prod.name}</h4>
                <p className="text-xs font-black text-stone-500 mb-10 uppercase tracking-widest">{prod.weight} Jar</p>
                <div className="flex justify-between items-center bg-stone-900 p-5 rounded-3xl border border-stone-800">
                  <span className="text-3xl font-black text-green-500">{prod.price}</span>
                  <button onClick={() => addToCart(prod.name)} className="bg-green-600 text-white p-4 rounded-2xl hover:bg-green-700 transition-all active:scale-90 shadow-lg shadow-green-950/20">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODALS --- */}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Welcome Back.">
        <div className="space-y-5">
          <input type="email" placeholder="Email Address" className="w-full p-6 bg-stone-950 rounded-2xl border border-stone-800 outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-stone-600" />
          <input type="password" placeholder="Password" className="w-full p-6 bg-stone-950 rounded-2xl border border-stone-800 outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-stone-600" />
          <button className="w-full bg-white text-stone-950 py-6 rounded-2xl font-black text-xl hover:opacity-80 transition mt-6 shadow-2xl shadow-stone-950/50">Login</button>
        </div>
      </Modal>

      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)} title="Join the Zero-Waste Loop.">
        <div className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full p-6 bg-stone-950 rounded-2xl border border-stone-800 outline-none focus:ring-2 focus:ring-green-600 text-white" />
          <input type="email" placeholder="Email Address" className="w-full p-6 bg-stone-950 rounded-2xl border border-stone-800 outline-none focus:ring-2 focus:ring-green-600 text-white" />
          <button className="w-full bg-green-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-green-700 transition shadow-xl shadow-green-950/20 mt-6">Create Account</button>
        </div>
      </Modal>

      <Modal isOpen={showCart} onClose={() => setShowCart(false)} title="Your Shopping Jar.">
        {cartCount === 0 ? (
          <div className="py-24 text-center">
             <Package className="w-16 h-16 text-stone-800 mx-auto mb-6" />
             <p className="text-stone-600 font-medium italic">Empty Jar. Fill with purity?</p>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex justify-between p-7 bg-stone-950 rounded-3xl border-2 border-green-900">
              <span className="font-bold text-stone-400 uppercase text-xs tracking-widest self-center">Selected Staples</span>
              <span className="text-4xl font-black text-green-500">{cartCount} Jars</span>
            </div>
            <button className="w-full bg-white text-stone-950 py-6 rounded-2xl font-black text-xl hover:scale-[1.03] transition">Checkout & Swap</button>
          </div>
        )}
      </Modal>

      <footer className="mt-40 text-center text-stone-400 font-black text-[10px] uppercase tracking-[0.5em] pb-20 border-t border-stone-900 pt-20">
         © 2026 Shuddha Dhara • Refill. Reuse. Repeat.
      </footer>
    </div>
  );
}
