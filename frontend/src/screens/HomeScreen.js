import Product from "../components/Product";
import "./HomeScreen.css";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//components
import Product from "../components/Product";

const HomeScreen = () => {

    


    return <div className="homescreen">
        <h2 className="homescreen__title">Latest Product</h2>

        <div className="homescreen__products">
 
        </div>
    </div>
};

export default HomeScreen;