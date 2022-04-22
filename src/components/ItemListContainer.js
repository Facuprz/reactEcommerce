import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { getProducts, products } from "../Utils/products";
import customFetch from '../Utils/customFetch';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    const {idCategory} = useParams(); // Hook de react router
    // console.log(idCategory);

    // useEffect(() => {
    //     async function fetchData() {
    //         let data = await getProducts();
    //         setDatos(data);
    //         }
    //     fetchData();
    // },[]);

    useEffect(() => {
        if (idCategory === undefined) {
            //Traemos los productos con una promesa
            customFetch(2000, products)
                .then(res => setDatos(res))
                .catch(err => console.log(err));
        } else {
            customFetch(2000, products.filter(item => item.category === parseInt(idCategory)))
                .then(res => setDatos(res))
                .catch(err => console.log(err));
        }            
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
    }

    return(
        <div className='bgShiny'>
            <ItemList items={datos}/>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
        </div>
    );
}

export default ItemListContainer;