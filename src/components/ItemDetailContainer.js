import { useEffect, useState } from "react";
import customFetch from "../Utils/customFetch";
import ItemDetail from "./ItemDetail";
import { products } from "../Utils/products"



const ItemDetailContainer = () => {


    const [dato, setDato] = useState({});


    useEffect(() => {
        customFetch(2000, products[8])
            .then(res => setDato(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <ItemDetail item={dato} />           
        </>
    );
}

export default ItemDetailContainer;