import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext }  from "./CartContext";

const CartWidget = () => {
    
    const context = useContext(CartContext);

    return(
        <Link to="/cart">
            <Button variant="primary">
                <FaShoppingCart/>
                    {
                        context.cartItems.length > 0
                        ?
                        <span className="badge bg-danger">
                            {context.itemCount()}
                        </span>
                        :''
                    }
            </Button>
        </Link>
    );
}

export default CartWidget;