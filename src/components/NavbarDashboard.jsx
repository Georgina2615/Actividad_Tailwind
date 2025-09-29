const NavbarDashboard = () => {
  return (
    <nav className="w-55 min-h-screen bg-pink-50 shadow-md p-10 flex flex-col">
      <h1 className="text-2xl font-bold text-pink-700 mb-13 text-center">AG Beauty Room</h1>
      <ul className="space-y-6 text-gray-950 font-medium">
        <li>
          <a href="#inicio" className="block hover:text-pink-700 font-semibold">Inicio</a>
        </li>
        <li>
          <a href="#servicios"className="block hover:text-pink-700 font-semibold">Servicios</a>
        </li>
        <li>
          <a href="#galeria"className="block hover:text-pink-700 font-semibold">Galería</a>
        </li>
        <li>
          <a href="#contacto"className="block hover:text-pink-700 font-semibold">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDashboard;
