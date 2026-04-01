"use client";

import React, { useState, useEffect } from 'react';
import { Leaf, Recycle, ShoppingCart, Truck, ShieldCheck, ChevronRight, Package, ArrowRight, Star, CheckCircle2, X, User, LogIn } from 'lucide-react';

export default function ShuddhaDharaSite() {
  // --- States for Interaction ---
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState("");

  // Logic for Cart Toast
  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    setToast(`${product} added to jar!`);
    setTimeout(() => setToast(""), 3000);
  };

  // --- Reusable Components Inside ---

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-stone-100 rounded-full transition">
            <X className="w-5 h-5 text-stone-400" />
          </button>
          <h3 className="text-2xl font-black mb-6 tracking-tight text-stone-800">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-stone-900 selection:bg-green-600 selection:text-white pb-20">
      
      {/* --- TOAST NOTIFICATION --- */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-green-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-green-400" /> {toast}
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-stone-100/50">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="bg-green-600 p-2 rounded-xl shadow-lg shadow-green-200">
            <Leaf className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-black text-stone-800 tracking-tighter uppercase italic">SHUDDHA DHARA</h1>
        </div>
        
        <div className="hidden md:flex gap-10 text-[11px] font-black text-stone-400 tracking-widest uppercase">
          <a href="#how" className="hover:text-green-600 transition-colors">Process</a>
          <a href="#shop" className="hover:text-green-600 transition-colors">The Store</a>
          <a href="#impact" className="hover:text-green-600 transition-colors">Impact</a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => setShowCart(true)} className="relative p-2 hover:bg-stone-100 rounded-xl transition">
            <ShoppingCart className="w-6 h-6 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setShowLogin(true)} className="hidden sm:block text-stone-900 font-bold text-sm hover:opacity-70 transition">Login</button>
          <button onClick={() => setShowSignup(true)} className="bg-stone-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:scale-105 active:scale-95 transition shadow-xl shadow-stone-200">
            Join Now
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-green-100/50 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black mb-8 border border-green-200 uppercase tracking-[0.2em]">
            <Recycle className="w-3 h-3" /> Zero Plastic Revolution
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] mb-8 tracking-tighter">
            Ration wahi, <br/> <span className="text-green-600 italic">Kachra nahi.</span>
          </h2>
          <p className="text-xl text-stone-500 mb-10 max-w-md leading-relaxed font-medium">
            Premium groceries delivered in reusable glass jars. No plastic, no guilt. Just 100% pure staples.
          </p>
          <button onClick={() => setShowSignup(true)} className="bg-green-600 text-white px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-green-700 hover:shadow-2xl hover:shadow-green-200 transition-all group w-full sm:w-auto">
            Start Your Subscription <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="relative animate-in zoom-in duration-1000">
          <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-stone-100 rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800" className="rounded-[2.5rem] w-full" alt="Jars" />
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION (As requested) --- */}
      <section id="how" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Simple. Shuddha. Sustainable.</h2>
          <p className="text-stone-500 font-medium">Hamara 3-step magic loop.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:border-green-200 transition-all text-center">
            <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 mx-auto"><ShoppingCart className="text-green-600" /></div>
            <h3 className="text-xl font-bold mb-3">1. Order Staples</h3>
            <p className="text-stone-500 text-sm">Monthly ration select karo glass jars mein.</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:border-green-200 transition-all text-center">
            <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 mx-auto"><Truck className="text-green-600" /></div>
            <h3 className="text-xl font-bold mb-3">2. Doorstep Swap</h3>
            <p className="text-stone-500 text-sm">Naye jars lo, purane khali jars wapas do.</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:border-green-200 transition-all text-center">
            <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 mx-auto"><ShieldCheck className="text-green-600" /></div>
            <h3 className="text-xl font-bold mb-3">3. High Hygiene</h3>
            <p className="text-stone-500 text-sm">Returned jars ko hum sterilize karke refill karte hain.</p>
          </div>
        </div>
      </section>

      {/* --- SHOP SECTION --- */}
      <section id="shop" className="py-24 px-6 max-w-7xl mx-auto bg-stone-50 rounded-[4rem]">
        <div className="flex justify-between items-end mb-16 px-4">
          <h2 className="text-4xl font-black tracking-tight underline decoration-green-300 underline-offset-8">The Collection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Arhar Dal", price: "₹160", weight: "1kg" },
            { name: "Basmati Rice", price: "₹125", weight: "1kg" },
            { name: "Lakadong Turmeric", price: "₹85", weight: "250g" },
            { name: "Kabuli Chana", price: "₹140", weight: "1kg" }
          ].map((prod) => (
            <div key={prod.name} className="bg-white p-6 rounded-[2.5rem] border border-stone-200 hover:shadow-2xl transition-all group">
              <div className="h-48 bg-stone-50 rounded-[2rem] mb-6 flex items-center justify-center group-hover:bg-green-50">
                <Package className="w-12 h-12 text-stone-200 group-hover:text-green-300 transition-colors" />
              </div>
              <h4 className="font-black text-lg mb-1">{prod.name}</h4>
              <p className="text-xs font-bold text-stone-400 mb-6 tracking-widest">{prod.weight}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-green-700">{prod.price}</span>
                <button onClick={() => addToCart(prod.name)} className="bg-stone-900 text-white p-3 rounded-xl hover:bg-green-600 transition-all active:scale-90">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODALS --- */}
      
      {/* LOGIN MODAL */}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Welcome Back">
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl mb-4 focus:ring-2 focus:ring-green-600 outline-none" />
        <input type="password" placeholder="Password" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl mb-6 focus:ring-2 focus:ring-green-600 outline-none" />
        <button className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-stone-800 transition shadow-xl">Login</button>
        <p className="text-center text-sm text-stone-400 mt-6">Don't have an account? <span className="text-green-600 font-bold cursor-pointer" onClick={() => {setShowLogin(false); setShowSignup(true)}}>Join Now</span></p>
      </Modal>

      {/* SIGNUP MODAL */}
      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)} title="Start Your Eco-Journey">
        <input type="text" placeholder="Full Name" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl mb-4 outline-none" />
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl mb-4 outline-none" />
        <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition shadow-xl shadow-green-100">Create Account</button>
        <p className="text-center text-sm text-stone-400 mt-6">Already a member? <span className="text-stone-900 font-bold cursor-pointer underline" onClick={() => {setShowSignup(false); setShowLogin(true)}}>Login</span></p>
      </Modal>

      {/* CART MODAL */}
      <Modal isOpen={showCart} onClose={() => setShowCart(false)} title="Your Shuddha Jar">
        {cartCount === 0 ? (
          <div className="py-10 text-center">
            <Package className="w-16 h-16 text-stone-100 mx-auto mb-4" />
            <p className="text-stone-400 font-medium italic">Jar khali hai... Kuch pure fill karein?</p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6 bg-green-50 p-4 rounded-2xl border border-green-100">
              <span className="font-bold">Total Items:</span>
              <span className="text-green-700 font-black">{cartCount} Jars</span>
            </div>
            <button className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold">Checkout & Swap</button>
          </div>
        )}
      </Modal>

      <footer className="mt-32 text-center text-stone-300 font-black text-[10px] uppercase tracking-[0.4em] pb-10">
         © 2026 Shuddha Dhara • Refill. Reuse. Repeat.
      </footer>
    </div>
  );
}

