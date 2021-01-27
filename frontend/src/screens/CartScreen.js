import "./CartScreen.css";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

//components
import CartItem from "../components/CartItem";

//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartScreen = () => {
        const dispatch = useDispatch();

        const cart = useSelector(state => state.cart);
        const { cartItems } = cart;

        const qtyChangeHandler = (id, qty) => {
            dispatch(addToCart(id, qty))
        }

        const removeHandler = (id) => {
            dispatch(removeFromCart(id));
        }

        const getCartCount = () => {
            return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
        }
        const getCartSubtotal= () => {
            return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
        };

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
                <CartItem 
                key={item.product}
                item={item} 
                qtyChangeHandler={qtyChangeHandler} 
                removeHandler={removeHandler}/>)
            )}
        </div>
        <div className="cartscreen__right">
            <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubtotal().toFixed(2)}</p>
            </div>
            <div>
                <button>Proceed to check out</button>
            </div>
        </div>
    </div>
    );
};

export default CartScreen;