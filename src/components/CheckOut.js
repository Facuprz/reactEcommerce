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

        // <div>
        //     <Link to='/cart'>            
        //         <button type="button" className="btn btn-danger btn-lg">Checkout</button>
        //     </Link>
        // </div>

        // <div class="containerCheckout">
        //     <Link to='/cart'>            
        //         <button class="center cssbuttons-io-button"> Checkout
        //             <div class="icon">
        //                 <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        //             </div>
        //         </button>
        //     </Link>
        // </div>

        <div class="containerCheckout">
            <Link to='/cart'>
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">
                        Checkout
                    </span>
                </button>
            </Link>
        </div>
    );
}

export default CheckOut;