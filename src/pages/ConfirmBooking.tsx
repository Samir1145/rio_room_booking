import { X, Share, Star, CalendarCheck, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ConfirmBooking() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-background antialiased hide-scrollbar min-h-screen flex flex-col relative">
      {/* Header Navigation Shell */}
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl docked w-full top-0 sticky z-50 shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
              <X className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            </button>
            <h1 className="font-headline font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-lg">Confirm Booking</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
              <Share className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            </button>
          </div>
        </div>
      </header>

      {/* Background Editorial Image */}
      <div className="fixed inset-0 z-0">
        <img alt="Luxury editorial interior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGOBRtjI4Ku6_bKVUKbL5yM2xuHWHcc0IK0HUofkEqB-kwmmDgCuJGIdj92YvwvT_WKf6pD7_vyqDnr92ZAUojHIWgpO5lw2BN0qGsKlqtGV7bi5XxoxmmvUlGngFXe9CZNyyRaVkh8K5gz4f5RhlVj2MfUDZXANK-xhybQOlhqvpxsa6nCFyeXzgtYC9LlvWM61VhzIbduV3HYo0_3rrqS6fC07L9l3BfoP8VfisAknPeTwqq8G8a8xf6atMtDFwV48WLZVprsNW" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex-grow flex flex-col justify-end p-6 pb-32 lg:pb-12 max-w-4xl mx-auto w-full">
        {/* Trip Summary Floating Card */}
        <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-8 shadow-[0_12px_32px_rgba(34,34,34,0.06)] mb-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">Your Stay</span>
              <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-background mb-1">Aman Tokyo</h2>
              <p className="text-secondary text-sm">Deluxe King Room • Oct 24 - Oct 26</p>
            </div>
            <div className="bg-surface-container-low p-3 rounded-xl flex flex-col items-center">
              <span className="text-xs font-bold text-on-surface">4.9</span>
              <Star className="w-4 h-4 text-primary fill-current mt-1" />
            </div>
          </div>

          {/* Price Details Breakdown */}
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-outline-variant/15 pb-4">
              <h3 className="text-lg font-bold text-on-background">Price details</h3>
              <button className="text-primary text-sm font-bold hover:underline">Price breakdown</button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-on-surface">
                <span className="text-base">2 nights x ₹5,100.00</span>
                <span className="font-medium">₹10,200.00</span>
              </div>
              <div className="flex justify-between text-on-surface">
                <span className="text-base">Taxes and fees</span>
                <span className="font-medium">₹1,836.00</span>
              </div>
              <div className="flex justify-between text-on-surface pt-4 border-t border-outline-variant/15">
                <span className="text-xl font-extrabold tracking-tight">Total INR</span>
                <span className="text-xl font-extrabold tracking-tight">₹12,036.00</span>
              </div>
            </div>
          </div>

          {/* Policies Bento Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-surface-container-low p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <CalendarCheck className="w-5 h-5 text-on-surface-variant" />
                <span className="font-bold text-sm">Free Cancellation</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">Cancel before 2:00 PM on Oct 23 for a full refund.</p>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-on-surface-variant" />
                <span className="font-bold text-sm">Secure Payment</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">Your data is protected by industry-leading encryption.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Booking Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 p-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
        <div className="max-w-4xl mx-auto w-full pointer-events-auto">
          <div className="bg-surface-container-lowest backdrop-blur-xl p-4 rounded-full flex justify-between items-center shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
            <div className="pl-6">
              <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">Due Now</p>
              <p className="text-lg font-extrabold text-on-background tracking-tighter">₹12,036.00</p>
            </div>
            <Link to="/kyc/intro" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-bold tracking-tight active:scale-95 transition-all shadow-lg shadow-primary/20">
              Confirm and Pay
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
