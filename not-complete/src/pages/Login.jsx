import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', email);
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-[85vh] flex items-center justify-center bg-surface-container-low">
      <div className="bg-surface p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-md border border-outline-variant/20">
        <div className="text-center mb-8">
          <h1 className="font-headline-lg text-3xl text-primary font-bold mb-2">Welcome Back</h1>
          <p className="font-body-md text-on-surface-variant">Sign in to your Artisanal Hearth account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-label-md text-on-surface mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl border-none bg-surface-container focus:ring-2 focus:ring-primary/30 font-body-md text-on-surface placeholder:text-outline shadow-inner transition-all"
              placeholder="name@example.com"
              required 
            />
          </div>

          <div>
            <label className="block font-label-md text-on-surface mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl border-none bg-surface-container focus:ring-2 focus:ring-primary/30 font-body-md text-on-surface placeholder:text-outline shadow-inner transition-all"
              placeholder="••••••••"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-[16px] hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-outline-variant/30 flex-1"></div>
          <span className="text-sm font-label-md text-on-surface-variant">OR</span>
          <div className="h-px bg-outline-variant/30 flex-1"></div>
        </div>

        <button 
          type="button" 
          className="w-full flex items-center justify-center gap-3 bg-white border border-outline/30 text-on-surface py-3.5 rounded-xl font-label-md hover:bg-surface-container transition-colors shadow-sm active:scale-95"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-center mt-8 text-sm font-body-md text-on-surface-variant">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}