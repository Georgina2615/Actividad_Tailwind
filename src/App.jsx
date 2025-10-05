import NavbarDashboard from "./components/NavbarDashboard.jsx";
import EmpleadoCard from "./components/EmpleadoCard.jsx";
import Contador from "./components/Contador.jsx";

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
          <h1 className="text-4xl font-extrabold text-pink-700 mb-4">¡Bienvenidos!</h1>
          <p className="text-xl text-gray-600 mb-2">Tareas realizadas en el transcurso del primer parcial de la materia Programación Visual</p>
          <p className="text-lg text-gray-500">Una pequeña y simple muestra de lo que voy aprendiendo al pasar las semanas</p>
        </section>

        <section id="card" className="mb-10 text-center bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-center text-pink-700 mb-4">Card</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {empleadosDemo.map (emp => 
            <EmpleadoCard key={emp.id} nombre={emp.nombre} cargo={emp.cargo} edad={emp.edad}/>
           )}
           </div>
        </section>

        <section id="contador" className="mb-10 text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-4">Contador</h2>
          <Contador/>

        </section>
      </main>
    </div>
  );
}

export default App;