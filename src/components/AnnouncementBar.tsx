import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-zinc-950 text-zinc-100 px-4 py-2.5 text-center text-[10px] sm:text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 relative z-50">
      <Sparkles className="w-3 h-3 text-amber-400" />
      <span>Members get complimentary late checkout & airport transfers</span>
    </div>
  );
}
