import { useState } from "react"

function Toggle() {
    const [visible, setVisible] = useState(false)

    return(
        <div className="text-center my-6">
            <button onClick={() => setVisible(!visible)} className="bg-purple-300 font-semibold px-4 py-2 rounded hover:bg-purple-400" aria-expanded={visible}>
                {visible ? "Ocultar detalles": "Mostrar detalles"}
            </button>
            {visible && ( 
                <div className="my-6 py-4 rounded bg-purple-100">
                <p>Si funciono, no se ve al menos que le de clik  mostrar detalles</p>
            </div>
                )}
        </div>
    )
}
export default Toggle