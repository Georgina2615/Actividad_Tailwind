import React, { useState } from 'react';
import Navbardashboard from './components/Navbardashboard.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      
      <Navbardashboard menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="flex-1 overflow-y-auto">
        <section id="inicio" className="p-8">
          <div className="bg-pink-50 p-6 rounded-lg shadow">
            <h1 className="text-3xl font-bold text-center text-pink-700 mb-2">Bienvenida</h1>
            <h2 className="text-xl text-center text-pink-600 mb-4">Tu espacio de belleza</h2>
            <p className="text-gray-700">Explora nuestros servicios, conoce nuestro trabajo y contáctanos para agendar tu cita.</p>
          </div>
        </section>

        <section id="servicios" className="p-8">
          <div className="bg-white p-6 rounded-lg shadow border border-pink-100">
            <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">Servicios</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Uñas gelish y softgel</li>
              <li>Keratinas y alisados</li>
              <li>Diseño de cejas</li>
            </ul>
          </div>
        </section>

        <section id="galeria" className="p-8">
          <div className="bg-pink-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">Galería</h2>
            <p className="text-gray-700">Aquí podrás ver fotos de nuestros trabajos más recientes.</p>
          </div>
        </section>

        <section id="contacto" className="p-8">
          <div className="bg-white p-6 rounded-lg shadow border border-pink-100">
            <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">Contacto</h2>
            <p className="text-gray-700">WhatsApp, Instagram, dirección del salón y horarios de atención.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;