import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartToggle } = useContext(
        CartContext
    );

    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items'> 
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
 }

export default CartDropdown;