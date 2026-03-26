import { Home, Calendar, MessageSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Bookings', path: '/stay/active', icon: Calendar },
    { name: 'Chat', path: '/chat', icon: MessageSquare },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
      {navItems.map((item) => {
        const isActive = path === item.path || (item.path === '/stay/active' && path.startsWith('/stay'));
        const Icon = item.icon;
        
        return (
          <Link 
            key={item.name}
            to={item.path} 
            className={`flex flex-col items-center justify-center transition-all active:opacity-70 cursor-pointer ${
              isActive 
                ? 'text-[#ba0036] dark:text-[#e21e4a] scale-110' 
                : 'text-zinc-400 dark:text-zinc-600 hover:text-[#ba0036] dark:hover:text-[#e21e4a]'
            }`}
          >
            <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-current' : ''}`} />
            <span className="font-headline text-[10px] font-semibold tracking-wide uppercase">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
