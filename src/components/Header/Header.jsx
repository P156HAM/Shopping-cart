import "./Header.css"
import Cart from "../Cart/Cart";

function Header(props) {
    const { numberOfProducts, cart} = props;   
    return (
        <header className='header'>
            <Cart numberOfProducts= { numberOfProducts } cart={ cart }/>
        </header>
    )
}

export default Header