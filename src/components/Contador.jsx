import { useState } from "react"

function Contador(){
    const[count, setCount]= useState(0)
    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => { if (count > 0){ setCount(count - 1) } }
    const handleReset = () => setCount(0)
    
    return (
        <div className="text-center my-5">
            <p className="mb-4 text-lg">Has hecho click {count} veces</p>
            <div className="flex justify-center gap-6">
            <button onClick={handleDecrement} 
            className="bg-purple-300 font-semibold px-4 py-2 rounded hover:bg-purple-400"> - Disminuir </button>
                        
            <button onClick={handleReset} 
            className="bg-purple-300 font-semibold px-4 py-2 rounded hover:bg-purple-400"> ↻ Reiniciar </button>

            <button onClick={handleIncrement} 
            className=" bg-purple-300 font-semibold px-4 py-2 rounded hover:bg-purple-400"> + Incremento </button>
        </div>
        </div>
    )
}
    
export default Contador;