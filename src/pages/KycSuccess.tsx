import { CheckCircle2, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KycSuccess() {
  return (
    <div className="bg-background font-body text-on-background min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <main className="relative z-10 flex flex-col items-center text-center px-8 max-w-md mx-auto w-full">
        {/* Success Icon Animation Placeholder */}
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping opacity-20"></div>
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-4xl font-headline font-extrabold tracking-tighter text-on-background mb-4">
          You're all set!
        </h1>
        
        <p className="text-secondary text-lg leading-relaxed mb-10">
          Your identity has been verified successfully. Your digital room key is now being prepared.
        </p>

        <div className="bg-surface-container-lowest w-full p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.04)] border border-outline-variant/20 flex items-center gap-4 text-left">
          <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center flex-shrink-0 text-on-surface">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-on-background mb-0.5">Digital Key Activation</p>
            <p className="text-xs text-secondary">Activates at 2:00 PM on Oct 24</p>
          </div>
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full px-6 py-8 z-50">
        <div className="max-w-md mx-auto">
          <Link to="/stay/active" className="w-full bg-on-background hover:bg-zinc-800 text-surface-container-lowest font-bold py-4 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-xl text-lg">
            Go to My Stay
          </Link>
        </div>
      </footer>
    </div>
  );
}
