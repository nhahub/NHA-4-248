import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 1. حالة جديدة لفتح وقفل قائمة الموبايل
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-md' 
          : 'bg-surface shadow-sm'                     
      }`}
      id="top-nav"
    >
      <div className="flex items-center gap-4">
        {/* 2. زرار الهامبرجر مربوط بتغيير الحالة */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary hover:opacity-80 transition-opacity md:hidden p-1 active:scale-95"
        >
          {/* تغيير الأيقونة بناءً على حالة القائمة */}
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
        
        <span className="font-headline-md text-2xl text-primary font-bold tracking-tight">
          Artisanal Hearth
        </span>
      </div>

      {/* روابط الشاشات الكبيرة */}
      <div className="hidden md:flex items-center gap-8">
        <Link className="font-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
        <Link className="font-label-md text-on-surface-variant hover:text-primary transition-colors" to="/menu">Menu</Link>
        <Link className="font-label-md text-on-surface-variant hover:text-primary transition-colors" to="/locations">Locations</Link>
        <Link className="font-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      </div>

      {/* أيقونة السلة */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenCart} 
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>

      {/* 3. القائمة المنسدلة للموبايل (Dropdown) */}
      <div 
        className={`absolute top-16 left-0 w-full bg-surface-container-low border-b border-outline/20 shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'max-h-72 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-6">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline-md text-xl text-on-surface hover:text-primary transition-colors" to="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline-md text-xl text-on-surface hover:text-primary transition-colors" to="/menu">Menu</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline-md text-xl text-on-surface hover:text-primary transition-colors" to="/locations">Locations</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline-md text-xl text-on-surface hover:text-primary transition-colors" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}