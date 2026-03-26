import { Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-6 pb-32 mt-12 rounded-t-[2.5rem]">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Newsletter */}
        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h3 className="text-white font-headline font-bold text-xl mb-2">Join the Guestlist</h3>
          <p className="text-sm mb-4">Unlock secret rates and early access to new rooms.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 flex-grow text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <button className="bg-white text-black px-4 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-extrabold text-white tracking-tight mb-2">LUMINA</h2>
          <p className="text-sm max-w-xs">The reception-less boutique experience. Seamless, private, and entirely yours.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">House Rules</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex items-center justify-between">
          <p className="text-xs">© 2026 Lumina Hotels.</p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
