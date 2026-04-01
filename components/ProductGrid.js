const products = [
  { id: 1, name: "Premium Arhar Dal", price: "₹160", weight: "1kg", img: "https://images.unsplash.com/photo-1585994429691-122974917951?q=80&w=200" },
  { id: 2, name: "Basmati Rice", price: "₹120", weight: "1kg", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=200" },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded-3xl border border-stone-100 hover:border-green-200 transition group">
          <div className="h-48 bg-stone-100 rounded-2xl mb-4 overflow-hidden">
            <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
          </div>
          <h3 className="font-bold text-xl">{p.name}</h3>
          <p className="text-gray-500 mb-4">{p.weight} - Glass Jar Included</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-800">{p.price}</span>
            <button className="bg-stone-900 text-white px-4 py-2 rounded-xl text-sm">Add to Jar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
