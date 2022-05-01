import React from 'react'
import { Link } from 'react-router-dom';


const CheckOut = () => {
    return (
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