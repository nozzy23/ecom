import "./CartScreen.css";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

//components
import CartItem from "../components/CartItem";

const CartScreen = () => {
        const dispatch = useDispatch();

        const cart = useSelector(state => state.cart);
        const { cartItems } = cart;

    return (
    <div className="cartscreen">
        <div className="cartscreen__left">
            <h2>Shopping cart</h2>
            {cartItems.length === 0 ? (
                <div>
                    Your Cart is empty <Link to ="/"> Go Back </Link>
                </div>
            ): ( 
                cartItems.map((item) =>
                <CartItem item={item}/>)
            )}
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
    );
};

export default CartScreen;