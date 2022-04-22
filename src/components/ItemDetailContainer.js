import { useEffect, useState } from "react";
import customFetch from "../Utils/customFetch";
import ItemDetail from "./ItemDetail";
import { products } from "../Utils/products"
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});

    const { idItem } = useParams();

    // useEffect(() => {
    //     customFetch(2000, products[8])
    //         .then(res => setDato(res))
    //         .catch(err => console.log(err))
    // }, []);

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(res => setDato(res))
            .catch(err => console.log(err))
    },  []);

    return (
        <div>
            <ItemDetail item={dato} />           
        </div>
    );
}

export default ItemDetailContainer;