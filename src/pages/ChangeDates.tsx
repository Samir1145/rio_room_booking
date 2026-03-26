import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChangeDates() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 transition-colors p-2 rounded-full active:scale-95 duration-200">
            <X className="w-6 h-6 text-zinc-900" />
          </button>
          <h1 className="text-xl font-extrabold tracking-tight text-zinc-900">Change dates</h1>
        </div>
        <div className="hidden md:block">
          <button className="text-secondary font-bold hover:underline">Reset</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-8 pb-32">
        {/* Selection Summary */}
        <div className="mb-12">
          <div className="flex gap-4 items-center">
            <div className="flex-1 p-4 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_rgba(34,34,34,0.06)]">
              <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Check-in</p>
              <p className="text-on-background font-extrabold text-lg">Mar 12</p>
            </div>
            <div className="flex-1 p-4 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_rgba(34,34,34,0.06)]">
              <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Check-out</p>
              <p className="text-on-background font-extrabold text-lg">Mar 18</p>
            </div>
          </div>
        </div>

        {/* Calendar Month: March 2026 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 px-2">March 2026</h2>
          <div className="grid grid-cols-7 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-[10px] font-bold text-secondary-fixed-dim uppercase tracking-tighter">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-center gap-y-2">
            {/* Empty slots for March starting on Sunday */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(day => (
              <div key={`mar-${day}`} className="h-12 flex items-center justify-center text-zinc-900 font-medium">{day}</div>
            ))}
            
            {/* Selected Range Start */}
            <div className="h-12 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-on-background/5 left-1/2"></div>
              <div className="w-10 h-10 bg-on-background text-white rounded-full flex items-center justify-center font-bold z-10">12</div>
            </div>
            
            {/* Selected Range Middle */}
            {[13, 14, 15, 16, 17].map(day => (
              <div key={`mar-${day}`} className="h-12 flex items-center justify-center bg-on-background/5">
                <div className="h-12 flex items-center justify-center text-zinc-900 font-bold">{day}</div>
              </div>
            ))}
            
            {/* Selected Range End */}
            <div className="h-12 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-on-background/5 right-1/2"></div>
              <div className="w-10 h-10 bg-on-background text-white rounded-full flex items-center justify-center font-bold z-10">18</div>
            </div>
            
            {/* Rest of March */}
            {[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => (
              <div key={`mar-${day}`} className="h-12 flex items-center justify-center text-zinc-900 font-medium">{day}</div>
            ))}
          </div>
        </section>

        {/* Calendar Month: April 2026 */}
        <section>
          <h2 className="text-xl font-bold mb-6 px-2">April 2026</h2>
          <div className="grid grid-cols-7 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-[10px] font-bold text-secondary-fixed-dim uppercase tracking-tighter">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-center gap-y-2">
            {/* Padding for April start (Wed) */}
            <div className="h-12"></div>
            <div className="h-12"></div>
            <div className="h-12"></div>
            
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(day => (
              <div key={`apr-${day}`} className="h-12 flex items-center justify-center text-zinc-900 font-medium">{day}</div>
            ))}
            
            {[16, 17, 18].map(day => (
              <div key={`apr-${day}`} className="h-12 flex items-center justify-center text-zinc-900 font-medium text-zinc-300">{day}</div>
            ))}
            
            {[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(day => (
              <div key={`apr-${day}`} className="h-12 flex items-center justify-center text-zinc-900 font-medium">{day}</div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Booking Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl px-6 py-6 shadow-[0_-12px_32px_rgba(34,34,34,0.06)] flex items-center justify-between z-50">
        <button className="text-sm font-bold text-on-background underline underline-offset-4 active:opacity-50 transition-opacity">
          Clear dates
        </button>
        <button onClick={() => navigate(-1)} className="bg-on-background text-surface-container-lowest px-10 py-4 rounded-full font-extrabold tracking-tight hover:opacity-90 active:scale-95 duration-200 shadow-xl">
          Save
        </button>
      </footer>
    </div>
  );
}
