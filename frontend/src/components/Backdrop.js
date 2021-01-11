import './Backdrop.css';

const Backdrop = ({show}) => {
    return show && <div className="Backdrop"></div>;
};

export default Backdrop;