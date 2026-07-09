export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container rounded-t-xl shadow-[0_-4px_16px_rgba(74,58,42,0.08)]">
      {/* Home Link */}
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-secondary transition-colors active:scale-90 duration-150" href="/">
        <span className="material-symbols-outlined">home</span>
        <span className="font-label-md text-[14px]">Home</span>
      </a>
      
      {/* Menu Link */}
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-secondary transition-colors active:scale-90 duration-150" href="/menu">
        <span className="material-symbols-outlined">restaurant_menu</span>
        <span className="font-label-md text-[14px]">Menu</span>
      </a>
      
      {/* Locations Link */}
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-secondary transition-colors active:scale-90 duration-150" href="/locations">
        <span className="material-symbols-outlined">location_on</span>
        <span className="font-label-md text-[14px]">Locations</span>
      </a>
      
      {/* About Link */}
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-secondary transition-colors active:scale-90 duration-150" href="/about">
        <span className="material-symbols-outlined">info</span>
        <span className="font-label-md text-[14px]">About</span>
      </a>
    </nav>
  );
}