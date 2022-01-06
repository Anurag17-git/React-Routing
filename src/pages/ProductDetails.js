import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const Params =  useParams();
    return <section>
        <h1>Product Detail</h1>
        <p>{Params.productId}</p>
    </section>
}

export default ProductDetails;