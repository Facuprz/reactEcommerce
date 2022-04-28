import { query, where, collection, getDocs, orderBy } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "../Utils/firebaseConfig"

//Mostramos todos los productos de la coleccion
export const firestoreFetch = async (idCategory) => {
    let foundCollection;
    if (idCategory) {
        foundCollection = query(collection(db, "products"), where('category', '==', idCategory));
    } else {
        foundCollection = query(collection(db, "products"), orderBy ('category'));
    }
    const querySnapshot = await getDocs(foundCollection);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOneItem = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No existe el documento!");
    }
}