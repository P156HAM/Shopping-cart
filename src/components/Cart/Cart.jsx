import './Cart.css'
import AddedProduct from '../AddedProduct/AddedProduct'
import { useSelector } from 'react-redux';

function Cart(props) {
    const { numberOfProducts } = props;

    const cart = useSelector((state) => { return state.cart })
    console.log(cart);

    const cartComponenets = cart.map ((product, index) => {
        return <AddedProduct cart={ cart } product={ product } title={product.title} index={ index } />
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