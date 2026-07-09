export default function Story() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface" id="story">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* Text Content Column */}
        <div className="md:col-span-5 space-y-8">
          <span className="text-secondary font-label-md text-[14px] tracking-widest uppercase">
            Since 2014
          </span>
          <h2 className="font-headline-xl text-[48px] text-on-surface font-bold">
            The Soul of the Hearth
          </h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant italic">
            "We believe the best conversations happen over a shared table and
            a perfectly pulled shot of espresso."
          </p>
          <p className="font-body-md text-[16px] text-on-surface-variant">
            Our journey began in a small corner garage with a single espresso
            machine and a passion for locally-sourced ingredients. Today,
            Artisanal Hearth serves as a living room for the community, where
            every grain of flour is stone-ground and every bean is roasted in
            small batches.
          </p>
          <div className="pt-4">
            <a
              className="text-primary font-bold inline-flex items-center gap-2 group transition-all"
              href="#"
            >
              Read Our Full Story
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:col-span-7 relative">
          <div className="aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden shadow-2xl relative">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1TIWCV21anigMPkk5M7Xyaj7E_OIsHVJmNnIBary69_XRUWGcvjwryiCMp9TVDgYhUyapGgxTJ9010raWF8MquYsdTTPEA94zQiIZm1yUnB0uq677EavUgPKf6Bv_npqzLtVSxsgTAO7yj_pwz0FdE9rg-7PaC7o9ulXIjcb1obq90QavtuhNBz8Z7WU7VicGTsMAUL0SMxy_3w9Cz8TrbvVtOU8_JrC_zHQ6jI6o99beH4hsKdpyLj-HEo9_w564e-ZERNHy-_V3"
              alt="Artisan baker"
            />
            {/* Floating Quote Card (Hidden on mobile) */}
            <div className="absolute -bottom-8 -left-8 bg-secondary-container p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
              <p className="font-label-md text-[14px] text-on-secondary-container font-bold italic">
                "Craft is a conversation between the hand and the heart."
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}