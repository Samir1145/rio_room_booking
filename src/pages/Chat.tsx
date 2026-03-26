import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, Bot, User as UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { auth, db } from '../firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface ChatMessage {
  id: string;
  uid: string;
  role: 'user' | 'model';
  text: string;
  createdAt: any;
}

export default function Chat() {
  const navigate = useNavigate();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch chat history from Firestore
  useEffect(() => {
    if (!user) {
      setMessages([]);
      return;
    }

    const q = query(
      collection(db, 'chats'),
      where('uid', '==', user.uid),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: ChatMessage[] = [];
      snapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() } as ChatMessage);
      });
      setMessages(msgs);
      scrollToBottom();
    }, (error) => {
      console.error("Error fetching chats:", error);
    });

    return () => unsubscribe();
  }, [user]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !user || isLoading) return;

    const userText = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      // 1. Save user message to Firestore
      await addDoc(collection(db, 'chats'), {
        uid: user.uid,
        role: 'user',
        text: userText,
        createdAt: serverTimestamp()
      });

      // 2. Prepare history for Gemini
      const history = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      // 3. Call Gemini
      const contents = history.map(h => ({
        role: h.role,
        parts: h.parts
      }));
      
      contents.push({
        role: 'user',
        parts: [{ text: userText }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents,
        config: {
          systemInstruction: "You are a helpful, polite, and knowledgeable concierge for Lumina Boutique Hotel. Assist guests with their stay, local recommendations, and any issues they might have. Keep responses concise and friendly."
        }
      });

      const modelText = response.text;

      if (modelText) {
        // 4. Save model response to Firestore
        await addDoc(collection(db, 'chats'), {
          uid: user.uid,
          role: 'model',
          text: modelText,
          createdAt: serverTimestamp()
        });
      }

    } catch (error) {
      console.error("Error sending message:", error);
      // Fallback error message
      await addDoc(collection(db, 'chats'), {
        uid: user.uid,
        role: 'model',
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact the front desk.",
        createdAt: serverTimestamp()
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-background font-body text-on-surface min-h-screen pb-32 flex flex-col">
        <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl w-full top-0 sticky z-50 px-6 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors p-2 rounded-full active:scale-95 duration-200">
            <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
          </button>
          <h1 className="font-headline font-bold tracking-tight text-lg">Concierge Chat</h1>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <Bot className="w-16 h-16 text-primary mb-4 opacity-50" />
          <h2 className="text-xl font-bold mb-2">Sign in to Chat</h2>
          <p className="text-secondary mb-6">Please sign in from your profile to chat with our digital concierge.</p>
          <button 
            onClick={() => navigate('/profile')}
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold"
          >
            Go to Profile
          </button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl w-full top-0 sticky z-50 px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors p-2 rounded-full active:scale-95 duration-200">
          <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
        </button>
        <div>
          <h1 className="font-headline font-bold tracking-tight text-lg leading-tight">Lumina Concierge</h1>
          <p className="text-xs text-secondary flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online
          </p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        {messages.length === 0 && (
          <div className="text-center py-10 text-secondary">
            <Bot className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>Welcome to Lumina! How can I assist you today?</p>
          </div>
        )}

        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-primary text-on-primary rounded-tr-sm' 
                : 'bg-surface-container-low text-on-surface rounded-tl-sm'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface-container-low rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <div className="fixed bottom-[88px] left-0 w-full bg-surface p-4 border-t border-outline-variant/30 z-40">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask for recommendations, extra towels..."
            className="flex-1 bg-surface-container-lowest border border-outline-variant/50 rounded-full px-6 py-3 focus:outline-none focus:border-primary transition-colors"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-50 active:scale-95 transition-all"
          >
            <Send className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
