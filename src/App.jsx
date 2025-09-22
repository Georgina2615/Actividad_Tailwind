import React from "react";
import NavbarDashboard from "./components/NavbarDashboard.jsx";

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <NavbarDashboard />

      <main className="flex-1 p-6 overflow-y-auto">
        <section
          id="inicio"
          className="mb-10 text-center bg-white p-6 rounded-lg shadow-md"
        >
          <h1 className="text-4xl font-extrabold text-pink-700 mb-4">
            Bienvenidas al salón AG Beauty Room
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Tu oasis de belleza y relajación
          </p>
          <p className="text-lg text-gray-500">
            Horario de atención: 9:00 AM - 9:00 PM, de lunes a sábado.
          </p>
        </section>

        <section id="servicios" className="mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Uñas y Manicure
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Manicure y Pedicure Tradicional</li>
                  <li>Aplicación de Gelish y Softgel</li>
                  <li>Uñas Acrílicas y Esculturales</li>
                  <li>Diseños de Uñas Personalizados</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tratamientos Capilares
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Keratinas y Alisados Brasileños</li>
                  <li>Botox Capilar</li>
                  <li>Hidratación Profunda con Colágeno</li>
                  <li>Corte y Peinado</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cejas y Pestañas
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Diseño y Depilación de Cejas</li>
                  <li>Laminado de Cejas</li>
                  <li>Extensión de Pestañas (Clásicas y de Volumen)</li>
                  <li>Rizado de Pestañas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
              Nuestros Trabajos
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Descubre la calidad y el arte en cada uno de nuestros servicios. ¡La belleza está en los detalles!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                Imagen 1
              </div>
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                Imagen 2
              </div>
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                Imagen 3
              </div>
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                Imagen 4
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
              Contáctanos
            </h2>
            <p className="text-center text-gray-700 mb-4">
              ¿Lista para tu próxima cita? ¡Agenda ahora!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <p className="text-gray-700">
                <span className="font-bold">WhatsApp:</span> +52 981 100 4416
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Instagram:</span> @AGBeautyRoom
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Dirección:</span> Fraccionamiento residencial san Rafael calle becan 14 por calle 6 col San Antonio
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;