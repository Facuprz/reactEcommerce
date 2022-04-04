import ItemCount from './ItemCount';


const ItemListContainer = () => {

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
    }

    return(
        <div className="contenedorSaludo">
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;