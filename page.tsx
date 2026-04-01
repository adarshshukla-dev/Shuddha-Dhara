import React, { useState } from 'react';
import { Leaf, Recycle, ShoppingCart, Truck, ShieldCheck, ChevronRight, Package, BarChart3 } from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
    <div className="flex items-center gap-2">
      <div className="bg-green-600 p-1.5 rounded-lg">
        <Leaf className="text-white w-5 h-5" />
      </div>
      <h1 className="text-xl font-bold text-stone-800 tracking-tight">SHUDDHA DHARA</h1>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
      <a href="#how" className="hover:text-green-600 transition">How it Works</a>
      <a href="#shop" className="hover:text-green-600 transition">Our Grains</a>
      <a href="#impact" className="hover:text-green-600 transition">Impact</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-stone-600 font-medium text-sm">Login</button>
      <button className="bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition shadow-md">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-green-100 uppercase tracking-wider">
        <Recycle className="w-3 h-3" /> Zero Plastic Revolution
      </div>
      <h2 className="text-5xl md:text-7xl font-black text-stone-900 leading-[1.1] mb-6">
        Ration wahi, <br/> <span className="text-green-600">Kachra nahi.</span>
      </h2>
      <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
        Premium groceries delivered in reusable glass jars. No plastic packets, no guilt. Just pure food delivered to your doorstep.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-stone-800 transition shadow-xl">
          Start Subscription <ChevronRight className="w-5 h-5" />
        </button>
        <div className="flex -space-x-3 items-center ml-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
            </div>
          ))}
          <p className="pl-6 text-sm font-medium text-stone-500">Joined by 500+ locals</p>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-100/50 rounded-full blur-3xl"></div>
      <img 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800" 
        alt="Glass Jars with Grains" 
        className="rounded-[2.5rem] shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition duration-500"
      />
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
      <Icon className="w-7 h-7 text-green-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-stone-900">{title}</h3>
    <p className="text-stone-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

const ProductCard = ({ name, price, weight, color }) => (
  <div className="bg-white p-5 rounded-3xl border border-stone-100 hover:border-green-200 transition group relative overflow-hidden">
    <div className={`h-48 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden bg-stone-100`}>
       <Package className="w-12 h-12 text-stone-300" />
       <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm">IN GLASS JAR</div>
    </div>
    <h4 className="font-bold text-lg text-stone-800">{name}</h4>
    <p className="text-xs text-stone-500 mb-4">{weight} • Refillable Package</p>
    <div className="flex justify-between items-center">
      <span className="text-xl font-black text-green-700">{price}</span>
      <button className="bg-stone-100 text-stone-800 p-2 rounded-xl hover:bg-green-600 hover:text-white transition">
        <ShoppingCart className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// --- Main Page ---

export default function ShuddhaDharaSite() {
  return (
    <div className="min-h-screen bg-[#FCFAFA] text-stone-900 selection:bg-green-200 selection:text-green-900">
      <Navbar />
      
      <Hero />

      {/* Stats / Impact Section */}
      <section id="impact" className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-green-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Our Community Impact</h2>
            <p className="text-green-200 max-w-md text-sm md:text-base">Real-time tracking of plastic waste diverted from Indian landfills through our swap model.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16 relative z-10 w-full md:w-auto">
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-5xl font-black mb-1">1,240</p>
              <p className="text-xs uppercase tracking-widest text-green-300 font-bold">Kgs Plastic Saved</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-5xl font-black mb-1">8,400</p>
              <p className="text-xs uppercase tracking-widest text-green-300 font-bold">Jars Swapped</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Shuddha Dhara Works</h2>
          <p className="text-stone-500">A seamless loop designed for your convenience and the planet's health.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={ShoppingCart} 
            title="1. Order via App" 
            desc="Select your monthly staples like Dal, Rice, and Spices. Choose your delivery slot." 
          />
          <FeatureCard 
            icon={Truck} 
            title="2. Swap at Doorstep" 
            desc="Our delivery partner brings your fresh ration and collects your empty jars from the previous month." 
          />
          <FeatureCard 
            icon={ShieldCheck} 
            title="3. Certified Cleaning" 
            desc="Returned jars undergo a multi-stage sterilization process before being refilled for the next cycle." 
          />
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Monthly Staples</h2>
              <p className="text-stone-500">Pure, unadulterated, and plastic-free.</p>
            </div>
            <button className="text-green-700 font-bold flex items-center gap-1 hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard name="Arhar Dal Premium" price="₹160" weight="1kg" />
            <ProductCard name="Basmati Rice (Long)" price="₹125" weight="1kg" />
            <ProductCard name="Organic Turmeric" price="₹85" weight="250g" />
            <ProductCard name="Kabuli Chana" price="₹140" weight="1kg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 text-center">
        <p className="text-stone-400 text-sm font-medium">© 2026 SHUDDHA DHARA. Made with ❤️ for a Greener India.</p>
      </footer>
    </div>
  );
}
