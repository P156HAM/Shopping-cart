import { useState } from 'react';

function Cart () {
    const [count, setCount] = useState(0);
    return (
        <p className='cart'> Cart {count} </p>
    )
}

export default Cart