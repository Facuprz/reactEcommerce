import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOneItem } from "../Utils/firestoreData";



const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});

    const { idItem } = useParams();

    // Muestra el item desde la base de datos
    useEffect(() => {
        firestoreFetchOneItem(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <div>
            <ItemDetail item={dato} />           
        </div>
    );
}

export default ItemDetailContainer;