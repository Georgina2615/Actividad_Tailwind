import { useState } from "react"

function Formulario() {
    const [nombre, setNombre] = useState("")
    const [correo, sentCorreo] = useState("")

    return (
        <div className="text-center my-6">
            <div className="flex justify-center gap-6">
              <input type="text" value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              placeholder="Escribe tu nombre"className="bg-purple-200 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"/>

              <input type="email" value={correo} 
              onChange={(e) => sentCorreo(e.target.value)}
              placeholder="Escribe tu correo" className="bg-purple-200 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"/>
            </div>
            <p className="mt-3 text-lg font-semibold">
                Hola, {nombre} <br/> {correo && <span> Tu correo es: {correo}</span>}
            </p>
        </div>
    )
}
export default Formulario