import './AddedProduct.css'

function AddedProduct(props) {
    const { title, index } = props
    return(
         <li> { title } </li>
    )
}

export default AddedProduct