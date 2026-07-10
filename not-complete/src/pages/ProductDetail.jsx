import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// استقبلنا دالة addToCart من الـ App.jsx
export default function ProductDetail({ addToCart }) {
  const navigate = useNavigate();
  
  // States للتحكم في اختيارات المستخدم (السكربتات في React)
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('12oz');
  const [milk, setMilk] = useState('Oat Milk');

  const basePrice = 5.50;
  
  // حساب السعر النهائي بناءً على الحجم والكمية
  const calculatePrice = () => {
    let price = basePrice;
    if (size === '16oz') price += 1.00;
    return (price * quantity).toFixed(2);
  };

  // دالة زرار Add to Order
  const handleAddToOrder = () => {
    const newItem = {
      id: Date.now(), // ID عشوائي عشان الـ Key
      name: 'Signature Hearth Latte',
      price: calculatePrice(),
      size: size,
      milk: milk,
      quantity: quantity,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=400&auto=format&fit=crop'
    };
    
    addToCart(newItem); // ابعت المنتج للسلة
  };

  return (
    <div className="pt-24 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* زرار الرجوع */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span className="font-label-md">Back to Menu</span>
      </button>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* صورة المنتج */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-xl sticky top-24">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
              alt="Signature Hearth Latte"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* تفاصيل المنتج والخيارات */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
          <div>
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
              House Signature
            </span>
            <h1 className="font-headline-xl text-4xl md:text-5xl text-on-surface mb-4">
              Signature Hearth Latte
            </h1>
            <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
              Our award-winning blend pulled as a double ristretto, paired with perfectly textured micro-foam. Notes of wild honey, toasted hazelnut, and dark chocolate.
            </p>
          </div>

          <div className="h-px bg-outline-variant/30 w-full"></div>

          {/* اختيار الحجم */}
          <div className="space-y-4">
            <h3 className="font-label-md font-bold text-on-surface">Size</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setSize('8oz')}
                className={`flex-1 py-3 rounded-xl border font-label-md transition-all ${size === '8oz' ? 'border-primary bg-primary/10 text-primary' : 'border-outline/30 text-on-surface-variant hover:border-primary/50'}`}
              >
                8oz
              </button>
              <button 
                onClick={() => setSize('12oz')}
                className={`flex-1 py-3 rounded-xl border font-label-md transition-all ${size === '12oz' ? 'border-primary bg-primary/10 text-primary' : 'border-outline/30 text-on-surface-variant hover:border-primary/50'}`}
              >
                12oz
              </button>
              <button 
                onClick={() => setSize('16oz')}
                className={`flex-1 py-3 rounded-xl border font-label-md transition-all ${size === '16oz' ? 'border-primary bg-primary/10 text-primary' : 'border-outline/30 text-on-surface-variant hover:border-primary/50'}`}
              >
                16oz <span className="text-xs opacity-70">(+$1.00)</span>
              </button>
            </div>
          </div>

          {/* اختيار اللبن */}
          <div className="space-y-4">
            <h3 className="font-label-md font-bold text-on-surface">Milk Preference</h3>
            <select 
              value={milk} 
              onChange={(e) => setMilk(e.target.value)}
              className="w-full p-4 rounded-xl border border-outline/30 bg-surface focus:ring-2 focus:ring-primary/30 font-body-md"
            >
              <option value="Whole Milk">Whole Milk</option>
              <option value="Skim Milk">Skim Milk</option>
              <option value="Oat Milk">Oat Milk</option>
              <option value="Almond Milk">Almond Milk</option>
            </select>
          </div>

          {/* الكمية وإضافة للسلة */}
          <div className="flex items-center gap-6 pt-4 mt-auto">
            {/* أزرار الكمية */}
            <div className="flex items-center bg-surface-container-high rounded-full px-2 py-2 h-14">
              <button 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <span className="w-8 text-center font-bold text-lg">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>

            {/* زرار الإضافة */}
            <button 
              onClick={handleAddToOrder}
              className="flex-1 bg-primary text-on-primary h-14 rounded-full font-label-md text-lg hover:opacity-90 active:scale-95 transition-all shadow-md flex justify-between items-center px-8"
            >
              <span>Add to Order</span>
              <span>${calculatePrice()}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}