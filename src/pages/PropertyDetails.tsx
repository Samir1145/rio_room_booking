import { ArrowLeft, Share, Heart, Star, Briefcase, Utensils, Users, Home, Dumbbell, Map, Wifi, Wine } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import SiteFooter from '../components/SiteFooter';

export default function PropertyDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <AnnouncementBar />
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl docked w-full top-0 sticky z-50 no-border shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 p-2 rounded-full">
              <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            </button>
            <h1 className="font-headline font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-lg">The Concierge</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 p-2 rounded-full">
              <Share className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            </button>
            <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 p-2 rounded-full">
              <Heart className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pb-32">
        {/* Hero Section */}
        <section className="relative h-[442px] w-full overflow-hidden">
          <img alt="The Presidential Skyline Suite" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb5_N5KOQw2PTnQH9V5qsBHzFs5GTKSCheaqjYmEGoYbbqxnkGu7v23kbq_pH9f0n4lawsZlqi1Th-RC-Jmw_f-NmVWUot_vzNpsH7UMXqnCM5Q-iclygOw7PIS2pmX_LN_h9O6Psoj0h4ZEh8-UT4V8ivrgY5OJOD0wR84Z6lmePJrfmDg4aFumCeMqLN3r_97eJk49OB5J45EcA3J-LmduStq1MjQgK9uCnWdelJFSMzV60t-uoaL2z64zATTtQ2azFkXfulTITf" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Content Canvas */}
        <div className="px-6 -mt-12 relative z-10">
          {/* Title Card */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_12px_32px_rgba(34,34,34,0.06)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Premium Experience</span>
                <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline leading-tight">The Presidential Skyline Suite</h2>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-surface-container-high px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-current" />
                  <span className="text-sm font-bold">4.9</span>
                </div>
              </div>
            </div>
            <p className="text-secondary leading-relaxed mb-8 max-w-2xl">
              Experience unparalleled luxury with panoramic views of the city skyline. This masterfully designed space combines brutalist architecture with warm, artisanal textures.
            </p>

            {/* Room Gallery Horizontal Scroll */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-lg">Room Gallery</h3>
              <button className="text-primary text-sm font-bold">View all 24 photos</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
              <div className="min-w-[140px] h-[100px] rounded-2xl overflow-hidden flex-shrink-0">
                <img alt="Gallery 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWQAssnocZcHq-ax-i9kCqEbx7QtywzeX1KT_oN5FSP0WOQbmlEbJWBCkyqfmydgfnTx4qwbFGyXSa6_PispXqrSg3bYOaoS7k-MZocdlbII7MJ9IdiE-5cNNmECFdmcj455zO0pxPVoIvGrRB-ENGpiKZhjE-YwRX8IcYX-MMALYUCCpdz1Tl2gWeLs2Ok7v_7VhozfYp_9r2vWTEXFCA6d_lQAs_e2SRyqM9eZaMI9dARk2J8l4dVwMhR8a0Wp3XpeUIwY8PD2J" />
              </div>
              <div className="min-w-[140px] h-[100px] rounded-2xl overflow-hidden flex-shrink-0">
                <img alt="Gallery 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPYilnd12UmlVeWSFK81Nu6enoWndXx8Ofm7K630ykpzIwj6fMoa9RntjN5952eyeFR_Uj3j-ZEBRQu8hQ8yPx8N6SVOgCK9HEbxvp4fgAxQ53qUUKQXUWTJDiP_8_-95xEmj6F33J2aee3ca-FvoO-Afxc9Cv8i_22SizElU5hfIJd9xUpE3SMsJfZeX6eoCu4quWCZZRFg1UIrjPKT8lLHMcVFMMItAhK9M0zmk8flHR_FavjWcZt2ufjyIYgoomYZEyYhvptkts" />
              </div>
              <div className="min-w-[140px] h-[100px] rounded-2xl overflow-hidden flex-shrink-0">
                <img alt="Gallery 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-1PoYFtmoPd6Egp-klmqk3T2k_4D57pVG6cPVq4O1vT5rpmfHe9T6N8syixTMpbE5JOM-bxT6pxjIQB1vgMi88ctNz99Dm16uUvVhhO_gua8uyyVJAA9fpm9JEhK5biaaZsEFHwEjtvRk7P5dQzbdqJnz7X6tBH1xHmTJshSdvuQ6wIR90dmj2Sv8ToGm3QXczF4zIYHIvFXBOQEt_-tzbddAyyEUz7Ulc8TLqPpK51QxD-W7OxvCpVlOmVK1Bv8Xh6IliwdPDAKq" />
              </div>
              <div className="min-w-[140px] h-[100px] rounded-2xl overflow-hidden flex-shrink-0">
                <img alt="Gallery 4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3_V1aoprdgw1QaDuePZwKL9uPiOPeayfMdc9dDQMc-exzr5Ysqyq_wfcQ5tTapEP8XmopIglmji3SngFlQdy_hOOqR1-blOVuA-rHr14paXcensQVhXdr67qpoeqgfwtrWrsi6csdzQcIgG9snCot3pPdruTRMgyUPCVL80qY63TaK2P9IoISkOOgWWJJnnPgLE2khbLCevWd0nHJaYF5oTOv6KBTjkXnTFeYvhC8RjrhJ8cn567lVrMrx9MteebVAioG2iaEbj77" />
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="mt-8">
            <h3 className="font-headline text-xl font-bold mb-6 px-2">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Luggage Store</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Fine Dining</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">24/7 Butler</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Home className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Smart Home</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Elite Gym</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Map className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Local Tours</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Wifi className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Gigabit WiFi</span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Wine className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Craft Bar</span>
              </div>
            </div>
          </div>

          {/* Map/Location Preview */}
          <div className="mt-12 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-xl font-bold">Location</h3>
              <span className="text-sm font-semibold text-secondary">Vasant Kunj, New Delhi</span>
            </div>
            <div className="w-full h-48 rounded-[2rem] overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img alt="Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfO6-3tRXMM46R6wjOGvZzwzw8AML1wn78h5_D23QTJwwDFzGSBJ1Y2nch3K6AKHVNEHi001uqdXTTGAgYQtWuJae3ECypbbpS3zZf2Nu1WAaI8EyayXOxh40pkd8_dDzYDl48InVGpoRCx-4UY8WXBhgK_B3I5-H_L2ypWcn8dNmwqhsLZDlf-h8MDwC1fJZMCXBiuXNyS7-8buFeRbE_YhHofwIcCDsKJ4kfL3ChUkuRihJFdct_fw1FZ07KnzhRV4Vri32koAUh" />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Floating Booking Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-[60] px-6 pb-10 pt-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-on-surface">₹6,480</span>
              <span className="text-sm text-secondary font-medium">/ 2 nights</span>
            </div>
            <button className="text-xs font-bold text-primary underline text-left tracking-wide">View price breakdown</button>
          </div>
          <Link to="/book/1" className="bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(186,0,54,0.3)] active:scale-95 transition-all inline-block">
            Reserve
          </Link>
        </div>
      </footer>
    </div>
  );
}
