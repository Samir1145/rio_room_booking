import { ArrowLeft, ScanFace } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function KycSelfie() {
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
            <div className="w-8 h-1.5 bg-primary rounded-full"></div>
            <div className="w-8 h-1.5 bg-surface-container-high rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-4 pb-32 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-extrabold tracking-tight text-on-background mb-3">
            Selfie Match
          </h1>
          <p className="text-secondary leading-relaxed">
            Position your face within the frame. We will match this securely against your uploaded ID to verify your identity.
          </p>
        </div>

        {/* Camera Viewfinder Placeholder */}
        <div className="flex-grow flex flex-col items-center justify-center py-8">
          <div className="relative w-72 h-96 rounded-[3rem] overflow-hidden bg-zinc-200 shadow-inner flex items-center justify-center border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            {/* Simulated Camera Feed Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-300 to-zinc-200 opacity-50"></div>
            
            {/* Face Guide Overlay */}
            <div className="absolute inset-0 border-[6px] border-primary/20 rounded-[3rem] m-4"></div>
            
            <ScanFace className="w-24 h-24 text-zinc-400 opacity-50" strokeWidth={1} />
            
            <div className="absolute bottom-6 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full tracking-wide">
              Look straight ahead
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl px-6 py-6 shadow-[0_-12px_32px_rgba(34,34,34,0.06)] z-50">
        <div className="max-w-2xl mx-auto">
          <Link to="/kyc/signature" className="w-full bg-on-background hover:bg-zinc-800 text-surface-container-lowest font-bold py-4 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-xl text-lg">
            Capture & Continue
          </Link>
        </div>
      </footer>
    </div>
  );
}
