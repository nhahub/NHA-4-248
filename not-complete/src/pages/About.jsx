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
      {/* Inside the Hearth */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-headline-lg text-primary">
              Inside the Hearth
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Our kitchen operates 24/7, moving in rhythm with the seasons and
              the sun. While the neighborhood sleeps, our hearth begins to roar.
              We invite you to peek behind the curtain at the labor of love that
              fuels your morning.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim mt-1">
                  check_circle
                </span>
                <div>
                  <h4 className="font-label-md font-bold">
                    Small-Batch Daily
                  </h4>
                  <p className="text-sm opacity-80">
                    We only bake what we need, ensuring zero waste and peak
                    freshness.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim mt-1">
                  check_circle
                </span>
                <div>
                  <h4 className="font-label-md font-bold">
                    Natural Leavening
                  </h4>
                  <p className="text-sm opacity-80">
                    No commercial yeast. Just water, flour, and our decade-old
                    starter.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                className="w-full aspect-square object-cover rounded-xl shadow-md"
                alt="Roasting coffee beans"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQzvaHkkPFjunjis_Xld_-xvgaHCTOhWRz7Igz3fgsMBi51O9ruRTwewUd8hzxBSvf3ujNihd-R2doirRkbnBnt_W0keeN2QrK3GQjHlpzcouXirbBk0kwnIrEcbaR4VFBWgeTXMAengeRtOv3YeyEI9ZyQTK913cy7Xq224lOKBwCSa1IwM0oVQs-JYAaYbu3YmreSLfy61TrVwl6Z3g4FdgPMUIfAB6ypxFvSXQx-h45c9SAyXZm6b6FflTqQKbCPFRENlC8ZDdz"
              />
              <img
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-md"
                alt="Heirloom grains"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrJa_wtU0h40aPdmsrVBJUOwuihHEL-GRtJyXfAU63Z5eB-nkn_7aBv3E4Y6WBgugIZodcaMRYwybSExk8JewBWNnj8oiUA0Rbt2LGuh2q-BLYvxI89AYo9XOhV0x1EFVMuFGMq4jcZT2vUrdOdzrZZL2t5tC22DuK_EIJXX5p6esnllzQgfaWZp94mx7Jcj1_vHKlrXg_pjhUpnM2Wr4HQ2jvIDbwjklavUQZLCAtv-_-QmSWDo2jWxE1lZaSgktF9L1LTBPNdB8D"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-md"
                alt="Golden croissants"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAslNu5YBqLSKymmaLmv-9XDDhc0vIMXubUG1wVw2mMQ3QOPCH9JM15T239nkekBuHaJ9MW67UcQNhlOX2HL6amyNiAZm_0pkJ7vXsS22EDam9BbWguK6DVec-QIWPCWyEoKM7RM5xQXRjPXt5mzHLuomlxjS1gAjTIxSO29gwPRKeEetu-q27oh5XyDVccBYWJIZF70plyWd6vwxTCKTeDgLyNTP4v3w_rkGkS-R8L5JAJMhnb7hkFqCa2fEcpXM783XRtr0yPSXZn"
              />
              <img
                className="w-full aspect-square object-cover rounded-xl shadow-md"
                alt="Blackboard menu"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6421zaEIewBYgjyYxbaWrnkfLd4TM2Uwx0APF854cArH5RzvoEr0XY-ceqURKv_ecO4a0xy6XKhS_duTquvFZd5oq4xQT5qrDXBx6LxPhEbkXZOJIkAl81QitbxXV8lfXjj6ACPqFZ9olwgfdKN9De66YBLqDrOnLcPYcPbEfPWCpjEn3d-jplaTRYn-I4Ye2a8i3Ny2lv2rCAcxF2HW6frKiZ-WGMtJ95nKClFSq-bdQYLy4LEt10-QMA2tQpSGOKpAcV66rFXxi"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Farmers & Partners */}
      <section className="py-24 bg-surface">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-primary mb-4">
              Our Farmers & Partners
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              We believe the best bread starts with the best soil. Meet the
              local stewards who make our hearth possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  alt="Valley View Farms"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW1c0KwLRwGKaq4UL0ekJVi_C406E2itsGRpcogMJVm59tuAJC5qpFmPd_A6baBCTIeHedvSW88dcW8UlWxtOkkdvPZOJ7ijyp7hkW3GLohzqZfXYgFk2dwh_vWLAo9Gq4MPHepaKRbVP--78r_xmRJV7nSUC4Nmnuz9utaKCfR_hFGyt9UJvwfeTG00p1eiWTxndMVkeS2ybLFo5tQR2IdtrDwIyEC_n-lNqxjk5wFUOIzhC1FbCGvP1RfGFJ3PSJ8Tj6SS8quoxa"
                />
              </div>
              <h4 className="font-headline-md text-primary">
                Valley View Farms
              </h4>
              <p className="text-secondary font-label-md mb-4">
                12 miles away
              </p>
              <p className="font-body-md text-on-surface-variant">
                Supplying our heritage Red Fife and Turkey Red wheat. Their
                regenerative practices ensure every grain is packed with
                nutrients and flavor.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  alt="Oak Ridge Apiary"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvZoN_5wNz23VBHRtnraRja1LEU6UXZnk24y_NLewnRMMXfEf7L4hqAC0ac1GozS3Abh6gxE0e8DapywViNT6f2tPLAkrsv2y4b8HzKAMmEqlwEcJD_W791FxYa8GgH0NSc-BFQSBn5bKdm1dMi3_gN1_mIsms2qpmhTInJiy5OX7sTFgDTUAKgR7q2DqhyD9InPGtc9wiLxdeXfUvaWZJrH_qBDH7JBlKqnCwQ7XntqhTDXxdvHb8n_SoIHnZsxJZGf2eMq7w4Spi"
                />
              </div>
              <h4 className="font-headline-md text-primary">
                Oak Ridge Apiary
              </h4>
              <p className="text-secondary font-label-md mb-4">
                8 miles away
              </p>
              <p className="font-body-md text-on-surface-variant">
                Providing the raw wildflower honey used in our seasonal
                pastries. Their bees forage across protected local meadows for a
                unique floral profile.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  alt="Stone Mill Grains"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt16rVhkOIHc-Fb1eMsV4sbTk7a5qhDRPefhOHitMcFUn1Xj3Ue7SfCUc5NV21HCCcmquEjKt5DW_c3cYVdRRutB6hm7otBU25IttSGjn3RoKYjMTvG94O36QjHL734-UQJtKZ997iwEHcCKRWZb2NwXvDLFbtt_DCnVlvXX14-IOWdMItwM0WAxTa8n2zR-vh2fMjBSZf4qOSiFX84gArw6L4MRT-Btkml5F-_hh-V5uj_Sm1inm1EtMKGK6iNqxawVW7CYlMliYs"
                />
              </div>
              <h4 className="font-headline-md text-primary">
                Stone Mill Grains
              </h4>
              <p className="text-secondary font-label-md mb-4">
                24 miles away
              </p>
              <p className="font-body-md text-on-surface-variant">
                Our source for cold-milled rye and spelt. By milling at low
                temperatures, they preserve the essential oils and deep aroma of
                the grain.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  alt="Green Pastures Dairy"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLV5Wurrnw4FjXOEGQI4bQvulCwtKZiBPYEnXF24KkPuFD_uUYCO73JWA_TDOC6AA2Ux6BxdislmbbeeEzCnKrJpMxZGUG3TiPY0adgglBJBBPwyr5blNl3tgnBlGh_jE3Fs2HgOXdEpNyz26w2Zbl9el5-_Qn-qWdP8jQXvRFvab6gvhqfkL7z3ZjVykzxgxFSMPMqQ2anBUU7elmQxkty8a-cBLUl2MNPqUGneQtFMXYKstRwV5jqEqJpwQdxZv5h2FV9euPikQK"
                />
              </div>
              <h4 className="font-headline-md text-primary">
                Green Pastures
              </h4>
              <p className="text-secondary font-label-md mb-4">
                15 miles away
              </p>
              <p className="font-body-md text-on-surface-variant">
                The source of our high-fat cultured butter and fresh cream.
                Their grass-fed cows produce the richness essential for our
                hand-laminated croissants.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* استدعاء مكون النشرة البريدية هنا */}
      <Newsletter />
    </div>
  );
}