function EmpleadoCard(props){
    return (
        <div className="bordere p-4 m-2 bg-gray-50">
            <h3 className="text-lg font-bold">{props.nombre}</h3>
            <p className="text-sm text-gray-700">{props.cargo}</p>
            <p clasName="text-sm text-gray-700">{props.edad}</p>
        </div>
    )
}

export default EmpleadoCard