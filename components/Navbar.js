export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="text-2xl font-black text-green-800">SHUDDHA DHARA</div>
      <div className="hidden md:flex gap-8 font-medium">
        <a href="#how-it-works" className="hover:text-green-600 transition">How it Works</a>
        <a href="#shop" className="hover:text-green-600 transition">Shop</a>
        <a href="/dashboard" className="hover:text-green-600 transition">My Jars</a>
      </div>
      <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition">Login</button>
    </nav>
  );
}
