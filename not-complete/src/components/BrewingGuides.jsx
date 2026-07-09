export default function BrewingGuides() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface" id="brewing-guides">
      <div className="max-w-container-max mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-secondary font-label-md text-[14px] tracking-widest uppercase">
            Master the Craft
          </span>
          <h2 className="font-headline-xl text-[48px] text-on-surface font-bold">
            Brewing Guides
          </h2>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-xl mx-auto">
            Bring the Artisanal Hearth experience to your kitchen with our
            curated techniques for the perfect cup.
          </p>
        </div>

        {/* Guides Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Guide 1: Pour Over */}
          <div className="group flex flex-col bg-surface-container-low rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NA4uEfS41t7n3Q6LYwVQEUm8MM-mgv5z62R3N29ne_8Yr9IPMPIB9bc2zHwPOMY1xUrPUDJ6d7qisB6y_Eiy6hhU7A63BY5Du1w6_OVtgl03NLRK-6a_UXtWIoGb_lFR_vNbQrCRiuyPxVXI19HITWZXciEMv6Wq2syLD3aIaeZcVP-zOllbEnNMv8HnG7sOLyA5AKeScfrvyXtHlEfRLFZntJeA-8v5UVX3UeQLab4UMNp2LxzajZ09zPYQoepxWCOx9MOBQfEz"
                alt="Pour Over"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[24px] text-on-surface font-semibold mb-3">
                The Perfect Pour Over
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-6 flex-grow">
                Master the delicate balance of water temperature and pour
                technique for a clean, bright cup.
              </p>
              <a className="text-primary font-bold inline-flex items-center gap-2 group/link" href="#">
                Learn More
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Guide 2: Cold Brew */}
          <div className="group flex flex-col bg-surface-container-low rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzkqA9SJlDUCS99yVDol-NqheDugj1ylgKCVULUdpMhWm7JxC0gZqtePkpyfgGYpBM_0Ejo2-6Yb7OEGNbmXz_U2jKmkMTk58X_MSzhmx4I4YQ3tdqtOiIUk0IWgD2QuHrgq6QihJ9QUZ82eA-B7wBZza_ucScaEKJzy4ZU69o9GQ-Z1PLQnRML6ObroSs1htYcPsoBwHohQmXp1Qsf-VnXOCq3cH4mKRFjGA1f4QwD7I0mp-FUBPTntgbl6z-jeXlP3bRqdx6uXKK"
                alt="Cold Brew"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[24px] text-on-surface font-semibold mb-3">
                Cold Brew at Home
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-6 flex-grow">
                A patient process for a smooth, low-acid concentrate that's
                perfect for warm afternoons.
              </p>
              <a className="text-primary font-bold inline-flex items-center gap-2 group/link" href="#">
                Learn More
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Guide 3: French Press */}
          <div className="group flex flex-col bg-surface-container-low rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqbZ-oDKMM9Y2S81AxcgZ5UeSUEGV3gJ8VqaT6tcAqoxu4Hi9oHsrgul0OAtnh6hzM7ySMIuxO0uAhn1u_i4ld5mESkGILdCXQCk08ZrDmQyF6n2OGos3vLlpsspdlsLAt10BIU_afbVLs13UzXF7Ky-ZrqmB-hDfhQ0d19JZLvuth0RSszkIdAi5XC7MlCgcNVRxKZxzR_i_ZD_4_vYircAtbetP2ajl02coDmXZOzOnWvWzHOQCCPgYOWlRv9LQT30CUlhkrbFv"
                alt="French Press"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[24px] text-on-surface font-semibold mb-3">
                French Press Secrets
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-6 flex-grow">
                Unlock the full-bodied richness and oils of your favorite
                beans with this classic immersion method.
              </p>
              <a className="text-primary font-bold inline-flex items-center gap-2 group/link" href="#">
                Learn More
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}