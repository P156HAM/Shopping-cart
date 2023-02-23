import './Product.css';
import { useDispatch } from 'react-redux'

import { addProduct } from '../../actions/addToCartAction.js'

function Products(props) {
    const { book, cart } = props;
    
    const dispatch = useDispatch();

    function handelClick() {
        if (!cart.map(book=>book.id).includes(book.id)) {
            dispatch(addProduct(book))
        } 
    }

    return (
        <article className="product">
            <h2> { book.title } </h2>
            <h3> Av { book.author } </h3>
            <p> { book.text } </p>
            <button className='product-button'
             onClick= { () => { handelClick() } }> Add to cart </button>
        </article>
    )
}

export default Products;