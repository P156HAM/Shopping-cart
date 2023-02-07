import './AddedProduct.css'

function AddedProduct(props) {
    const { title, product, cart } = props
    console.log(cart)
    console.log(product)
    console.log(cart.includes(title))
    return(
        <li> 
            { title } 
        </li>
    )
}

export default AddedProduct