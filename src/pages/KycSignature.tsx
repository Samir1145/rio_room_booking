import { ArrowLeft, Edit3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function KycSignature() {
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
            <div className="w-8 h-1.5 bg-primary rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-4 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-extrabold tracking-tight text-on-background mb-3">
            House Rules & Signature
          </h1>
          <p className="text-secondary leading-relaxed">
            Please review our policies and provide your digital signature to complete the check-in process.
          </p>
        </div>

        {/* Policies Summary */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.04)] mb-8 space-y-4">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <p className="text-sm text-on-surface leading-relaxed">
              <span className="font-bold">Strict No Smoking Policy:</span> A cleaning fee of ₹5,000 will be charged for smoking inside the suite.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <p className="text-sm text-on-surface leading-relaxed">
              <span className="font-bold">Damage Liability:</span> The guest is responsible for any damages to the property, furniture, or art during the stay.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <p className="text-sm text-on-surface leading-relaxed">
              <span className="font-bold">Check-out Time:</span> 11:00 AM. Late check-outs without prior approval will incur a half-day charge.
            </p>
          </div>
        </div>

        {/* Signature Pad */}
        <div>
          <div className="flex justify-between items-end mb-3">
            <h3 className="font-bold text-on-background">Sign below</h3>
            <button className="text-xs font-bold text-primary hover:underline">Clear</button>
          </div>
          <div className="w-full h-48 bg-white rounded-2xl border border-outline-variant/40 shadow-inner relative flex items-center justify-center overflow-hidden">
            {/* Placeholder for actual canvas */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <Edit3 className="w-12 h-12 text-zinc-400" />
            </div>
            {/* Signature Line */}
            <div className="absolute bottom-10 left-8 right-8 h-px bg-zinc-200"></div>
            <p className="absolute bottom-4 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Draw your signature</p>
          </div>
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl px-6 py-6 shadow-[0_-12px_32px_rgba(34,34,34,0.06)] z-50">
        <div className="max-w-2xl mx-auto">
          <Link to="/kyc/success" className="w-full bg-primary hover:bg-primary-container text-white font-bold py-4 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-primary/20 text-lg">
            Agree & Complete
          </Link>
        </div>
      </footer>
    </div>
  );
}
