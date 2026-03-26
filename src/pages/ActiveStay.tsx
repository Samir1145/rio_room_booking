import { useState } from 'react';
import { Key, Wifi, Copy, Bell, Coffee, Wind, MessageSquare, CheckCircle2, Search, Heart, Calendar, User, ShieldCheck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function ActiveStay() {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleUnlock = () => {
    if (isUnlocking || unlocked) return;
    setIsUnlocking(true);
    // Simulate Bluetooth/NFC unlock delay
    setTimeout(() => {
      setIsUnlocking(false);
      setUnlocked(true);
      // Reset after 3 seconds
      setTimeout(() => setUnlocked(false), 3000);
    }, 1500);
  };

  const handleCopyWifi = () => {
    navigator.clipboard.writeText('aman_luxury_24');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-background font-body text-on-background min-h-screen flex flex-col pb-24">
      {/* Header */}
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-6 flex justify-between items-center shadow-none">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-1">Current Stay</p>
          <h1 className="text-2xl font-headline font-extrabold tracking-tight text-on-background">Room 101</h1>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 border-2 border-white shadow-sm">
          <img alt="Guest Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzsLNB0P_pbJsb-A5DSrWLmC1ceOhwprVXu8irrbLcjVeJJwdYyiM7_i4_WIxdEUo1MN2jZDu01B6s-6D5fBkRF7KWaRJVe0vSvxDnUNyHkB_suqSrV9x0amNW92QTtBm_Np55srJ6ooWk-kAWsiIxnG7WMSqEhS0qNkB5kxaNfryxxJeOJdpOOM31b8iCTXNMwR5aLY8EQLFCI-3MQ4K3MtMFmTQkjPjwrMXiZAQAH5xKVzXTeHieJPoCQluKcD1ViSwY02_VrsWu" />
        </div>
      </header>

      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-4 space-y-8">
        
        {/* Digital Key Section */}
        <section className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_12px_32px_rgba(34,34,34,0.06)] flex flex-col items-center text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-1000 ${unlocked ? 'opacity-100' : 'opacity-0'}`}></div>
          
          <h2 className="text-xl font-bold text-on-surface mb-2 relative z-10">Digital Key</h2>
          <p className="text-sm text-secondary mb-8 relative z-10">Hold your phone near the door lock</p>
          
          <button 
            onClick={handleUnlock}
            className={`relative w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${
              unlocked 
                ? 'bg-tertiary-container text-on-tertiary-container shadow-[0_0_40px_rgba(0,133,88,0.4)] scale-105' 
                : isUnlocking
                  ? 'bg-primary/20 text-primary scale-95'
                  : 'bg-primary text-on-primary shadow-[0_20px_40px_rgba(186,0,54,0.3)] hover:scale-105 active:scale-95'
            }`}
          >
            {/* Ripple effect rings */}
            {!unlocked && !isUnlocking && (
              <>
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="absolute inset-[-20px] rounded-full border border-primary/10 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>
              </>
            )}
            
            {unlocked ? (
              <div className="flex flex-col items-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 mb-1" />
                <span className="text-xs font-bold tracking-widest uppercase">Unlocked</span>
              </div>
            ) : isUnlocking ? (
              <div className="flex flex-col items-center animate-pulse">
                <ShieldCheck className="w-10 h-10 mb-2 opacity-80" />
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">Connecting</span>
              </div>
            ) : (
              <Key className="w-14 h-14" />
            )}
          </button>
        </section>

        {/* Wi-Fi & Quick Info */}
        <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_12px_32px_rgba(34,34,34,0.04)] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center text-on-surface">
              <Wifi className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-1">Guest Wi-Fi</p>
              <p className="font-bold text-on-surface">Aman_Tokyo_Guest</p>
            </div>
          </div>
          <button 
            onClick={handleCopyWifi}
            className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high px-4 py-2 rounded-full transition-colors active:scale-95"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-tertiary" /> : <Copy className="w-4 h-4 text-on-surface" />}
            <span className="text-xs font-bold">{copied ? 'Copied' : 'Copy Pass'}</span>
          </button>
        </section>

        {/* Concierge Services (Bento Grid) */}
        <section>
          <h3 className="font-headline text-xl font-bold mb-4 px-2">In-App Concierge</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/stay/room-service" className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.03)] flex flex-col items-start gap-4 hover:bg-surface-container-low transition-colors active:scale-95 text-left">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Room Service</h4>
                <p className="text-xs text-secondary">Order food & drinks</p>
              </div>
            </Link>

            <Link to="/stay/housekeeping" className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.03)] flex flex-col items-start gap-4 hover:bg-surface-container-low transition-colors active:scale-95 text-left">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Housekeeping</h4>
                <p className="text-xs text-secondary">Towels & cleaning</p>
              </div>
            </Link>
            
            <Link to="/stay/guide" className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.03)] flex flex-col items-start gap-4 hover:bg-surface-container-low transition-colors active:scale-95 text-left">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Local Guide</h4>
                <p className="text-xs text-secondary">Curated recommendations</p>
              </div>
            </Link>

            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(34,34,34,0.03)] flex flex-col items-start gap-4 hover:bg-surface-container-low transition-colors active:scale-95 text-left">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Chat with Host</h4>
                <p className="text-xs text-secondary">24/7 digital concierge</p>
              </div>
            </button>
          </div>
        </section>

      </main>

      <BottomNav />
    </div>
  );
}
