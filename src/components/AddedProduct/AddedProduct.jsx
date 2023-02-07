import './AddedProduct.css'

function AddedProduct(props) {
    const { title } = props

    return(
        <li> 
            { title } 
        </li>
    )
}

export default AddedProduct