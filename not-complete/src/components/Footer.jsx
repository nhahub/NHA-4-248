export default function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-12 md:py-16 mt-auto bg-surface-container-high border-t border-outline/20 flex flex-col items-center gap-8 text-center text-on-surface">
      {/* Brand name and navigation links */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="font-headline-md text-2xl md:text-3xl text-primary font-bold">
          Artisanal Hearth
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base" href="#">Instagram</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base" href="#">Facebook</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base" href="#">Hours</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base" href="#">Contact</a>
        </div>
      </div>

      {/* Address and working hours */}
      <div className="text-on-surface-variant/80 font-body-md text-sm md:text-base space-y-1">
        <p>123 Whisper Lane, Creative District</p>
        <p>Open Daily 7:00 AM — 4:00 PM</p>
      </div>

      {/* Copyright information */}
      <div className="pt-6 border-t border-outline/10 w-full max-w-2xl mx-auto">
        <p className="text-on-surface-variant/70 font-body-md text-sm">
          © 2024 Artisanal Hearth. Crafted for Community.
        </p>
      </div>
    </footer>
  );
}