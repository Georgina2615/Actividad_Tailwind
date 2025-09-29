function EmpleadoCard(props){
    return (
        <div className=" rounded-lg p-4 m-2 bg-gray-200 text-center">
            <h3 className="text-lg font-bold">{props.nombre}</h3>
            <p className="text-sm text-gray-700">{props.cargo}</p>
            <p className="text-sm text-gray-700">{props.edad}</p>
        </div>
    )
}

export default EmpleadoCard