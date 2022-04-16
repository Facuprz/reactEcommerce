import { useEffect, useState } from "react";


const ItemCount = ({stock, initial, onAdd }) => {
    
    // desarrollar logica
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);
    
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
            console.log(count);
        }
    }
    
    const decrement = () => {
        if (count > initial) {            
            setCount(count - 1);
            console.log(count);
        }
    }
    
    return (
        <div className="contenedorContador">
            <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
            <button type="button" className="btn btn-success" onClick={increment}>+</button>
            <p>{count}</p>
            {
                stock && count
                ? <button type="button" className="btn btn-info btn-lg" onClick={() => onAdd(count)}>Agregar al Carrito</button>
                : <button type="button" className="btn btn-secondary btn-lg" disabled>Agregar al Carrito</button>
            }
        </div>
    );
}

export default ItemCount;