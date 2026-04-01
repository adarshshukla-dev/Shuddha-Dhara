"use client";

import React, { useState, useEffect } from 'react';
import { Leaf, Recycle, ShoppingCart, Truck, ShieldCheck, ChevronRight, Package, ArrowRight, Star, CheckCircle2, X, BarChart3, Globe } from 'lucide-react';

export default function ShuddhaDharaSite() {
  // --- Global States ---
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-300">
        <div className="bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl relative border border-stone-100">
          <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-stone-50 rounded-full transition">
            <X className="w-5 h-5 text-stone-400" />
          </button>
          <h3 className="text-3xl font-black mb-8 tracking-tighter text-stone-900">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-stone-900 selection:bg-green-600 selection:text-white pb-10">
      
      {/* --- TOAST NOTIFICATION --- */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-stone-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-500 border border-stone-700">
          <div className="bg-green-500 h-2 w-2 rounded-full animate-pulse" /> {toast}
        </div>
      )}

      {/* --- NAVIGATION BAR --- */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-stone-100/50">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="bg-green-600 p-2 rounded-xl shadow-lg shadow-green-100 group-hover:rotate-12 transition-transform">
            <Leaf className="text-white w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black text-stone-900 tracking-tighter italic">SHUDDHA DHARA</h1>
        </div>
        
        <div className="hidden lg:flex gap-12 text-[10px] font-black text-stone-400 tracking-[0.2em] uppercase">
          <a href="#how" className="hover:text-green-600 transition-colors">The Process</a>
          <a href="#impact" className="hover:text-green-600 transition-colors">Our Impact</a>
          <a href="#shop" className="hover:text-green-600 transition-colors">Shop Jars</a>
        </div>

        <div className="flex items-center gap-5">
          <button onClick={() => setShowCart(true)} className="relative p-2.5 bg-stone-50 hover:bg-stone-100 rounded-2xl transition">
            <ShoppingCart className="w-5 h-5 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setShowSignup(true)} className="bg-stone-900 text-white px-8 py-3.5 rounded-2xl text-[13px] font-bold hover:bg-stone-800 transition shadow-xl shadow-stone-200">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 bg-stone-100 text-stone-600 px-5 py-2 rounded-full text-[10px] font-black mb-10 border border-stone-200 uppercase tracking-widest">
            <Globe className="w-3 h-3 text-green-600" /> India's First Zero-Waste Subscription
          </div>
          <h2 className="text-7xl md:text-[100px] font-black text-stone-900 leading-[0.85] mb-10 tracking-tighter">
            Pure Food. <br/> <span className="text-green-600 italic">Zero Waste.</span>
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-md leading-relaxed font-medium">
            Subscription-based groceries delivered in reusable glass jars. We deliver, we swap, we clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => setShowSignup(true)} className="bg-green-600 text-white px-12 py-6 rounded-[2.5rem] font-black flex items-center justify-center gap-4 hover:bg-green-700 hover:shadow-2xl shadow-green-100 transition-all group text-lg">
              Start Swapping <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-100 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
          <div className="bg-white p-5 rounded-[4rem] shadow-2xl border border-stone-100 transform -rotate-3 group-hover:rotate-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200" className="rounded-[3.5rem] w-full" alt="Eco Jars" />
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION (Restored & Enhanced) --- */}
      <section id="impact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter italic">Making a Difference.</h2>
              <p className="text-stone-400 text-lg leading-relaxed max-w-sm font-medium">
                Every jar you swap prevents a plastic packet from entering our oceans. 
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 border-l border-stone-800 pl-10">
              <div>
                <p className="text-6xl font-black text-green-500 mb-2 leading-none">1.2k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">Kgs Plastic Diverted</p>
              </div>
              <div>
                <p className="text-6xl font-black text-white mb-2 leading-none">8.4k</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">Glass Jars Swapped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Upgraded) --- */}
      <section id="how" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-5xl font-black mb-6 tracking-tighter">The Shuddha Loop.</h2>
            <p className="text-stone-500 text-lg font-medium">Sustainable grocer-ing has never been this easy.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-stone-100 mx-10"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: ShoppingCart, title: "1. Select Jars", desc: "Choose your grains, pulses, and spices in reusable jars." },
            { icon: Truck, title: "2. Doorstep Swap", desc: "Our rider delivers fresh jars and picks up your empties." },
            { icon: ShieldCheck, title: "3. Lab Cleaned", desc: "Every jar is sterilized at 180°C before reuse." }
          ].map((item, idx) => (
            <div key={idx} className="group p-10 rounded-[3rem] bg-white border border-stone-100 hover:border-green-600 transition-all duration-500 text-center">
              <div className="w-20 h-20 bg-stone-50 rounded-[2rem] flex items-center justify-center mb-8 mx-auto group-hover:bg-green-600 transition-colors">
                <item.icon className="w-8 h-8 text-stone-800 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-stone-800">{item.title}</h3>
              <p className="text-stone-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORE SECTION --- */}
      <section id="shop" className="py-32 px-6 bg-stone-50 rounded-[5rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-20 tracking-tighter text-center">Curated Staples.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Arhar Dal (Premium)", price: "₹160", weight: "1kg" },
              { name: "Basmati Long Grain", price: "₹125", weight: "1kg" },
              { name: "Organic Turmeric", price: "₹85", weight: "250g" },
              { name: "Kabuli Chana", price: "₹140", weight: "1kg" }
            ].map((prod) => (
              <div key={prod.name} className="bg-white p-8 rounded-[3.5rem] border border-stone-200 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all group relative">
                <div className="h-56 bg-stone-50 rounded-[2.5rem] mb-8 flex items-center justify-center group-hover:bg-green-50 transition-colors overflow-hidden">
                  <Package className="w-16 h-16 text-stone-200 group-hover:text-green-200 transition-all group-hover:scale-110" />
                </div>
                <h4 className="font-black text-xl mb-1 tracking-tight">{prod.name}</h4>
                <p className="text-xs font-black text-stone-300 mb-8 uppercase tracking-widest">{prod.weight}</p>
                <div className="flex justify-between items-center bg-stone-50 p-4 rounded-3xl">
                  <span className="text-2xl font-black text-green-700">{prod.price}</span>
                  <button onClick={() => addToCart(prod.name)} className="bg-stone-900 text-white p-4 rounded-2xl hover:bg-green-600 transition-all active:scale-90 shadow-lg shadow-stone-200">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODALS (Login, Signup, Cart) --- */}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Welcome back.">
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-5 bg-stone-50 rounded-2xl border border-stone-100 outline-none focus:ring-2 focus:ring-green-600" />
          <input type="password" placeholder="Password" className="w-full p-5 bg-stone-50 rounded-2xl border border-stone-100 outline-none focus:ring-2 focus:ring-green-600" />
          <button className="w-full bg-stone-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-stone-800 transition mt-4">Login</button>
        </div>
      </Modal>

      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)} title="Join the Loop.">
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-5 bg-stone-50 rounded-2xl border border-stone-100 outline-none focus:ring-2 focus:ring-green-600" />
          <input type="email" placeholder="Email" className="w-full p-5 bg-stone-50 rounded-2xl border border-stone-100 outline-none focus:ring-2 focus:ring-green-600" />
          <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-700 transition shadow-xl shadow-green-100 mt-4">Create Account</button>
        </div>
      </Modal>

      <Modal isOpen={showCart} onClose={() => setShowCart(false)} title="Your Shopping Jar.">
        {cartCount === 0 ? (
          <div className="py-20 text-center opacity-30 italic font-medium">Your jar is empty...</div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between p-6 bg-green-50 rounded-3xl border border-green-100">
              <span className="font-bold text-stone-600 uppercase text-xs tracking-widest self-center">Selected Jars</span>
              <span className="text-3xl font-black text-green-700">{cartCount}</span>
            </div>
            <button className="w-full bg-stone-900 text-white py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition">Proceed to Swap</button>
          </div>
        )}
      </Modal>

      <footer className="mt-40 text-center text-stone-300 font-black text-[10px] uppercase tracking-[0.6em] pb-20">
         © 2026 Shuddha Dhara • Better For You • Better For Earth
      </footer>
    </div>
  );
}

