import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CheckOut from './CheckOut';
import ItemCount from "./ItemCount"
import LoadingAnimation from './LoadingAnimation';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';




const ItemDetail = ({item}) => {

    const [count, setCount] = useState(0);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
        setCount(qty);
    }

    return (
        <>
            {
                item && item.image
                ?
                <Container>
                    <Card className="text-center mx-auto" border="secondary" style={{  width: '22rem' }}>
                        <Card.Header style={{fontSize: 25}}>{item.title}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Title>Descripcion</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            {
                                count === 0
                                ?<ItemCount stock={item.stock} initial={count} onAdd={onAdd}/>
                                :<CheckOut/>
                                // :<Link to='/cart'><Button variant="danger" size="lg">Checkout</Button></Link>
                            }
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            Stock: {item.stock}
                        </Card.Footer>
                    </Card>
                </Container>
                // :<p>Cargando..</p>
                :<LoadingAnimation/>
            }   
        </>
    );
}

export default ItemDetail;