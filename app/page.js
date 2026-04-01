"use client";

import React, { useState, useEffect } from 'react';
import { Leaf, Recycle, ShoppingCart, Truck, ShieldCheck, ChevronRight, Package, ArrowRight, Star, CheckCircle2 } from 'lucide-react';

// --- Enhanced Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-stone-100/50">
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="bg-green-600 p-2 rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-green-200">
        <Leaf className="text-white w-5 h-5" />
      </div>
      <h1 className="text-xl font-black text-stone-800 tracking-tighter uppercase italic">SHUDDHA DHARA</h1>
    </div>
    <div className="hidden md:flex gap-10 text-[13px] font-bold text-stone-500 tracking-widest uppercase">
      <a href="#how" className="hover:text-green-600 transition-colors">Process</a>
      <a href="#shop" className="hover:text-green-600 transition-colors">The Store</a>
      <a href="#impact" className="hover:text-green-600 transition-colors">Our Impact</a>
    </div>
    <div className="flex items-center gap-6">
      <button className="text-stone-900 font-bold text-sm hover:opacity-70 transition">Login</button>
      <button className="bg-stone-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:scale-105 active:scale-95 transition shadow-xl shadow-stone-200">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="animate-in fade-in slide-in-from-left duration-1000">
      <div className="inline-flex items-center gap-2 bg-green-100/50 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black mb-8 border border-green-200 uppercase tracking-[0.2em]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Revolutionizing Grocery
      </div>
      <h2 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] mb-8 tracking-tighter">
        Ration wahi, <br/> <span className="text-green-600 underline decoration-green-200 underline-offset-8">Kachra nahi.</span>
      </h2>
      <p className="text-xl text-stone-500 mb-10 max-w-md leading-relaxed font-medium">
        Premium groceries delivered in reusable glass jars. No plastic, no guilt. Just 100% pure staples for your home.
      </p>
      <div className="flex flex-col sm:flex-row gap-5">
        <button className="bg-green-600 text-white px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-green-700 hover:shadow-2xl hover:shadow-green-200 transition-all group">
          Start Your Subscription <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
    <div className="relative animate-in zoom-in duration-1000">
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-green-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-stone-100 rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200" 
          alt="Refillable Grains" 
          className="rounded-[2.5rem] w-full aspect-square object-cover"
        />
      </div>
      {/* Floating Card */}
      <div className="absolute -bottom-6 -left-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-stone-50 animate-bounce duration-[3000ms]">
        <div className="flex items-center gap-4">
          <div className="bg-orange-100 p-3 rounded-xl"><Star className="text-orange-500 fill-orange-500 w-5 h-5" /></div>
          <div>
            <p className="text-xs font-black text-stone-400 uppercase tracking-widest">Quality Guaranteed</p>
            <p className="text-lg font-bold text-stone-800 italic">100% Organic</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ name, price, weight }) => (
  <div className="bg-white p-6 rounded-[2.5rem] border border-stone-100 hover:border-green-200 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-100/50 relative overflow-hidden">
    <div className="h-56 rounded-[2rem] mb-6 flex items-center justify-center relative overflow-hidden bg-stone-50 group-hover:bg-green-50 transition-colors">
       <Package className="w-16 h-16 text-stone-200 group-hover:text-green-200 transition-colors" />
       <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-[9px] font-black shadow-lg">SWAPPABLE JAR</div>
    </div>
    <div className="px-2 text-center">
      <h4 className="font-black text-xl text-stone-800 mb-1 tracking-tight">{name}</h4>
      <p className="text-xs font-bold text-stone-400 mb-5 uppercase tracking-widest">{weight}</p>
      <div className="flex justify-between items-center bg-stone-50 p-3 rounded-2xl">
        <span className="text-2xl font-black text-green-700">{price}</span>
        <button className="bg-stone-900 text-white p-3 rounded-xl hover:bg-green-600 transition-all active:scale-90">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default function ShuddhaDharaSite() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-stone-900 selection:bg-green-600 selection:text-white pb-20">
      <Navbar />
      <Hero />

      {/* Trust Section */}
      <section className="py-10 border-y border-stone-100 flex overflow-hidden whitespace-nowrap bg-white relative">
        <div className="flex animate-marquee gap-20 py-4 items-center">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex items-center gap-3 text-stone-300 font-black text-xl italic grayscale opacity-50">
              <CheckCircle2 className="w-6 h-6" /> SUSTAINABLE REFILLS
            </div>
          ))}
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Fresh from Farmers.</h2>
            <p className="text-stone-500 font-medium max-w-sm">No adulteration, no plastic packaging. Pure as nature intended.</p>
          </div>
          <div className="flex gap-4">
             <div className="h-14 w-14 rounded-full border border-stone-200 flex items-center justify-center font-bold">←</div>
             <div className="h-14 w-14 rounded-full border border-green-600 bg-green-600 text-white flex items-center justify-center font-bold">→</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ProductCard name="Arhar Dal (Premium)" price="₹160" weight="1kg Unit" />
          <ProductCard name="Classic Basmati" price="₹125" weight="1kg Unit" />
          <ProductCard name="Lakadong Turmeric" price="₹85" weight="250g Unit" />
          <ProductCard name="Kabuli Chana" price="₹140" weight="1kg Unit" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight relative z-10">
            Ready to clean your <br className="hidden md:block"/> kitchen from plastic?
          </h2>
          <button className="bg-green-600 text-white px-12 py-6 rounded-full text-xl font-black hover:scale-105 transition-transform shadow-2xl shadow-green-500/20 relative z-10">
            Join the Loop Now
          </button>
        </div>
      </section>

      <footer className="mt-32 text-center text-stone-400 font-bold text-xs uppercase tracking-[0.3em] pb-10">
         © 2026 Shuddha Dhara • Refill. Reuse. Repeat.
      </footer>
    </div>
  );
}
