import { ArrowLeft, MoreVertical, Heart, Search, Calendar, User, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import SiteFooter from '../components/SiteFooter';
import BottomNav from '../components/BottomNav';

export default function Gallery() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <AnnouncementBar />
      {/* Top Navigation Anchor */}
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl docked w-full top-0 sticky z-50 no-border shadow-[0_12px_32px_rgba(34,34,34,0.06)] dark:shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200">
            <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
          </button>
          <h1 className="font-headline font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-lg">The Gallery</h1>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200">
            <MoreVertical className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 pb-32">
        {/* Editorial Header Section */}
        <div className="mb-12">
          <span className="font-label text-secondary text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">Curated Spaces</span>
          <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-4">Master Suites</h2>
          <p className="font-body text-secondary max-w-xl leading-relaxed">
            Explore our signature collection of architectural marvels, where every room is a canvas of light and sophisticated texture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="editorial-grid">
          {/* Room Card 1 (Large Featured) */}
          <Link to="/property/1" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(34,34,34,0.06)] block">
            <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
              <img alt="The Presidential Atrium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7AMNzhLqEVF9oiKpPVenRgAyApJrXKlHVfw3W7aEjCwHsSUvlmFARsYJ9buocsYp2DKV2zDDvnUl4c2iYEWWAWB4-fec8ws_2MmUKR08FTagcvUDzf6i-e7wgCSl_m4YW46RXAPZ5MoSMiLkuYZdM6XYU-jz5KD_1qVm0ZrDEiDyiIencZrodoQVpofs37j2lPM3bcoJEgwDn20bpoGb475JxMf8sFR_MqoHwVlcAxSgCRGV-Vw6QqPXDaEha0Id1s-YkISErntfB" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-on-surface">Room #101</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all active:scale-90" onClick={(e) => e.preventDefault()}>
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-xs font-medium mb-1">Floor 01</p>
              <h3 className="text-white text-2xl font-bold tracking-tight">The Presidential Atrium</h3>
            </div>
          </Link>

          {/* Room Card 2 */}
          <Link to="/property/2" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(34,34,34,0.06)] block">
            <div className="aspect-square overflow-hidden">
              <img alt="Sky Bath Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2s6wyUoZISdQ86C53Hnt07ytY6CdpTmu2GIuekdac01igasDA7PwfZImnOKHC4FMN62Lik5xHchEtoEXRNG1_4OU9BM5ASN4sVw-tURxowhr_25ctowqETGqu3W1FXhAjnc8fyL1Ns31x4UXi7_PtvDa7Z1S-FF-knNve-y2q_eT6uYFhvC1KbS37c0Z-SFsxcZYGFz8lnPF_HyFEdHyQ4j_3Ho82F4S8zbpCS2nciyGI9Cb9F80jm3BEUc9fVoGY2Xu_XN8xz8V3" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-on-surface">Room #101</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all active:scale-90" onClick={(e) => e.preventDefault()}>
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-bold tracking-tight">Sky Bath Suite</h3>
            </div>
          </Link>

          {/* Room Card 3 */}
          <Link to="/property/3" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(34,34,34,0.06)] block">
            <div className="aspect-square overflow-hidden">
              <img alt="Velvet Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYeevjoMSF_BizATC_49Nb2LuQxW74nvFgdlS6T8aLI7aeIf3rd-cjONOYFvxgUbQWZcR75loRrG4ZaDGeN7riMUuydDi7yv4BLIPWC2ymuqVhSrfjVtuLet9h7HvADHXCuCjHeMaJ0eeQJG0lmQ4k_9Rb8nxHya0xUKT8tpFJgE5IRrT39FRCwS8yxJCrpsj5uSHCS7gMpwZ2Wmav52tOSbRE0oCNx1eIO4kl0tlwpfhIhfbSlyTXsxWPpuNyOu-IyR1ccXyowrL0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-on-surface">Room #101</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all active:scale-90" onClick={(e) => e.preventDefault()}>
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-bold tracking-tight">Velvet Lounge</h3>
            </div>
          </Link>

          {/* Room Card 4 */}
          <Link to="/property/4" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(34,34,34,0.06)] block">
            <div className="aspect-square overflow-hidden">
              <img alt="Ocean Breeze" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_yNsUjPqRPhLmgpdgUVeYqJJJ_kT1GJwOHfe2Rd00TNLZrVatc5M_X9rW9DwAf3FaTqIx6ecvEjkyj8DHR4NcfgkC7Y9AWve9jgCmgw1bzmaF6JffFzwamje8TPD596ZsfCPmsoRHs3zggGx1y58zl1qCssqqjE_6TPVuqUzIXyBwuzr5dK0-Ykss0hcySEL_-Vjg4rQ0_tPxfn2uiwaEEZIYfk9lGZ2LASWi0qVTh06J3aEMnn-hyuDmrCf0UGe2yDttmW_lpYcl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-on-surface">Room #101</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all active:scale-90" onClick={(e) => e.preventDefault()}>
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-bold tracking-tight">Ocean Breeze</h3>
            </div>
          </Link>

          {/* Room Card 5 */}
          <Link to="/property/5" className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(34,34,34,0.06)] block">
            <div className="aspect-square overflow-hidden">
              <img alt="The Library Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMDLkf6iRsPTEns9mQmKzC-bqm-ju9eYO-206H2PoW5qYJrKytV0m6eVJSwT7h_QZ03rSya2b7iwbjvjiLN6_DccknWUPj9JU5AO0RUyRFWiz2BA6hH5dQV0NvVIyMLoyMEEV4H5oKG3mCSegIygrht7CqUj3J3QyP0hsPeO0eHue9Tf7u5ZKOy-AMOELXEVsPDxBgKDm1PRGDsj6Bd_h5GKGMv8iHPahZv85x5oxLSD4pcFRWwS5GJ2RFpGB3Ny--740U4M3nOP5h" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-on-surface">Room #101</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all active:scale-90" onClick={(e) => e.preventDefault()}>
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-bold tracking-tight">The Library Suite</h3>
            </div>
          </Link>
        </div>
      </main>

      <SiteFooter />

      <BottomNav />

      {/* Floating Filter Toggle */}
      <button className="fixed bottom-24 right-6 bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(186,0,54,0.3)] z-40 active:scale-95 transition-transform">
        <SlidersHorizontal className="w-6 h-6" />
      </button>
    </div>
  );
}
