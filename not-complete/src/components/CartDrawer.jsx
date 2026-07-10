export default function CartDrawer({ isOpen, onClose, cartItems = [], removeFromCart }) {
  
  // حساب إجمالي السعر
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 z-[60] transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] transform transition-transform duration-300 shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/30 bg-surface-container-low">
          <h2 className="font-headline-md text-2xl text-primary font-bold">Cart</h2>
          <button onClick={onClose} className="text-on-surface-variant hover:text-error transition-colors p-2 active:scale-90">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar flex flex-col gap-4">
          
          {/* لو السلة فاضية */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-outline opacity-70">
              <span className="material-symbols-outlined text-6xl mb-4">production_quantity_limits</span>
              <p className="font-body-md text-lg">Your cart is empty.</p>
            </div>
          ) : (
            /* عرض المنتجات الحقيقية المضافة */
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-surface-container p-4 rounded-xl shadow-sm border border-outline-variant/20">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-label-md font-bold text-on-surface">{item.name}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{item.size}, {item.milk}</p>
                  <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold text-primary">${item.price}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-error/80 hover:text-error transition-colors p-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-body-md text-on-surface-variant text-lg">Total:</span>
            <span className="font-headline-md text-2xl font-bold text-primary">${total}</span>
          </div>
          <button 
            disabled={cartItems.length === 0}
            className={`w-full py-4 rounded-xl font-label-md text-lg transition-all shadow-md flex justify-center items-center gap-2 ${
              cartItems.length === 0 ? 'bg-outline/20 text-outline cursor-not-allowed' : 'bg-primary text-on-primary hover:opacity-90 active:scale-95'
            }`}
          >
            Checkout
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </>
  );
}