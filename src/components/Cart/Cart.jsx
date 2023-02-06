import './Cart.css'
import AddedProduct from '../AddedProduct/AddedProduct'

function Cart(props) {
    const { numberOfProducts, cart} = props;


    const cartComponenets = cart.map ((product, index) => {
        return <AddedProduct title={product.title} index={ index } />
      })

    return (
        <section className='cart'>
            <span href='' className='cart__link'> Cart </span>
            <span className='cart__counter'> { numberOfProducts }</span>
            <ul className='cartList'>
            { cartComponenets }
            </ul>
            
        </section>
    )
}

export default Cart