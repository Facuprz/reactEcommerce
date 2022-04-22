import { createContext, useState } from "react";

// inicializamos nuestro contexto en la variable CartContext
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);

    // agrega item al carro
    const addItem = (item, qty) => {
        let found = cartItems.find (el => el.id === item.id);
        if(found === undefined){
            setCartItems([
                ...cartItems,
                {
                    itemId: item.id,
                    itemImg: item.image,
                    itemName: item.title,
                    itemPrice: item.price,
                    itemCant: qty,
                }
            ]);
        }else{
            found.itemCant++
        }
    };

    // elimina item
    const deleteItem = (id) => {
        let del = cartItems.filter(item => item.itemId !== id);
        setCartItems(del);
    };

    // vacia carro
    const deleteAllItems = () => {
        setCartItems([]);
    };

    // retorna contexto con la data
    return(
        <CartContext.Provider value={{cartItems, addItem, deleteItem, deleteAllItems}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;