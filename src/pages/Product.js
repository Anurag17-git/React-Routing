import { Link } from "react-router-dom";

const Product = () => {
    return <section>
        <h1>These are the products</h1>
        <ul>
            <li><Link to="/product/p1">Car</Link></li>
            <li><Link to="/product/p2">Bike</Link></li>
            <li><Link to="/product/p3">Aeroplane</Link></li>
        </ul>
    </section>
}

export default Product;