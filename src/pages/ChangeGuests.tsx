import { X, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChangeGuests() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center p-0 sm:p-4">
      {/* Modal Container */}
      <div className="w-full max-w-lg bg-surface-container-lowest sm:rounded-2xl min-h-screen sm:min-h-0 sm:shadow-[0_12px_32px_rgba(34,34,34,0.06)] overflow-hidden flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl flex justify-between items-center w-full px-6 py-6 sticky top-0 z-50">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100 transition-colors active:scale-95 duration-200">
            <X className="w-6 h-6 text-zinc-900" />
          </button>
          <h1 className="font-headline font-bold tracking-tight text-zinc-900 text-lg">Change guests</h1>
          <div className="w-10"></div>
        </header>

        {/* Content Area */}
        <main className="flex-grow px-8 pt-6 pb-24">
          {/* Information Text */}
          <div className="mb-12">
            <p className="text-secondary font-body leading-relaxed">
              This property has a maximum occupancy of <span className="text-on-surface font-bold">4 guests</span>. Infants don't count toward the guest total.
            </p>
          </div>

          {/* Stepper Rows */}
          <div className="space-y-10">
            {/* Adults Row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline font-bold text-lg text-on-surface">Adults</span>
                <span className="font-label text-sm text-secondary">Age 13+</span>
              </div>
              <div className="flex items-center gap-5">
                <button className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 text-secondary">
                  <Minus className="w-5 h-5" />
                </button>
                <span className="font-headline font-extrabold text-xl w-6 text-center">2</span>
                <button className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 text-secondary">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Children Row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline font-bold text-lg text-on-surface">Children</span>
                <span className="font-label text-sm text-secondary">Ages 2–12</span>
              </div>
              <div className="flex items-center gap-5">
                <button className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 text-secondary">
                  <Minus className="w-5 h-5" />
                </button>
                <span className="font-headline font-extrabold text-xl w-6 text-center">0</span>
                <button className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 text-secondary">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Infants Row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline font-bold text-lg text-on-surface">Infants</span>
                <span className="font-label text-sm text-secondary">Under 2</span>
              </div>
              <div className="flex items-center gap-5">
                <button className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 text-secondary">
                  <Minus className="w-5 h-5" />
                </button>
                <span className="font-headline font-extrabold text-xl w-6 text-center">0</span>
                <button className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 text-secondary">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Visual Context Image */}
          <div className="mt-16 relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container-low">
              <img alt="Refining your stay" className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_iPdj3oULGt-t8CRz9pz8-7sfD48EvTUn0dzPQ7h6u8OWvVvSMcf_jPjpuZgFu__I-ciACQrjs-Ozo_c8eFq0trxXJbxMqNP_IJ2n4jbE8lhE5Mxd6aLFXuHB_OVsddsBt6oXjJ41WmzSTCaLxn_kgWYpFQnXHVYtNMebnp7wvn65NbmGvbahLDUrsm2KGaPC8h-2vvv7PT8YNwbFn7Duvw_Kq-VCXbAjFf8skHTfObD7esWWkanJGPk5mPU_lUN1JZJXLy3ShqDl" />
            </div>
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-surface-container-lowest/80 to-transparent">
              <p className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Refining your stay</p>
            </div>
          </div>
        </main>

        {/* Footer Actions */}
        <footer className="sticky bottom-0 bg-white/90 backdrop-blur-2xl px-8 py-6 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-4">
          <button onClick={() => navigate(-1)} className="text-on-surface font-headline font-bold text-sm underline decoration-2 underline-offset-4 hover:text-primary transition-colors active:opacity-70">
            Cancel
          </button>
          <button onClick={() => navigate(-1)} className="w-full sm:w-auto px-10 py-4 bg-on-surface text-surface font-headline font-bold rounded-full hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-zinc-200">
            Save
          </button>
        </footer>
      </div>
    </div>
  );
}
