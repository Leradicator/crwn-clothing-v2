import './product-row.styles.scss';

import { React, useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

const ProductRow = ({ cartItem }) => {
    const {id, name, quantity, price, imageUrl} = cartItem;
    const {addItemToCart, reduceItemQuantity, removeItemFromCart} = useContext(CartContext);

    return (
        <tr>
            <td>
                <img src={imageUrl} alt={`${name}`} />
            </td>
            <td>
                <span className='name'>{name}</span>
            </td>
            <td>
                <button onClick={() => reduceItemQuantity(cartItem)}>-</button>
                <span className='quantity'>{quantity}</span>
                <button onClick={() => addItemToCart(cartItem)}>+</button>
            </td>
            <td>
                <span className='price'>{price}</span>
            </td>
            <td>
                <Button onClick={() => removeItemFromCart(id)}>REMOVE</Button>  
            </td>
        </tr>
    )
}

export default ProductRow;
