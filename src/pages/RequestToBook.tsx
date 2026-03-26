import { X, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function RequestToBook() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background antialiased pb-32 min-h-screen">
      {/* Top AppBar */}
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl docked w-full top-0 sticky z-50 shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-5">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 p-2 rounded-full">
              <X className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            </button>
            <h1 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">Request to book</h1>
          </div>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8 space-y-12">
        {/* Property Summary Card */}
        <section className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_12px_32px_rgba(34,34,34,0.06)] flex gap-4 items-center">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img alt="Luxury 3BHK" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBFDtQxueh4rg66Twebcgj1cJ7VtZpeBocQjCKP_XDqQGpYgMsC1Iw0GPgQppAUve1koPCmc2dd0Ddr2wk_WI7xZfjCmEuOVvVyDUKwBEUanhlBR7_ecSp2uiTQnIIesNs33U2Xuzw2TmLTToI5P_XT4U_jvry0LZThVniayib4Za5pPWEEgQD5YfNn6W20cWAORw5Jb_c62HZnYpkD6PynjqI5jJlfe4tiRss3aPS0gRo6IqRRj_m2MyHvQziDMziwEp2pYFaQG7" />
          </div>
          <div className="flex-1 space-y-1">
            <h2 className="font-bold text-zinc-900 leading-tight">Luxury 3BHK</h2>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-zinc-900 fill-current" />
              <span className="text-xs font-semibold text-secondary">4.95 (128 reviews)</span>
            </div>
            <div className="pt-1">
              <span className="text-sm font-bold text-primary">₹12,500</span>
              <span className="text-xs text-secondary"> / night</span>
            </div>
          </div>
        </section>

        {/* Trip Details */}
        <section className="space-y-8">
          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900">Your trip</h3>
          
          {/* Dates Row */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-sm font-bold text-zinc-900">Dates</p>
              <p className="text-base text-secondary">Oct 24 – 29, 2024</p>
            </div>
            <Link to="/book/1/dates" className="text-sm font-bold text-primary hover:underline transition-all active:scale-95">Change</Link>
          </div>
          
          {/* Guests Row */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-sm font-bold text-zinc-900">Guests</p>
              <p className="text-base text-secondary">2 guests</p>
            </div>
            <Link to="/book/1/guests" className="text-sm font-bold text-primary hover:underline transition-all active:scale-95">Change</Link>
          </div>
        </section>

        {/* Price Breakdown */}
        <section className="space-y-6 pt-4">
          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900">Price details</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-base text-secondary">
              <span>₹12,500 x 5 nights</span>
              <span>₹62,500</span>
            </div>
            <div className="flex justify-between text-base text-secondary">
              <span>Cleaning fee</span>
              <span>₹1,200</span>
            </div>
            <div className="flex justify-between text-base text-secondary">
              <span>Service fee</span>
              <span>₹4,500</span>
            </div>
            <div className="flex justify-between text-base text-secondary">
              <span>Taxes</span>
              <span>₹2,100</span>
            </div>
            <div className="pt-4 flex justify-between text-lg font-extrabold text-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
              <span>Total price</span>
              <span>₹70,300</span>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="bg-surface-container-low rounded-xl p-6 border-l-4 border-primary/20">
          <div className="flex gap-4">
            <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-zinc-900">Free cancellation for 48 hours</p>
              <p className="text-xs text-secondary leading-relaxed">Cancel before Oct 22 to get a full refund. After that, the cancellation policy applies.</p>
            </div>
          </div>
        </section>

        {/* Message to Host */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-extrabold tracking-tight text-zinc-900">Message the host</h3>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-200">
                <img alt="Host" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzsLNB0P_pbJsb-A5DSrWLmC1ceOhwprVXu8irrbLcjVeJJwdYyiM7_i4_WIxdEUo1MN2jZDu01B6s-6D5fBkRF7KWaRJVe0vSvxDnUNyHkB_suqSrV9x0amNW92QTtBm_Np55srJ6ooWk-kAWsiIxnG7WMSqEhS0qNkB5kxaNfryxxJeOJdpOOM31b8iCTXNMwR5aLY8EQLFCI-3MQ4K3MtMFmTQkjPjwrMXiZAQAH5xKVzXTeHieJPoCQluKcD1ViSwY02_VrsWu" />
              </div>
              <span className="text-xs font-semibold text-secondary">Hosted by Rohan</span>
            </div>
          </div>
          <textarea className="w-full min-h-[140px] bg-surface-container-highest border-none rounded-xl p-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 resize-none" placeholder="Tell Rohan about your trip, who you're traveling with, and what brings you to the city..."></textarea>
        </section>

        {/* Required Notice */}
        <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-loose text-center px-4">
          By selecting the button below, I agree to the House Rules, Ground rules for guests, Rebooking and Refund Policy, and that The Concierge can charge my payment method if I’m responsible for damage.
        </p>
      </main>

      {/* Persistent Floating Booking Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl z-50 px-6 py-6 shadow-[0_-12px_32px_rgba(0,0,0,0.05)]">
        <div className="max-w-2xl mx-auto">
          <Link to="/confirm/1" className="w-full bg-primary hover:bg-primary-container text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-primary/20">
            Continue to Razorpay
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
