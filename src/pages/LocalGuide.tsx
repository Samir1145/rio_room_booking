import { ChevronLeft, MapPin, Star, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLACES = [
  {
    id: 'p1',
    name: 'The Artisan Bakery',
    category: 'Cafe',
    distance: '0.2 km',
    rating: 4.8,
    description: 'Famous for their sourdough croissants and single-origin pour-overs. Perfect for a quick morning bite.',
    image: 'https://picsum.photos/seed/bakery/600/400'
  },
  {
    id: 'p2',
    name: 'Osteria Bella',
    category: 'Dining',
    distance: '0.5 km',
    rating: 4.9,
    description: 'Intimate Italian dining with handmade pasta and an extensive natural wine list. Reservations recommended.',
    image: 'https://picsum.photos/seed/italian/600/400'
  },
  {
    id: 'p3',
    name: 'Modern Art Pavilion',
    category: 'Culture',
    distance: '1.2 km',
    rating: 4.7,
    description: 'Contemporary art museum featuring rotating exhibitions from local and international artists.',
    image: 'https://picsum.photos/seed/museum/600/400'
  },
  {
    id: 'p4',
    name: 'Sunset Point Park',
    category: 'Nature',
    distance: '0.8 km',
    rating: 4.6,
    description: 'A beautiful landscaped park offering the best sunset views in the city. Great for an evening stroll.',
    image: 'https://picsum.photos/seed/park/600/400'
  }
];

export default function LocalGuide() {
  return (
    <div className="bg-background min-h-screen font-body text-on-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl px-6 py-4 flex items-center gap-4">
        <Link to="/stay/active" className="p-2 -ml-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-headline font-bold">Local Guide</h1>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-headline font-extrabold tracking-tight mb-2">Curated for You</h2>
          <p className="text-secondary text-sm">Our hand-picked recommendations for the best spots around the neighborhood.</p>
        </div>

        <div className="space-y-6">
          {PLACES.map(place => (
            <div key={place.id} className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm group">
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {place.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-headline">{place.name}</h3>
                  <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 fill-current text-amber-500" />
                    <span className="text-xs font-bold">{place.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-secondary text-xs font-semibold mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{place.distance} away</span>
                </div>
                
                <p className="text-sm text-secondary mb-6 leading-relaxed">
                  {place.description}
                </p>
                
                <button className="w-full flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container-high text-on-surface font-bold py-3 rounded-xl transition-colors active:scale-95">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
