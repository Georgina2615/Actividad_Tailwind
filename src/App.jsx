import NavbarDashboard from "./components/NavbarDashboard.jsx";
import EmpleadoCard from "./components/EmpleadoCard.jsx";

const empleadosDemo = [
    {id: 1, nombre: "prueba 1", cargo:"prueba", edad:"36"},
    {id: 2, nombre: "AMI", cargo:"manicura", edad:"32"},
    {id: 3, nombre: "eve", cargo:"manicura", edad:"21"},
]

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <NavbarDashboard />

      <main className="flex-1 p-6 overflow-y-auto">
        <section id="inicio" className="mb-10 text-center bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-pink-700 mb-4">Bienvenidas al salón AG Beauty Room</h1>
          <p className="text-xl text-gray-600 mb-2">Tu oasis de belleza y relajación</p>
          <p className="text-lg text-gray-500"> Horario de atención: 9:00 AM - 9:00 PM, de lunes a sábado.</p>
        </section>

        <section id="equipo" className="mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-center text-pink-700 mb-6">Nuestro Equipo</h2>
           {empleadosDemo.map (emp => 
            <EmpleadoCard key={emp.id} nombre={emp.nombre} cargo={emp.cargo} edad={emp.edad}/>
           )}
         </div>
        </section>
      </main>
    </div>
  );
}

export default App;