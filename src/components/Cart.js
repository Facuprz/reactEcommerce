import React from 'react'
import { Card } from 'react-bootstrap';

const Cart = () => {
    return (
        <Card className="text-center" border="secondary" style={{fontSize: 50}}>
            <Card.Body>
                Este es mi carrito
            </Card.Body>
        </Card>
    );
}

export default Cart;