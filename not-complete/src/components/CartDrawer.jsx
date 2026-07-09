export default function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* 1. الخلفية المظللة (Overlay) - تم زيادة التعتيم لـ bg-black/70 */}
      <div
        className={`fixed inset-0 bg-black/70 z-[60] transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      ></div>

      {/* 2. العربة نفسها (Cart Panel) - تم تغيير الخلفية لـ bg-white لتكون صلبة تماماً */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] transform transition-transform duration-300 shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/30 bg-surface-container-low">
          <h2 className="font-headline-md text-2xl text-primary font-bold">
            Cart
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-error transition-colors p-2 active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar flex flex-col gap-4">
          
          {/* Empty Cart State */}
          <div className="flex flex-col items-center justify-center h-full text-outline opacity-70">
            <span className="material-symbols-outlined text-6xl mb-4">
              production_quantity_limits
            </span>
            <p className="font-body-md text-lg">Your shopping cart is currently empty.</p>
          </div>

          {/* Example Cart Item */}
          <div className="hidden flex-col gap-4">
            <div className="flex gap-4 items-center bg-surface-container p-4 rounded-xl shadow-sm border border-outline-variant/20">
              <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=200&auto=format&fit=crop"
                alt="Latte"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-label-md font-bold text-on-surface">
                  The Hearthside Latte
                </h4>
                <p className="text-sm text-on-surface-variant">12oz, Oat Milk</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold text-primary">$5.50</span>
                  <div className="flex items-center bg-surface-container-high rounded-full px-2 py-1 ml-auto">
                    <button className="text-secondary hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="px-3 text-sm font-medium">1</span>
                    <button className="text-secondary hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (Total and Checkout) */}
        <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-body-md text-on-surface-variant text-lg">Total:</span>
            <span className="font-headline-md text-2xl font-bold text-primary">$0.00</span>
          </div>
          <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-lg hover:opacity-90 active:scale-95 transition-all shadow-md flex justify-center items-center gap-2">
            Complete Order
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </>
  );
}