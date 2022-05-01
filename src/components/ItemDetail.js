import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CheckOut from './CheckOut';
import ItemCount from "./ItemCount"
import LoadingAnimation from './LoadingAnimation';
import { CartContext } from './CartContext';


const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0);
    const contexData = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
        setCount(qty);
        contexData.addItem(item, qty);
    }

    return (
        <>
            {
                item && item.image
                    ?
                    <Container>
                        <Card border="dark">
                            <Row className='text-center align-items-center'>
                                <Col sm={8}>
                                    <Card.Img variant="top" src={item.image} />
                                </Col>
                                <Col sm={4}>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        {
                                            count === 0
                                            ?<ItemCount stock={item.stock} initial={count} onAdd={onAdd}/>
                                            :<CheckOut/>
                                        }
                                    </Card.Body>
                                </Col>
                            </Row>
                                <Card.Footer className='text-center'>
                                    Stock: {item.stock}
                                </Card.Footer>
                        </Card>
                    </Container>
                    // :<p>Cargando..</p>
                    : <LoadingAnimation />
            }
        </>
    );
}

export default ItemDetail;