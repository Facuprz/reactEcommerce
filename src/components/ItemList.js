import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <>
            {
                items.length > 0
                ?items.map(item => <Item key={item.id} id={item.id} title={item.title} cost={item.price} image={item.image[0]} stock={item.stock} />)
                :<p>Loading..</p>
            }
        </>
    );
}

export default ItemList;