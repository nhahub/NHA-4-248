export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      {/* Background Image Container with Zoom Effect */}
      <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100">
        <div
          className="w-full h-full bg-cover bg-center opacity-90 brightness-[0.85]"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLHyZvcF1xdEHeVN7BV5ulnbw7W0bp5oTG78GPvi5-1V5CnfpxgWx8auTqHQbprF9necHM4KBaUiRsYVqNF0jOVcKwUAO4Rk3ei6tk312QrKzihkbjgIf1CqO_Zu8lPkXuf9YoYvGDipX3WiYkeLxreV2nUM9gQqxppGyDOsRlHMWTEiDB8q9YVMaarXToXacWjeuOMsMWYAB4qXAAqnaXCSS3uqqfqmhaf1sjcA2GiFyRrqQbgejmc9zKeqHrAz2Sf50AdufaGFOE')",
          }}
        ></div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary-container/80 backdrop-blur-sm text-on-secondary-container font-label-md text-[14px] mb-4 shadow-sm">
          Neighborhood Sanctuary
        </div>
        
        <h1 className="font-headline-xl text-[48px] md:text-[64px] text-white text-shadow-subtle leading-tight font-bold">
          Crafted Moments, <br />
          <span className="italic font-normal">Cultivated Connection.</span>
        </h1>
        
        <p className="font-body-lg text-[18px] text-white/90 max-w-2xl mx-auto drop-shadow-md">
          Experience the slow art of brewing and the warmth of a neighborhood
          table. Artisanal Hearth is more than a bistro; it's where time stands still.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-[14px] hover:opacity-90 transition-all shadow-lg active:scale-95">
            View Today's Specials
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-label-md text-[14px] hover:bg-white/20 transition-all shadow-lg active:scale-95">
            Our Process
          </button>
        </div>
      </div>
    </section>
  );
}