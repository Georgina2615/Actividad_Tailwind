import React from 'react';

function Navbardashboard({ menuOpen, setMenuOpen }) {
  return (
    <div className="flex h-screen bg-white">
      <aside className={`bg-pink-100 text-pink-800 shadow-md w-64 p-4 flex-col justify-between transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <h2 className="text-2xl font-bold text-center mb-6">Salón AG Beauty Room</h2>
        <nav className="space-y-4">
          <a href="#inicio" className="flex items-center gap-2 hover:text-pink-500"> Inicio</a>
          <a href="#servicios" className="flex items-center gap-2 hover:text-pink-500"> Servicios</a>
          <a href="#galeria" className="flex items-center gap-2 hover:text-pink-500"> Galería</a>
          <a href="#contacto" className="flex items-center gap-2 hover:text-pink-500"> Contacto</a>
        </nav>
        <p className="mt-auto text-sm text-center text-pink-600">© 2025 Georgina Balam</p>
      </aside>

      <div className="bg-pink-50 p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-pink-700">Salón AG Beauty Room</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-700 text-2xl">☰</button>
      </div>
    </div>
  );
}

export default Navbardashboard;