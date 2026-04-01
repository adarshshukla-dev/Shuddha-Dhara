import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[#FCFAFA]">
      <Navbar />
      <Hero />
      <Features />
      
      <section id="shop" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Hamare Shuddha Products</h2>
        {/* Placeholder for Product Cards */}
        <ProductGrid />
      </section>

      <Footer />
    </main>
  );
}
