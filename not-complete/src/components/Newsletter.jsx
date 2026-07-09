import { useState, useMemo } from 'react';

export default function Newsletter() {
  // State for form inputs and status
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  // Generate particles data only once using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
  }, []);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    
    const emailValue = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!emailRegex.test(emailValue)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Set loading state
    setStatus('loading');
    setMessage('');

    // Simulate API call with setTimeout
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to the Hearth! Your email has been added.');
      setEmail(''); // Clear input
    }, 1500);
  };

  return (
    <section className="relative py-24 px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-container-high" id="newsletter">
      <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
        <span className="material-symbols-outlined text-secondary text-5xl">mail</span>
        <h2 className="font-headline-xl text-[48px] text-on-surface font-bold">
          The Hearth Letters
        </h2>
        <p className="font-body-lg text-[18px] text-on-surface-variant">
          Weekly reflections on slow living, exclusive recipes from our
          kitchen, and early access to our community dinners.
        </p>
        
        {/* Newsletter Form */}
        {/* Newsletter Form */}
<form onSubmit={handleSubmit} noValidate className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto pt-4 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-6 py-4 rounded-xl border-none bg-surface-container focus:ring-2 focus:ring-primary/30 font-body-md text-on-surface placeholder:text-outline shadow-inner transition-all"
            placeholder="Your email address"
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-[14px] hover:opacity-90 active:scale-95 transition-all shadow-lg min-w-[160px] flex justify-center items-center group ${
              status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {status === 'loading' ? (
              <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </form>
        
        {/* Feedback Message */}
        <p className={`font-label-md text-[14px] mt-3 transition-opacity duration-300 h-5 text-center ${
          status === 'idle' || status === 'loading' ? 'opacity-0' : 'opacity-100'
        } ${status === 'error' ? 'text-error' : 'text-primary'}`}>
          {message}
        </p>
        
        <p className="text-[12px] font-label-md text-outline">
          By subscribing, you agree to our privacy policy. We promise never to
          clutter your morning.
        </p>
      </div>

      {/* Particles Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" id="particle-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-secondary opacity-30"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s ease-in-out infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Keyframes for the particles float animation */}
      <style>{`
        @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0.1; }
            50% { opacity: 0.3; }
            100% { transform: translateY(-50px) translateX(20px); opacity: 0.1; }
        }
      `}</style>
    </section>
  );
}