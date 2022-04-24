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

    const itemCount = () => {
        let cantidad = cartItems.map(item => item.itemCant);
        return cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    };

    const calcSubTotal = (itemId) => {
        let subTotal = cartItems.map(item => item.itemId).indexOf(itemId);
        return cartItems[subTotal].itemCant * cartItems[subTotal].itemPrice;
    };

    const calcTotal = () => {
        let total = cartItems.map(item => calcSubTotal(item.itemId));
        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    };

    // retorna contexto con la data
    return(
        <CartContext.Provider value={{cartItems, addItem, deleteItem, deleteAllItems, itemCount, calcSubTotal, calcTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;