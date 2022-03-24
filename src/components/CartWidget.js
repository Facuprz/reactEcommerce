import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return(
        <button type="button" class="btn btn-primary">
            <FaShoppingCart/>
            <span class="badge bg-danger">
                4
            </span>
        </button>
    );
}

export default CartWidget;