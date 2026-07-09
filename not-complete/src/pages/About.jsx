import Newsletter from '../components/Newsletter'; // <-- استيراد مكون النشرة البريدية

export default function About() {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 scale-105 transition-transform duration-[5000ms] ease-out hover:scale-100 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD529ETQiqhqVpTkY36CMX0H-jwL6_oHHBlhD4ct2_jI1JKsEQV8lWSfxkir9W-b75--cBiY5brhHfGM521G-5uXieu6y-DOLbYCZ-tbfcI-D-mhbGMYP-LUEEuck8YoUVIf7EqU7n5Gh0s4-98jEALnmlDM3uqghBFqtFbuXjR0HzxAT5PMYXmgIcMgU8FiDykp82RCkxSBzljyHvfwSddFbNRG2Bq75uS_LKh6waBv1wmXIBuYA2ABBV4nZaonnvcgfF0OifbZ9lm")'
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="font-label-md text-on-primary-container bg-primary-container/80 px-4 py-2 rounded-full mb-6 inline-block">
            ESTABLISHED 2014
          </span>
          <h1 className="font-headline-xl text-white text-shadow-sm mb-6">
            Built on Flour, Fire, and Community.
          </h1>
          <p className="font-body-lg text-white max-w-2xl mx-auto opacity-90">
            Artisanal Hearth isn't just a bakery; it's the heartbeat of the
            neighborhood, where every loaf tells a story of patience and craft.
          </p>
        </div>
      </section>

      {/* The Slow Journey */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa4QCD2r04SrVwIdC07cuoKSbqsap1RjbcaT5piDBQxyQ6uBIOAX3GlWaAibh7XY2Xk0SuhTEyIGvQvBmrRggfWDVyXdzdtmoZkbkw9ii9J2ED1E_j4KewiPFq_HywzkATsVxOpdqgG9wLCWv1VJSfF_8UUFLY82v1Tjw8vz7eV0keNTLzq6q3-qyqtm_n6M1OXC52HmbcttGVk_aXckPakMWlH50IfLX_5fusRALwMdTmyBrUu7latvZjAz0GadB_OCtJSZKvBRw4"
                  alt="Founders"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary-container p-6 rounded-xl shadow-lg hidden md:block max-w-[240px]">
                <p className="font-headline-md text-on-secondary-container leading-tight">
                  "We bake for the soul of the street."
                </p>
                <p className="mt-4 font-label-md text-secondary">
                  — Clara & Julian, Founders
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="font-headline-lg text-primary mb-2">
                The Slow Journey
              </h2>
              <div className="w-20 h-1 bg-secondary-fixed-dim rounded-full"></div>
            </div>
            <div className="columns-1 md:columns-2 gap-8 font-body-md text-on-surface-variant space-y-4">
              <p>
                It began in a small apartment kitchen with a single sourdough
                starter named 'Bessie'. Julian, a former architect, found beauty
                in the structural integrity of a perfect crust, while Clara, a
                local artist, focused on the sensory experience of seasonal
                flavors.
              </p>
              <p>
                Our philosophy is simple: we don't rush the process. We use
                72-hour cold fermentation and locally milled grains from farmers
                we know by name. This dedication to time creates a depth of
                flavor that can't be replicated in a factory.
              </p>
              <p>
                In 2014, we opened our first physical hearth. What was once a
                quiet corner has become a sanctuary for early risers, creative
                thinkers, and families sharing their first meal of the day.
              </p>
              <p>
                Today, we remain committed to the artisanal method. Every
                croissant is laminated by hand, and every cup of coffee is
                roasted in small batches to preserve its unique terroir.
              </p>
            </div>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center gap-2 group">
              Meet the Full Team
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Three Pillars */}
      <section className="py-24 bg-surface-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-primary mb-4">
              Our Three Pillars
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Everything we do at Artisanal Hearth is guided by a commitment to
              the land, the craft, and the people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col gap-6">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
              </div>
              <h3 className="font-headline-md text-primary">Conscious Sourcing</h3>
              <p className="font-body-md text-on-surface-variant">
                We partner with regenerative farms within a 100-mile radius. By
                choosing heirloom grains and seasonal produce, we ensure the
                highest nutritional value and support local ecosystems.
              </p>
              <img
                className="w-full h-48 object-cover rounded-xl mt-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4s5pyotGA4_ovCGXXoFalhNoOYwihyX4hC7RzsDazfC3RAdHmrhleeaReCGIBI0Bk-asp8s-Vp3XeGEiEBo4NjK2zInKWKCY04DJaUvB60LafkoRqhlUxLfa6A5o0Ge5SyONMcAHJNGnrAQmfACjVkZ59HNq5zsT-wQJfJHlEMHvs0wL7qVlMmbELbtUknksIhY_fWHScvKZgsTl0lZYris_YUbN1HOlDlJA0frle7hxnIvSOW6op-Pxq2e_1CSNOgL0oEUuNIQnF"
                alt="Conscious Sourcing"
              />
            </div>
            {/* Pillar 2 */}
            <div className="bg-primary-container text-on-primary-container p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col gap-6">
              <div className="w-12 h-12 bg-on-primary-container rounded-full flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>precision_manufacturing</span>
              </div>
              <h3 className="font-headline-md">Ancestral Craft</h3>
              <p className="font-body-md opacity-90">
                We reject modern shortcuts. Our bakers use techniques passed
                down through generations, utilizing wood-fired ovens that give
                our bread its signature smoky aroma and thick, caramelized
                crust.
              </p>
              <div className="mt-auto aspect-video relative rounded-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj8PYSfNkii7MDo2mAODBIt0sCul22O48NGxt7DlVlWv4hDPDEf87UUvBfqWuEbgaMf0ISGWQmJ_UyB5d241HFo1omYEUkveRlxQHWc5GsZBSm9i8dAo15J_8-qqwF4FqKe1vYug-LIyOZ16O3TQrYEe58yxX2tR-5quuFISTx0fpXX7Tf7ZB3bTHuSfx9fRjFL3h3yYyde4DsvcYP9m7M-q97wzwK_VxU12bs28BEAN-k3BKgAaSF6sqrPfbuibGAvio6QNK5WaDU"
                  alt="Ancestral Craft"
                />
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col gap-6">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>groups</span>
              </div>
              <h3 className="font-headline-md text-primary">Open Table</h3>
              <p className="font-body-md text-on-surface-variant">
                The hearth is a place for everyone. We host weekly baking
                workshops and monthly community dinners to foster connection and
                share the joy of slow food with our neighbors.
              </p>
              <img
                className="w-full h-48 object-cover rounded-xl mt-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTW1j8KNdMPXgwPE_sz2DO4NafIj56MhNH-QjqH8eupcKSLibK0sDf1aZdGUUPNjEBDmcPjmp58AwVYjB7UErXrs0i1rvrvcS0ed0c435kuQxK5a4067wXqmGzAh8gyXtCbs1D1zvNcgtGb38PcTqVz9-BZ77JqVcAZSR85HKFLYonoR-UK1j0vD2SrOw5XNz_dQlFUuV9R0SVFmJwdXAciB_xEaU5PXsTJ9lYMhgCwLWH1mZYcgvN89g3Mct6TA8-iMK6RXm6Cuvx"
                alt="Open Table"
              />
            </div>
          </div>
        </div>
      </section>

      {/* استدعاء مكون النشرة البريدية هنا */}
      <Newsletter />
    </div>
  );
}