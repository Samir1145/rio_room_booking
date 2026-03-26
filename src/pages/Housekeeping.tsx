import { useState } from 'react';
import { ChevronLeft, CheckCircle2, Wind, Droplet, Bath, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const REQUESTS = [
  { id: 'req-1', title: 'Fresh Towels', icon: Bath, description: 'Set of 2 bath & 2 hand towels' },
  { id: 'req-2', title: 'Toiletries', icon: Droplet, description: 'Shampoo, conditioner, body wash' },
  { id: 'req-3', title: 'Room Cleaning', icon: Wind, description: 'Full room makeup service' },
  { id: 'req-4', title: 'Bottled Water', icon: Coffee, description: '2 extra bottles of mineral water' },
];

export default function Housekeeping() {
  const [requested, setRequested] = useState<Record<string, boolean>>({});

  const handleRequest = (id: string) => {
    setRequested(prev => ({ ...prev, [id]: true }));
    // Simulate auto-reset after 5 seconds for demo purposes
    setTimeout(() => {
      setRequested(prev => ({ ...prev, [id]: false }));
    }, 5000);
  };

  return (
    <div className="bg-background min-h-screen font-body text-on-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl px-6 py-4 flex items-center gap-4">
        <Link to="/stay/active" className="p-2 -ml-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-headline font-bold">Housekeeping</h1>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        <p className="text-secondary mb-8">
          Need something extra for your room? Request it here and our team will bring it up shortly.
        </p>

        <div className="space-y-4">
          {REQUESTS.map(req => {
            const Icon = req.icon;
            const isRequested = requested[req.id];

            return (
              <div key={req.id} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">{req.title}</h3>
                    <p className="text-xs text-secondary mt-0.5">{req.description}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleRequest(req.id)}
                  disabled={isRequested}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                    isRequested
                      ? 'bg-tertiary/10 text-tertiary'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high active:scale-95'
                  }`}
                >
                  {isRequested ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Sent
                    </span>
                  ) : (
                    'Request'
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-surface-container-low rounded-2xl">
          <h3 className="font-bold mb-2">Special Request?</h3>
          <p className="text-sm text-secondary mb-4">If you need something not listed here, feel free to message the host directly.</p>
          <button className="w-full bg-on-background text-background font-bold py-3 rounded-xl active:scale-95 transition-transform">
            Message Host
          </button>
        </div>
      </main>
    </div>
  );
}
