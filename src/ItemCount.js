import react, {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => {
        stock > contador ? setContador(contador + 1): console.log("No hay mas stock disponible")
    }

    const restar = () => {
        stock < 1 ? setContador(contador - 1) : console.log("No se puede realizar la operacion")
    }

    const agregar = () => {
        setContador(initial);
        onAdd(contador)
    }

    return(

        <>

        <div>Mi Componente</div>
        <h1>{contador}</h1>
        <button onClick={sumar}>+</button>
        <button onClick={agregar}>Agregar al Carrito</button>
        <button onClick={restar}>-</button>

        </>
    )
}

export default ItemCount