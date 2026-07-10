import { Link } from 'react-router-dom'; // <-- 1. ضفنا الاستيراد هنا

export default function CuratedToday() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="menu">
      <div className="max-w-container-max mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="font-headline-xl text-[48px] text-on-surface font-bold">
            Curated Today
          </h2>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-xl mx-auto">
            Our menu shifts with the seasons. Here are the highlights crafted
            by our chefs this morning.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          
          {/* Item 1: Large Featured Card */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-surface-container-highest shadow-md hover:shadow-xl transition-shadow">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6rrAXSqUZR3ehKOAJPtoPXi5jzlbMZMz2Pkkw2-utn4NSj9GGE_-m4E9PS50MSlTE-VDypA3XGK63No4pgsXzZTtS1Ge8QDtmjK-X7gifxmsAe6gUQGYJYt-_RYpCkHs1N2FhlzH5GQMaw65omnSaaj6hBzgJStYm37MWiPD00E3hc-Z_nHM4DtcbdsPRxk1mpthRfnJmBq9iDLTmnbYg_QAxVhcATncuYpNIvCFM_rGDJLPRjuRm7XFv_1A8vGcMaY2kZfWcOeha"
              alt="Hearth Sourdough Toast"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="bg-secondary-container/90 text-on-secondary-container px-3 py-1 rounded-md text-[12px] font-bold uppercase mb-3 inline-block">
                Signature
              </span>
              <h3 className="font-headline-lg text-[32px] font-semibold">
                Hearth Sourdough Toast
              </h3>
              <p className="font-body-md text-[16px] opacity-90 max-w-xs mt-2">
                Whipped goat cheese, fermented honey, and heirloom radish.
              </p>
            </div>
          </div>

          {/* Item 2: Medium Card */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-surface-container-highest shadow-md hover:shadow-xl transition-shadow h-64 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRGmwMlsCnpXCHymB0d7Ljvphu1o8Ue7DHIPqwciQ2WUPvUNN5ujHGRWLntYCRCdb8dr1yHZsi7NTNQgigz-38PV6uVHjOOXAd7Cgwrg2Y-25G7yMUWpug1bNZT1wxcR1mi3dZ8R0loBB29kdCvRqgkQx2carGJZQEWlwZK4DOMvk0IMhDAwgpN_SmhPyVWNOqEI4bjhjg6PUlzADJTPxcpUXMZHCrmuQ0VTUf7H5zSThTZGrLZF4RWqUsKevV4H_IY_uPiX3ZDBjk"
              alt="Small Batch Roasts"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-headline-md text-[24px] font-semibold">
                Small Batch Roasts
              </h3>
              <p className="font-label-md text-[14px] opacity-90">$5.50</p>
            </div>
          </div>

          {/* Item 3: Small Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-surface-container-highest shadow-md hover:shadow-xl transition-shadow h-64 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABMHifyRvX3FXVO4-IC16Airx2ObQvXOCF7VHEmTwVhDOtCk-YGlBWXSHfl7ErOygZGCWOyiV3OV2DH9wO_Q5q24yH0HRnCXP17_BNy4ApTwhKIEe-AIBIFRgrcOTGNn2CZEdrVKpHKVL5Kc0-L_hzWHYdARUUz7xD5t-seuAtmXrvLeuvcE8HgWiRPh9RMNaThqmyZoqt5M1MWrk4ahCFD0nyuBkimnAgC1K6rBLv-iZn5aCmYMYfqr1O4YBBpS1-RD1ehzRkgYfE"
              alt="Seasonal Bowl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-label-md text-[14px] font-bold uppercase">
                Seasonal Bowl
              </h3>
            </div>
          </div>

          {/* Item 4: Call to Action Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-surface-container-highest shadow-md hover:shadow-xl transition-shadow h-64 md:h-auto">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary p-8 text-center text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-4">
                restaurant_menu
              </span>
              <h3 className="font-headline-md text-[24px] font-semibold mb-2">
                Full Menu
              </h3>
              <p className="font-body-md text-[16px] opacity-80 mb-6">
                Discover our complete selection of savory and sweet.
              </p>
              
              {/* 2. التعديل هنا: حولنا الزرار لـ Link */}
              <Link 
                to="/menu" 
                className="inline-block border border-white/40 px-6 py-2 rounded-full font-label-md text-[14px] hover:bg-white hover:text-primary transition-all"
              >
                Explore
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}