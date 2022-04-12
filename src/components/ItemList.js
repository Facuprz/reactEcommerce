import { Container, Row } from "react-bootstrap";
import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    items.length > 0
                    ?items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} brand={item.brand} image={item.image[0]} stock={item.stock} />)
                    :<p>Cargando..</p>
                }
            </Row>
        </Container>
    );
}

export default ItemList;