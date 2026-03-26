import { useState, useEffect } from 'react';
import { User, Settings, CreditCard, HelpCircle, LogOut, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { auth, db } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Create or update user in Firestore
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          role: 'user',
          createdAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  if (loading) {
    return (
      <div className="bg-background font-body text-on-surface min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-zinc-200 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-zinc-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background font-body text-on-surface min-h-screen pb-32">
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl w-full top-0 sticky z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors p-2 rounded-full active:scale-95 duration-200">
          <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
        </button>
        <h1 className="font-headline font-bold tracking-tight text-lg">Profile</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8 space-y-8">
        {/* User Info */}
        {user ? (
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-zinc-200 border-4 border-white shadow-sm">
              <img alt="Guest Profile" className="w-full h-full object-cover" src={user.photoURL || "https://ui-avatars.com/api/?name=" + (user.displayName || 'User')} referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-2xl font-headline font-extrabold tracking-tight">{user.displayName || 'Guest User'}</h2>
              <p className="text-secondary text-sm">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/30">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-headline font-extrabold tracking-tight mb-2">Welcome to Lumina</h2>
            <p className="text-secondary text-sm mb-6 max-w-xs">Sign in to manage your bookings, chat with our concierge, and access your digital key.</p>
            <button 
              onClick={handleLogin}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold tracking-wide active:scale-95 transition-transform shadow-md"
            >
              Sign in with Google
            </button>
          </div>
        )}

        {/* Menu Items */}
        {user && (
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
            <button className="w-full flex items-center gap-4 p-5 hover:bg-surface-container-low transition-colors text-left border-b border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">Personal Information</h3>
                <p className="text-xs text-secondary">Update your details and ID</p>
              </div>
            </button>
            
            <button className="w-full flex items-center gap-4 p-5 hover:bg-surface-container-low transition-colors text-left border-b border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">Payment Methods</h3>
                <p className="text-xs text-secondary">Manage your saved cards</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-5 hover:bg-surface-container-low transition-colors text-left border-b border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
                <Settings className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">Settings</h3>
                <p className="text-xs text-secondary">Notifications and preferences</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-5 hover:bg-surface-container-low transition-colors text-left border-b border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">Help & Support</h3>
                <p className="text-xs text-secondary">Get assistance with your stay</p>
              </div>
            </button>

            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 p-5 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors text-left text-red-600 dark:text-red-400"
            >
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                <LogOut className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">Log Out</h3>
              </div>
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
