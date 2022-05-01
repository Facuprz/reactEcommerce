import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../Utils/firestoreData';



// Componente que contiene los productos
const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    const { idCategory } = useParams(); // Hook de react router
    
    // Muestra los productos de la base de datos
    useEffect(() => {        
        firestoreFetch(idCategory)
            .then(res => setDatos(res))
            .catch(err => console.log(err));
    }, [idCategory]);
    
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return(
        <div>
            <ItemList items={datos}/>
        </div>
    );
}

export default ItemListContainer;