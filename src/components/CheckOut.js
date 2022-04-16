import { Button } from 'bootstrap';
import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        // <Container>
        //     <Link to='/'>
        //         <Button variant="danger" size="lg">Checkout</Button>
        //     </Link>
        // </Container>

        <div>
            <Link to='/cart'>            
                <button type="button" className="btn btn-danger btn-lg">Checkout</button>
            </Link>
        </div>
    );
}

export default CheckOut;