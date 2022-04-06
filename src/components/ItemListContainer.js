import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { getProducts } from "../Utils/products";



const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            let data = await getProducts();
            setDatos(data);
            }
        fetchData();
    },[]);


    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
    }

    return(
        <div>
            <ItemList items={datos}/>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;