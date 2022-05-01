import React, { useContext } from 'react'
import { Row, Container, Button, Card, CardGroup } from "react-bootstrap";
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { doc, setDoc, collection, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../Utils/firebaseConfig"
import Swal from 'sweetalert2'


const Cart = () => {
    // Traemos los datos del carro desde cartContext 
    const contextData = useContext(CartContext);

    const checkoutOrder = () => {

        // Actualiza el stock de la base de datos
        contextData.cartItems.forEach(async item => {
            const updateItem = doc(db, "products", item.itemId);
            await updateDoc(updateItem, {
                stock: increment(-item.itemCant)
            })
        });
        // Creamos la orden
        let order = {
            buyer: {
                name: "bruce wayne",
                email: "bruce@wayne",
                phone: 123456789
            },
            date: serverTimestamp(),
            items: contextData.cartItems.map(item => ({
                id: item.itemId,
                title: item.itemName,
                price: item.itemPrice,
                qty: item.itemCant
            })),
            total: contextData.calcTotal()
        }
        // Agregamos la orden a la base de datos         
        const createOrderToFirestore = async () => {
            const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, order);
            return newOrder;
        };
        // Ejecutamos la orden
        createOrderToFirestore()
        .then(res =>
            Swal.fire(
                'ID de su orden: ' + res.id , 
                'Gracias por su compra!',
                'success'
            )
        )
        .catch(err => console.log(err))
        // Limpiamos el carro despues de ejecutar la orden
        contextData.deleteAllItems();
    }
    return (
        <>
            <Container>
                {
                    contextData.cartItems.length > 0
                        ? <div className='text-center'>
                                <h1 className="text-center margin">Carrito de compras</h1>
                                <Button className='botonDetalles margin' variant="danger" size="lg" onClick={contextData.deleteAllItems}>Vaciar Carrito</Button>
                        </div>
                        :
                        <div className='text-center'>
                            <h1 className="text-center margin">Tu carrito está vacío</h1>
                            <Link to='/'><Button className='botonDetalles margin' variant="outline-secondary" size='lg'>Continuar comprando</Button></Link>
                        </div>
                }
                <Row>
                    {
                        // Checkeamos si hay items en el carro y si es asi mostramos los items
                        contextData.cartItems.length > 0
                            ? contextData.cartItems.map(item => (
                                <CardGroup className='text-center align-items-center'>
                                    <Card>
                                        <Card.Img className='imgCenter' variant="top" style={{width:'14rem', height:'14rem'}} src={item.itemImg} />
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.itemName}</Card.Title>
                                            <Card.Text>
                                                Precio unitario: $ {item.itemPrice}
                                            </Card.Text>
                                            <Card.Text>
                                                Cantidad: {item.itemCant}
                                            </Card.Text>
                                            <Card.Text>
                                                Subtotal: $ {contextData.calcSubTotal(item.itemId)}
                                            </Card.Text>
                                            <Button className='botonDetalles' variant="danger" onClick={() => contextData.deleteItem(item.itemId)}>Eliminar</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            ))
                            // Carro vacio no mostramos nada
                            : ""
                    }
                    {
                        contextData.cartItems.length > 0 &&
                        <div className='text-center padding'>
                            <h1>Total</h1>
                            <p>$ {contextData.calcTotal()}</p>
                            <Button className='botonDetalles' variant="success" size='lg' onClick={checkoutOrder}>Finalizar compra</Button>
                            <br/>
                            <Link to='/'><Button className='botonDetalles margin' variant="secondary" size='lg'>Elegir mas productos</Button></Link>
                        </div>
                    }
                </Row>
            </Container>
        </>
    );
}

export default Cart;