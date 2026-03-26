import { ArrowLeft, ShieldCheck, FileText, Camera, PenTool } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function KycIntro() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-background min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-6 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 transition-colors p-2 rounded-full active:scale-95 duration-200">
          <ArrowLeft className="w-6 h-6 text-zinc-900" />
        </button>
      </header>

      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-4 pb-32">
        <div className="mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-headline font-extrabold tracking-tighter text-on-background mb-4">
            Pre-Arrival Check-in
          </h1>
          <p className="text-secondary text-lg leading-relaxed">
            As a reception-free boutique hotel, we require a quick identity verification before generating your secure digital room key.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.04)] flex gap-5 items-start">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 mt-1">
              <FileText className="w-5 h-5 text-on-surface" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Government ID</h3>
              <p className="text-sm text-secondary leading-relaxed">Upload your Aadhaar card, PAN, or Passport for legal compliance.</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.04)] flex gap-5 items-start">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 mt-1">
              <Camera className="w-5 h-5 text-on-surface" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Selfie Match</h3>
              <p className="text-sm text-secondary leading-relaxed">A quick liveness check to ensure you match your uploaded ID.</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.04)] flex gap-5 items-start">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 mt-1">
              <PenTool className="w-5 h-5 text-on-surface" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Digital Signature</h3>
              <p className="text-sm text-secondary leading-relaxed">Review and sign our house rules and damage policies.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-surface-container-low p-5 rounded-xl border-l-4 border-primary/30">
          <p className="text-xs text-secondary leading-relaxed">
            Your data is encrypted end-to-end and automatically deleted 30 days after your checkout in accordance with local privacy laws.
          </p>
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl px-6 py-6 shadow-[0_-12px_32px_rgba(34,34,34,0.06)] z-50">
        <div className="max-w-2xl mx-auto">
          <Link to="/kyc/document" className="w-full bg-primary hover:bg-primary-container text-white font-bold py-4 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-primary/20 text-lg">
            Start Verification
          </Link>
        </div>
      </footer>
    </div>
  );
}
