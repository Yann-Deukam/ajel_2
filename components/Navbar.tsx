import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="bg-slate-700 px-4 mt-12">
    <div className="container mx-auto flex justify-between items-center py-4">
      
      <div className="flex items-center font-extrabold text-white text-xl">
        <span>AJEL Corporation</span>
      </div>

      <nav className="hidden md:flex md:flex-grow justify-center">
        <ul className="flex justify-center space-x-4 text-white">
          <li><a href="#about" className="hover:text-slate-200 scroll-smooth">A propos</a></li>
          <li><a href="#filiale" className="hover:text-slate-200">Nos filiales</a></li>
          <li><a href="#partner" className="hover:text-slate-200">Nos partenaires</a></li>
          <li><a href="#gallery" className="hover:text-slate-200">Galeries</a></li>
          <li><a href="#team" className="hover:text-slate-200">Team</a></li>
          <li><a href="#contact" className="hover:text-slate-200">Actualités</a></li>
          <li><a href="#actualite" className="hover:text-slate-200">Contact</a></li>
        </ul>
      </nav>

      <div className="hidden lg:flex items-center space-x-4">
        <a href="#" className="bg-green-500 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded inline-block">Contactez-nous</a>
      </div>
    </div>
  </header>

        <nav id="mobile-menu-placeholder" className="mobile-menu hidden flex-col items-center space-y-8 md:hidden px-8">
        <ul className="w-full text-center">
            <li><a href="#about" className="hover:text-slate-200">A propos</a></li>
            <li><a href="#results" className="hover:text-slate-200">Nos filiales</a></li>
            <li><a href="#reviews" className="hover:text-slate-200">Nos partenaires</a></li>
            <li><a href="#portfolio" className="hover:text-slate-200">Galeries</a></li>
            <li><a href="#team" className="hover:text-slate-200">Team</a></li>
            <li><a href="#contact" className="hover:text-slate-200">Contact</a></li>
            <li><a href="#contact" className="hover:text-slate-200">Actualités</a></li>
        </ul>
        <div className="flex flex-col mt-6 space-y-2 items-center">
        <a href="#" className="bg-green-500 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded inline-block">Contactez-nous</a>
        </div>
        </nav>
    </>
  )
}

export default Navbar