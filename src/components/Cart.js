import React, { useContext } from 'react'
import { Row, Container, Button, Col, Card, CardImg } from "react-bootstrap";
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { serverTimestamp } from "firebase/firestore";



const Cart = () => {
    // Traemos la data del carro desde cartContext 
    const contextData = useContext(CartContext);

    const checkoutOrder = () => {
        let order = {
            buyer: {
                name: "bruce wayne",
                email: "bruce@wayne",
                phone: 123456789
            },

            date: serverTimestamp(),

            items: contextData.cartItems.map (item => ({
                id: "",
                title: "",
                price: "",
                qty: 0
            })),

            total: contextData.calcTotal()
        }
        
        
        console.log(order)
    }

    return (
        <Container className="mt-3">
            <Row>
                {
                    contextData.cartItems.length > 0
                        ? <Button variant="outline-danger" size="lg" onClick={contextData.deleteAllItems}>Vaciar Carrito</Button>
                        :
                        <div className='text-center'>
                            <h1 className="text-center">Carrito vacio</h1>
                            <Link to='/'><Button variant="outline-secondary" size='lg'>Continuar comprando</Button></Link>
                        </div>
                }
                <Row className="mt-4">
                    {
                        // Checkeamos si hay items en el carro y si es asi mostramos los items
                        contextData.cartItems.length > 0
                            ? contextData.cartItems.map(item => (
                                <Row key={item.itemId}>
                                    <Col>
                                        <CardImg variant="top" src={item.itemImg} />
                                    </Col>
                                    <Col sm={10} className="mt-2">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.itemName}</Card.Title>
                                                <Card.Text>
                                                    <span><b>Precio unitario: $ {item.itemPrice}</b></span>
                                                </Card.Text>
                                                <Card.Text>
                                                    <span>Cantidad: {item.itemCant}</span>
                                                </Card.Text>
                                                <Card.Text>
                                                    <span>Subtotal: $ {contextData.calcSubTotal(item.itemId)}</span>
                                                </Card.Text>
                                                <Button variant="danger" onClick={() => contextData.deleteItem(item.itemId)}>Eliminar</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            ))
                            // Carro vacio no mostramos nada
                            : ''
                    }
                    {
                        contextData.cartItems.length > 0 &&
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>Total</Card.Title>
                                <Card.Text>
                                    $ {contextData.calcTotal()}                                
                                </Card.Text>
                                <Button variant="outline-success" onClick={checkoutOrder}>Finalizar compra</Button>
                            </Card.Body>
                        </Card>
                    }
                </Row>
            </Row>
        </Container>
    );
}

export default Cart;