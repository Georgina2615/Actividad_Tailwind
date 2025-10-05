import { useState } from "react"

function Contador(){
    const[count, setCount]= useState(0)
    const handleIncrement = () => setCount(count + 1)
    
    return (
        <div className="text-center my-5">
            <p className="mb-4 text-lg">Has hecho click {count} veces</p>
            <button onClick={handleIncrement} 
            className=" bg-pink-200 font-semibold px-4 py-2 rounded hover:bg-pink-300">Incrementar</button>

        </div>
    )
}
    
export default Contador;