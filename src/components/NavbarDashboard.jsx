const NavbarDashboard = () => {
  return (
    <nav className="w-55 min-h-screen bg-purple-100 shadow-md p-10 flex flex-col">
      <h1 className="text-2xl font-bold text-purple-800 mb-13 text-center">Balam Reyes</h1>
      <ul className="space-y-6 text-gray-950 font-medium">
        <li>
          <a href="#inicio" className="block hover:text-purple-700 font-semibold">Inicio</a>
        </li>
        <li>
          <a href="#card"className="block hover:text-purple-700 font-semibold">Card</a>
        </li>
        <li>
          <a href="#contador"className="block hover:text-purple-700 font-semibold">Contador</a>
        </li>
        <li>
          <a href="#toggle"className="block hover:text-purple-700 font-semibold">Toggle</a>
        </li>
        <li>
          <a href="#formulario" className="block hover:text-purple-700 font-semibold">Formulario</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDashboard;
