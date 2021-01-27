import "./CartScreen.css";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//components
import CartItem from "../components/CartItem";

const CartScreen = () => {
    return <div className="cartscreen">
        <div className="cartscreen__left">
            <h2>Shopping cart</h2>
        </div>
        <div className="cartscreen__right">
            <div className="cartscreen__info">
            <p>Subtotal (0) items</p>
            <p>$499.00</p>
            </div>
            <div>
                <button>Proceed to check out</button>
            </div>
        </div>
    </div>
};

export default CartScreen;