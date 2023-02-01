import './Product.css';

function Products(props) {
    const { book, addToCart } = props;
    return (
        <article className="product">
            <h2> { book.title } </h2>
            <h3> Av { book.author } </h3>
            <p> { book.text } </p>
            <button className='product-button'
             onClick= { () => {addToCart(book)} }> Add to cart </button>
        </article>
    )
}

export default Products;