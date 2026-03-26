import { useState } from 'react';
import { ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
  {
    id: 'rs-1',
    category: 'Breakfast',
    name: 'Avocado Toast',
    description: 'Sourdough, poached egg, chili flakes, microgreens.',
    price: 850,
    image: 'https://picsum.photos/seed/avocadotoast/400/300'
  },
  {
    id: 'rs-2',
    category: 'Breakfast',
    name: 'Açaí Bowl',
    description: 'Fresh berries, house-made granola, coconut flakes.',
    price: 700,
    image: 'https://picsum.photos/seed/acaibowl/400/300'
  },
  {
    id: 'rs-3',
    category: 'All Day',
    name: 'Wagyu Burger',
    description: 'Brioche bun, truffle mayo, aged cheddar, fries.',
    price: 1450,
    image: 'https://picsum.photos/seed/wagyuburger/400/300'
  },
  {
    id: 'rs-4',
    category: 'Drinks',
    name: 'Artisan Latte',
    description: 'Single-origin espresso, steamed oat milk.',
    price: 350,
    image: 'https://picsum.photos/seed/artisanlatte/400/300'
  }
];

export default function RoomService() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState('Breakfast');

  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const updateCart = (id: string, delta: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: next };
    });
  };

  const cartTotal = Object.entries(cart).reduce((total: number, [id, quantity]: [string, number]) => {
    const item = MENU_ITEMS.find(i => i.id === id);
    return total + (item?.price || 0) * quantity;
  }, 0);

  const cartItemCount: number = (Object.values(cart) as number[]).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="bg-background min-h-screen font-body text-on-background pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl px-6 py-4 flex items-center gap-4">
        <Link to="/stay/active" className="p-2 -ml-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-headline font-bold">Room Service</h1>
      </header>

      {/* Categories */}
      <div className="px-6 py-4 overflow-x-auto hide-scrollbar flex gap-3 sticky top-[72px] z-40 bg-background/90 backdrop-blur-md">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === category
                ? 'bg-on-background text-background'
                : 'bg-surface-container-low text-secondary hover:bg-surface-container-high'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <main className="px-6 py-4 space-y-6">
        {filteredItems.map(item => (
          <div key={item.id} className="flex gap-4 bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-surface-container-low">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-on-surface leading-tight">{item.name}</h3>
                <p className="text-xs text-secondary mt-1 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-sm">₹{item.price}</span>
                
                {cart[item.id] ? (
                  <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-2 py-1">
                    <button onClick={() => updateCart(item.id, -1)} className="p-1 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{cart[item.id]}</span>
                    <button onClick={() => updateCart(item.id, 1)} className="p-1 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => updateCart(item.id, 1)}
                    className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 rounded-full text-xs font-bold transition-colors"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Floating Cart */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 w-full px-6 py-8 z-50 bg-gradient-to-t from-background via-background to-transparent">
          <button className="w-full bg-on-background hover:bg-zinc-800 text-surface-container-lowest font-bold py-4 px-6 rounded-full flex items-center justify-between transition-all active:scale-95 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="bg-surface-container-lowest/20 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {cartItemCount}
              </div>
              <span>View Order</span>
            </div>
            <span>₹{cartTotal}</span>
          </button>
        </div>
      )}
    </div>
  );
}
