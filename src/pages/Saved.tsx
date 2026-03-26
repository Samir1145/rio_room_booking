import { Heart, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Saved() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-surface min-h-screen pb-32">
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl w-full top-0 sticky z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors p-2 rounded-full active:scale-95 duration-200">
          <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
        </button>
        <h1 className="font-headline font-bold tracking-tight text-lg">Saved Properties</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8">
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-6 text-secondary">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-headline font-bold mb-2">No saved properties yet</h2>
          <p className="text-secondary max-w-xs mb-8">
            As you explore our collection, tap the heart icon to save your favorite rooms for later.
          </p>
          <Link to="/" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            Start Exploring
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
