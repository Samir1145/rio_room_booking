import { ArrowLeft, UploadCloud, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function KycDocument() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-background min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 transition-colors p-2 rounded-full active:scale-95 duration-200">
            <ArrowLeft className="w-6 h-6 text-zinc-900" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1.5 bg-primary rounded-full"></div>
            <div className="w-8 h-1.5 bg-surface-container-high rounded-full"></div>
            <div className="w-8 h-1.5 bg-surface-container-high rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-4 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-extrabold tracking-tight text-on-background mb-3">
            Upload Identity
          </h1>
          <p className="text-secondary leading-relaxed">
            Please upload clear photos of your Aadhaar card, PAN, or Passport. Make sure all text is readable and there is no glare.
          </p>
        </div>

        <div className="space-y-6">
          {/* Front Upload */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="border-2 border-dashed border-outline-variant/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-surface-container-lowest hover:border-primary/50 transition-colors h-48">
              <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center mb-4 text-primary">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-on-surface mb-1">Front of ID</h3>
              <p className="text-xs text-secondary">Tap to take a photo or upload</p>
            </div>
          </div>

          {/* Back Upload */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="border-2 border-dashed border-outline-variant/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-surface-container-lowest hover:border-primary/50 transition-colors h-48">
              <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center mb-4 text-primary">
                <UploadCloud className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-on-surface mb-1">Back of ID</h3>
              <p className="text-xs text-secondary">Tap to take a photo or upload</p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl px-6 py-6 shadow-[0_-12px_32px_rgba(34,34,34,0.06)] z-50">
        <div className="max-w-2xl mx-auto">
          <Link to="/kyc/selfie" className="w-full bg-on-background hover:bg-zinc-800 text-surface-container-lowest font-bold py-4 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-xl text-lg">
            Continue
          </Link>
        </div>
      </footer>
    </div>
  );
}
