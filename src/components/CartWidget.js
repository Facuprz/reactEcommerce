import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-primary">
            <FaShoppingCart/>
            <span className="badge bg-danger">
                4
            </span>
        </button>
    );
}

export default CartWidget;