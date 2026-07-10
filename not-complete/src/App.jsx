import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import CartDrawer from './components/CartDrawer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail'; // استيراد صفحة المنتج

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // 1. مصفوفة لتخزين المنتجات اللي بتنضاف للسلة
  const [cartItems, setCartItems] = useState([]);

  // 2. دالة لإضافة المنتج وفتح السلة تلقائياً
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartOpen(true); // افتح العربة أول ما يضيف المنتج
  };

  // 3. دالة لحذف منتج من السلة
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            
            {/* 4. مسار صفحة المنتج، وبنبعتلها دالة الإضافة */}
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          </Routes>
        </main>

        <Footer />
        <MobileNav />

        {/* 5. نمرر بيانات السلة للدرج (Drawer) */}
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
    </Router>
  );
}