import './cart-list.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import ProductRow from '../product-row/product-row.component';

const CartList = () => {
    const { cartItems, getTotal } = useContext(CartContext);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Product
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { cartItems.map((cartItem) => {
                        return (<ProductRow key={cartItem.id} cartItem={cartItem} />);
                    })}
                </tbody>
            </table>
            <span>Total: ${getTotal()}</span>
        </div>
    )
}

export default CartList;
