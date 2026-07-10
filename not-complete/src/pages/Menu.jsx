import { Link } from 'react-router-dom';
export default function Menu({ addToCart }) {
  const handleAddSpecialToOrder = () => {
    const specialItem = {
      id: Date.now(), 
      name: 'Honeyed Lavender Macchiato',
      price: '6.75',
      size: 'Standard',
      milk: 'Oat Milk',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };
    
    addToCart(specialItem); 
  };
  return (
    <div className="pt-16 pb-20 px-6 md:px-16 max-w-[1200px] mx-auto">
      {/* Menu Intro Section */}
      <section className="mb-16">
        <h2 className="font-headline-xl text-5xl md:text-6xl text-on-surface mb-6">
          Our Menu
        </h2>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A seasonal selection of handcrafted beverages and heirloom recipes,
          prepared daily with ingredients from our neighborhood partners.
        </p>
      </section>

      {/* Featured Item Section */}
      <section className="mb-24">
        <div className="relative overflow-hidden rounded-2xl bg-surface-container p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-[0_16px_32px_rgba(74,58,42,0.04)]">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-secondary text-on-secondary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              Seasonal Special
            </span>
            <h3 className="font-headline-lg text-4xl italic text-on-surface">
              Honeyed Lavender Macchiato
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
              Locally sourced wild lavender infused with wildflower honey,
              layered over our signature house espresso and silky steamed oat
              milk. Finished with a dusting of dried botanicals.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <span className="text-2xl font-headline-md text-primary font-semibold">
                $6.75
              </span>
              <button 
  onClick={handleAddSpecialToOrder} 
  className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-md text-sm hover:opacity-90 transition-all shadow-sm active:scale-95"
>
  Add to Order
</button>
            </div>
          </div>
          <div className="flex-1 w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Honeyed Lavender Macchiato"
            />
          </div>
        </div>
      </section>

      {/* Menu Categories and Items */}
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 md:sticky md:top-24">
          <nav className="flex flex-col gap-2">
            <button className="text-left py-3 px-5 rounded-xl bg-secondary-container text-on-secondary-container font-semibold transition-all duration-200 flex items-center justify-between group">
              <span className="font-label-md text-sm tracking-wide">Coffee & Tea</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </nav>
          
          {/* Morning Note Box */}
          <div className="hidden md:block mt-10 p-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl shadow-sm">
            <h4 className="font-label-md text-sm text-primary font-semibold mb-2">
              Morning Note
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              "All our breads are fermented for 48 hours for the perfect crumb."
            </p>
          </div>
        </aside>

        {/* Menu Items List */}
        <div className="flex-1 space-y-28">
          
          {/* Coffee Section */}
          <section id="coffee">
            <div className="flex items-baseline justify-between mb-10 border-b border-outline-variant/30 pb-4">
              <h3 className="font-headline-lg text-3xl text-on-surface">Coffee & Tea</h3>
              <span className="text-on-surface-variant font-label-md text-sm">Signature Blends</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {/* Item */}
              <Link to="/product/house-cappuccino" className="group cursor-pointer block">
                <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="House Cappuccino"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-surface-bright/90 text-secondary px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">Vegan Opt.</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline-md text-xl text-on-surface">House Cappuccino</h4>
                  <span className="text-primary font-semibold">$4.50</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed pr-2">
                  Double shot of Hearth Blend espresso with micro-foamed milk.
                </p>
              </Link>
              {/* Item */}
              <Link to="/product/house-cappuccino" className="group cursor-pointer block">
                <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://i.pinimg.com/1200x/7b/55/2c/7b552ca3aa731c6752b644111eed3253.jpg"
                    alt="Ceremonial Matcha"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline-md text-xl text-on-surface">Ceremonial Matcha</h4>
                  <span className="text-primary font-semibold">$5.25</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed pr-2">
                  Stone-ground Uji matcha whisked with your choice of artisanal milk.
                </p>
              </Link>
            </div>
          </section>

          {/* Pastries Section */}
          <section id="pastries">
            <div className="flex items-baseline justify-between mb-10 border-b border-outline-variant/30 pb-4">
              <h3 className="font-headline-lg text-3xl text-on-surface">Pastries</h3>
              <span className="text-on-surface-variant font-label-md text-sm">Fresh from the Hearth</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {/* Item */}
              <Link to="/product/house-cappuccino" className="group cursor-pointer block">
                <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://i.pinimg.com/736x/7a/0e/d3/7a0ed3f46b8c708c1c7cda862f1a47f0.jpg"
                    alt="Sourdough Croissant"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-surface-bright/90 text-secondary px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">Best Seller</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline-md text-xl text-on-surface">Sourdough Croissant</h4>
                  <span className="text-primary font-semibold">$4.25</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed pr-2">
                  Our 3-day fermented pastry with European cultured butter.
                </p>
              </Link>
            </div>
            {/* Breakfast Bowls Section */}
          <section id="breakfast">
            <div className="flex items-baseline justify-between mb-10 border-b border-outline-variant/30 pb-4">
              <h3 className="font-headline-lg text-3xl text-on-surface">
                Breakfast Bowls
              </h3>
              <span className="text-on-surface-variant font-label-md text-sm">
                Served until 12pm
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              <Link to="/product/house-cappuccino" className="group cursor-pointer block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Seasonal Berry Bowl"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
                      Gluten Free
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline-md text-xl text-on-surface">
                    Seasonal Berry Bowl
                  </h4>
                  <span className="text-primary font-semibold">$12.00</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed pr-2">
                  House-made granola, whipped local yogurt, and market berries.
                </p>
              </Link>
            </div>
          </section>
          </section>

        </div>
      </div>
    </div>
  );
}