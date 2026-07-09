import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import CartDrawer from './components/CartDrawer';

// Import Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About'; // <-- استيراد صفحة الـ About

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} /> {/* <-- إضافة مسار الـ About */}
          </Routes>
        </main>

        <Footer />
        <MobileNav />

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </Router>
  );
}