import "./ProductScreen.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Actions
import { getProductDetails} from '../redux/actions/productActions';
import { addToCart} from '../redux/actions/cartActions';

const ProductScreen = ({match, history}) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if(product && match.parm.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, product, match]);


    return <div className="productscreen">
                <div className="productscreen__left">
                    <div className="left__image">
                <img 
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"  alt="product name"/>
            </div>

            <div className="left__info">
                <p className="left__name">product 1</p>
                <p>price:$69.69</p>
                <p> lets go go go go go go go go go gog og og og go go jrijhguirjeho g go grjds</p>
            </div>
        </div>
        <div className="productscreen__right">
            <div className="right__info">
                <p>
                    price: <span>69.00$</span>
                </p>
                <p>
                    Status:<span>In stock</span>
                </p>
                <p>
                    Qty
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <p>
                        <button type="button">
                        Add to cart
                        </button>
                    </p>
                </p>
            </div>
        </div>
    </div>
};

export default ProductScreen;