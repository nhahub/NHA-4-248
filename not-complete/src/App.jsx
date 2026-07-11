import { useState, useEffect } from 'react'; // ضفنا useEffect هنا
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import CartDrawer from './components/CartDrawer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetail from './pages/ProductDetail'; 

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // 1. تعديل هنا: بدل ما نبدأ بمصفوفة فاضية، هنخليه يبص الأول في الـ localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('artisanal_cart');
    // لو لقى بيانات محفوظة، يرجعها، لو ملقاش يرجع مصفوفة فاضية
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  // 2. إضافة useEffect: وظيفتها إنها تشتغل أوتوماتيك كل ما السلة (cartItems) تتغير
  // وبتاخد البيانات الجديدة تحفظها في الـ localStorage
  useEffect(() => {
    localStorage.setItem('artisanal_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartOpen(true); 
  };

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
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            
            {/* تم نقل مسارات تسجيل الدخول هنا داخل الـ Routes بشكل صحيح */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
        <MobileNav />

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