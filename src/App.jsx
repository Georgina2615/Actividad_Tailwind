import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center transform transition-transform duration-300 hover:scale-105">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500"
          src="https://via.placeholder.com/150"
          alt="Foto de Perfil"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Hola, Mundo!
        </h2>
        <p className="text-gray-600">
          Este es un diseño de prueba con Tailwind CSS y React.
        </p>
        <button className="mt-6 bg-indigo-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300">
          Ver Perfil
        </button>
      </div>
    </div>
    </>
  )
}

export default App
